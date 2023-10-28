from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session
from starlette import status

from db.database import db

from crud import account_crud
from schemas import account_schema

router = APIRouter(
)


@router.post("/accounts", status_code=status.HTTP_200_OK)
def account_create(_account: account_schema.AccountCreate, session: Session = Depends(db.session)):
    account_crud.create_account(db=session, account=_account)
