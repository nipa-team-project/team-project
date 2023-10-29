from passlib.context import CryptContext
from sqlalchemy.orm import Session
from schemas.account_schema import AccountCreate
from models.account_model import Account

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_password_hash(password):
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def create_account(db: Session, account: AccountCreate):
    db_account = Account(id=account.id, platform_type=account.platform_type,
                         admin=account.admin, password=get_password_hash(account.password), nickname=account.nickname, email=account.email,
                         phonenumber=account.phonenumber )

    db.add(db_account)
    db.commit()


def get_account(db: Session, id: str):
    return db.query(Account).filter(Account.id == id).first()
