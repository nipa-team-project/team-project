from sqlalchemy.orm import Session, joinedload
from schemas.laptop_schema import LaptopInput
<<<<<<< HEAD
from models.laptop_model import Laptop

def laptop_input(db: Session, laptop: LaptopInput):
    db_laptop = Laptop(device_name=laptop.device_name, os=laptop.os, screen_size=laptop.screen_size,
=======
from models.laptop_model import Laptop2

def laptop_input(db: Session, laptop: LaptopInput):
    db_laptop = Laptop2(device_name=laptop.device_name, os=laptop.os, screen_size=laptop.screen_size,
>>>>>>> a86b6366bfb24ae0a2d7294f58ff0e2cf29e836a
                            hardware=laptop.hardware, brand=laptop.brand)
    db.add(db_laptop)
    db.commit()


