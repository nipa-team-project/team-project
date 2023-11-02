from sqlalchemy.orm import Session, joinedload
from models import laptop_info_list as models
from schemas import laptop_info_list as schemas


# def get_laptop(db: Session, laptop_id: int):
#     return db.query(models.Laptop).filter(models.Laptop.laptop_info_list_id == laptop_id).first()

def get_laptop(db: Session, laptop_id: int):
    return db.query(models.Image).filter(models.Image.laptop_info_list_id == laptop_id).all()


def get_laptops(db: Session, skip: int = 0, limit: int = 6):
    return db.query(models.Laptop).options(joinedload(models.Laptop.laptop_info_list_image)).offset(skip).limit(
        limit).all()


def get_laptops_asc(db: Session, skip: int = 0, limit: int = 6, rating=str):
    return (
        db.query(models.Laptop)
        .options(joinedload(models.Laptop.laptop_info_list_image))
        .filter(models.Laptop.rank == rating)  # 'rating' 조건 추가
        .order_by(models.Laptop.create_date.asc())  # 오름차순 추가
        .offset(skip)
        .limit(limit)
        .all()
    )


def get_laptops_desc(db: Session, skip: int = 0, limit: int = 6, rating=str):
    return (
        db.query(models.Laptop)
        .options(joinedload(models.Laptop.laptop_info_list_image))
        .filter(models.Laptop.rank == rating)  # 'rating' 조건 추가
        .order_by(models.Laptop.create_date.desc())  # 오름차순 추가
        .offset(skip)
        .limit(limit)
        .all()
    )
