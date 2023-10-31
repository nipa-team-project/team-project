import secrets

from fastapi import APIRouter
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Optional
from starlette import status
from fastapi.security import OAuth2PasswordRequestForm
from core import util
from core.redis_config import redis_config


from db.database import db
from crud import account_crud
from schemas import account_schema

router = APIRouter(
)


@router.post("/accounts", status_code=status.HTTP_200_OK)
async def account_create(_account: account_schema.AccountCreate, session: Session = Depends(db.session)):
    account_crud.create_account(db=session, account=_account)


@router.post("/accounts/login", response_model=account_schema.Token, status_code=status.HTTP_200_OK)
async def account_login(form_data: OAuth2PasswordRequestForm = Depends(),
                        session: Session = Depends(db.session)):
    account = account_crud.get_account(session, form_data.username)

    if not account or not account_crud.pwd_context.verify(form_data.password, account.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect id or password",
            headers={"WWW-Authenticate": "Bearer"}
        )

    rd = redis_config()
    refresh_token = util.create_refresh_token(account.account_id)
    rd.set(refresh_token, account.account_id)

    return {"access_token": util.create_access_token(account.account_id),
            "refresh_token": refresh_token}


@router.post("/accounts/refresh-token", status_code=status.HTTP_200_OK)
async def account_refresh_token_checking(refresh_token_key: str):
    rd = redis_config()
    check = rd.get(refresh_token_key)

    if check is None:
        raise HTTPException(status_code=401, detail="Unauthorized")

    return {"access_token": util.create_access_token(int(check))}



@router.get("/accounts/login/{sns}")
async def account_sns_login(oauth_client=Depends(util.get_oauth_client())):
    state = secrets.token_urlsafe(32)
    login_url = oauth_client.get_oauth_login_url(state=state)
    return login_url


@router.get("/callback")
async def callback(
        code: str, state: Optional[str] = None, oauth_client=Depends(util.get_oauth_client)
):
    token_response = await oauth_client.get_tokens(code, state)
    return {"response": token_response}


@router.get("/refresh")
async def callback(
        oauth_client=Depends(util.get_oauth_client),
        refresh_token: str = Depends(util.get_authorization_token)
):
    token_response = await oauth_client.refresh_access_token(
        refresh_token=refresh_token)

    return {"response": token_response}


@router.get("/sns_account", dependencies=[Depends(util.login_required)])
async def get_sns_account(
        oauth_client=Depends(util.get_oauth_client()),
        access_token: str = Depends(util.get_authorization_token),
):
    user_info = await oauth_client.get_user_info(access_token=access_token)
    return {"account": user_info}


@router.get("/accounts/duplicate/",)
async def account_id_check(id: str, session: Session = Depends(db.session)):
    check = account_crud.get_account(session, id)
    print(check)

    if check:
        raise HTTPException(status_code=400)

    raise HTTPException(status_code=200)


