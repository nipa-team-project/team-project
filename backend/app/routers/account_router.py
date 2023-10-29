from fastapi import APIRouter
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from core import util

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
    account = account_crud.get_account(session, form_data.password)
    if not account or not account_crud.pwd_context.verify(form_data.password, account.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"}
        )

    return {
        "access_token": util.encode_token(account),
        "token_type": "bearer",
        "id": account.id
    }