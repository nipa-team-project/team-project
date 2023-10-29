from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from crud import laptop_info_list as crud
from schemas import laptop_info_list as schemas
from db.database import db
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

# @router.post("/laptop_info_list/", response_model=schemas.Laptop)
# def create_laptop(laptop: schemas.LaptopCreate, db: Session = Depends(db.session)):
#     return crud.create_laptop(db=db, laptop=laptop)


@router.get("/purchase/goods/", response_model=List[schemas.Laptop])
def read_laptops(skip: int = 0, limit: int = 100, db: Session = Depends(db.session)):
    try:
        laptops = crud.get_laptops(db,skip=skip, limit=limit)
        return laptops
    except Exception as e:
        print(logger.error(e))
        raise HTTPException(status_code=500, detail="An error occurred.")



# @router.get("/purchase/goods/details/{laptop_id}", response_model=schemas.Laptop)
# def read_laptop(laptop_id: int, db: Session = Depends(db.session)):
#     db_laptop = crud.get_laptop(db, laptop_id=laptop_id)
#     if db_laptop is None:
#         raise HTTPException(status_code=404, detail="Laptop not found")
#     return db_laptop

@router.get("/purchase/goods/details/{laptop_id}/", response_model=List[schemas.Image])
def read_images(laptop_id: int, db: Session = Depends(db.session)):
    # 데이터베이스에서 laptop_id에 해당하는 Laptop을 조회합니다.
    db_laptop = crud.get_laptop(db, laptop_id=laptop_id)
    if db_laptop is None:
        raise HTTPException(status_code=404, detail="Laptop not found")
    return db_laptop.images
