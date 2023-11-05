from sqlalchemy.orm import Session, joinedload
from models import admin_laptop_info_list as models
from schemas import admin_laptop_info_list as schemas


def get_images(db: Session, name: str, page: int = 1):
    page_size = 9
    skip = (page - 1) * page_size

    query = db.query(models.Laptop).options(joinedload(models.Laptop.laptop_info_list_image))
    data_count = query.count()

    return (
        query
        .order_by(models.Laptop.laptop_info_list_id.asc())
        .offset(skip)
        .filter(models.Laptop.title.like(f"%{name}%"))
        .all(),
        data_count
    )
