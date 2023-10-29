from sqlalchemy.orm import Session, joinedload
from models import laptop_info_list as models
from schemas import laptop_info_list as schemas



def get_laptop(db: Session, laptop_id: int):
    laptop = db.query(models.Laptop).options(joinedload(models.Laptop.images)).filter(models.Laptop.laptop_info_list_id == laptop_id).first()
    return laptop

def get_laptops(db: Session, skip: int = 0, limit: int = 100):
    laptops = db.query(models.Laptop).options(joinedload(models.Laptop.images)).offset(skip).limit(limit).all()
    return laptops

# def create_laptop(db: Session, laptop: schemas.LaptopCreate):
#     db_laptop = models.Laptop(**laptop.dict())
#     db.add(db_laptop)
#     db.commit()
#     db.refresh(db_laptop)
#     return db_laptop