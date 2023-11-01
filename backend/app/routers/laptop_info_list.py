from typing import List
from fastapi import APIRouter, Depends, HTTPException,Response
from sqlalchemy.orm import Session

from crud import laptop_info_list as crud
from schemas import laptop_info_list as schemas
import logging
from db.database import db

router = APIRouter()
logger = logging.getLogger(__name__)


# @router.get("/purchase/goods/", response_model=List[schemas.Laptop])
# def read_laptops(skip: int = 0, limit: int = 10, db: Session = Depends(db.session)):
#     laptops = crud.get_laptops(db, skip=skip, limit=limit)
#     return laptops

# @router.get("/purchase/goods/", response_model=List[schemas.Laptop])
# def read_laptops(skip: int = 0, limit: int = 10, db: Session = Depends(db.session)):
#     try:
#         laptops = crud.get_laptops(db, skip=skip, limit=limit)
#         if laptops is None:
#             raise ValueError
#         return Response(content=laptops, status_code=200)
#     except ValueError:
#         raise HTTPException(status_code=404, detail="Laptops not found")
#     except Exception:
#         raise HTTPException(status_code=500, detail="Internal Server Error")

@router.get("/purchase/goods/", response_model=List[schemas.Laptop])
def read_laptops(skip: int = 0, limit: int = 6, db: Session = Depends(db.session)):
    try:
        laptops = crud.get_laptops(db, skip=skip, limit=limit)
        if laptops is None or len(laptops) == 0:
            raise ValueError
        return laptops
    except ValueError:
        raise HTTPException(status_code=404, detail="Laptops not found")
    except Exception:
        raise HTTPException(status_code=500, detail="Internal Server Error")


# @router.post("/purchase/{laptop_id}/goods/details/", response_model=List[schemas.Image])
# def get_laptop_images(laptop_id: int, db: Session = Depends(db.session)):
#     images = crud.get_laptop(db, laptop_id=laptop_id)
#     return images


@router.post("/purchase/{laptop_id}/goods/details/", response_model=List[schemas.Image])
def get_laptop_images(laptop_id: int, db: Session = Depends(db.session)):
    try:
        images = crud.get_laptop(db, laptop_id=laptop_id)
        if images is None or len(images) == 0:
            raise ValueError
        return images
    except ValueError:
        raise HTTPException(status_code=404, detail="Images not found for the given laptop ID")
    except Exception:
        raise HTTPException(status_code=500, detail="Internal Server Error")

