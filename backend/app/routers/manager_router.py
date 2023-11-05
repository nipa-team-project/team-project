from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session

from db.database import db
from crud import admin_account_crud
from schemas import admin_account_schema
from models import admin_account_model as models

router = APIRouter(
)


@router.get("/accounts", status_code=200)
def read_accounts(page: int = 1, name: str = None, db: Session = Depends(db.session)):
    page_size = 7
    skip = (page - 1) * page_size

    accounts_query = db.query(models.Account)

    # accounts = db.query(models.Account).filter(models.Account.admin == True).offset(skip).limit(page_size).all()
    # data_count = db.query(models.Account).filter(models.Account.admin == True).count()

    if name is not None:
        accounts_query = accounts_query.filter(models.Account.nickname.like(f"%{name}%"))

    accounts = db.query(models.Account).offset(skip).limit(page_size).all()
    data_count = db.query(models.Account).count()


    if not accounts:
        raise HTTPException(status_code=404, detail="No admin accounts found")

    return {"accounts": accounts, "data_count": data_count}
