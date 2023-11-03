from fastapi import HTTPException
from sqlalchemy.orm import Session, joinedload
from models import laptop_info_list as models
from schemas import laptop_info_list as schemas


def get_laptops_desc(db: Session, page: int = 1, rating=str):
    page_size = 6
    skip = (page - 1) * page_size
    return (
        db.query(models.Laptop)
        .options(joinedload(models.Laptop.laptop_info_list_image))
        .filter(models.Laptop.rank == rating)
        .order_by((models.Laptop.price.desc()))
        .offset(skip)
        .limit(page_size)
        .all()
    )


def get_laptops_asc(db: Session, page: int = 1, rating=str):
    page_size = 6
    skip = (page - 1) * page_size
    return (
        db.query(models.Laptop)
        .options(joinedload(models.Laptop.laptop_info_list_image))
        .filter(models.Laptop.rank == rating)
        .order_by((models.Laptop.price.asc()))
        .offset(skip)
        .limit(page_size)
        .all()
    )
