from sqlalchemy.orm import Session
from models import admin_account_model as models
from models import admin_account_model as schemas


def get_account(db: Session, id: str, name: str, page: int = 1):
    page_size = 7
    skip = (page - 1) * page_size

    query = db.query(models.Account)
    data_count = query.count()

    return (
        query
        .order_by(models.Account.account_id)
        .offset(skip)
        # .filter(models.Account.id == id, models.Account.admin == True, models.Account.nickname.like(f"%{name}%"))
        .filter(models.Account.id == id, models.Account.nickname.like(f"%{name}%"))
        .all(),
        data_count
    )
