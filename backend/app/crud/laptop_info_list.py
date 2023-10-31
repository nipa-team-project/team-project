from sqlalchemy.orm import Session, joinedload
from models import laptop_info_list as models
from schemas import laptop_info_list as schemas


# def get_laptop(db: Session, laptop_id: int):
#     return db.query(models.Laptop).filter(models.Laptop.laptop_info_list_id == laptop_id).first()

def get_laptop(db: Session, laptop_id: int):
    return db.query(models.Image).filter(models.Image.laptop_info_list_id == laptop_id).all()

def get_laptops(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Laptop).options(joinedload(models.Laptop.laptop_info_list_image)).offset(skip).limit(
        limit).all()




