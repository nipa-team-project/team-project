from fastapi import APIRouter, Header, Depends, UploadFile
from starlette import status
from schemas.laptop_info_schema import LaptopSellFormCreate
from crud import laptop_sell_crud
from db.database import db
from sqlalchemy.orm import Session
from typing import List


router = APIRouter()


@router.post("/sell", status_code=status.HTTP_200_OK)
async def image_upload(sell_info: LaptopSellFormCreate, files: List[UploadFile],
                       session: Session = Depends(db.session), token: str = Header(None)):
    await laptop_sell_crud.laptop_sell_info_input(sell_info=sell_info, files=files,db=session, token=token)
