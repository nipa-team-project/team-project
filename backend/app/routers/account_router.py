from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session
from starlette import status

from db.database import get_db

from crud import account_crud
from schemas import account_schema

router = APIRouter(
)


@router.post("/accounts", status_code=status.HTTP_200_OK)
def account_create(_account: account_schema.AccountCreate, db: Session = Depends(get_db)):
    account_crud.create_account(db=db, account_create=_account)
