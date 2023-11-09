from fastapi import APIRouter, Header, Depends, UploadFile, Form
from starlette import status
from schemas.laptop_info_schema import LaptopSellFormCreate
from crud import laptop_sell_crud
from db.database import db
from sqlalchemy.orm import Session
from typing import List,Annotated


router = APIRouter()


@router.post("/sell", status_code=status.HTTP_200_OK)
async def image_upload(device_name: Annotated[str, Form()], serial_number: Annotated[str, Form()], product_details: Annotated[str, Form()], step: Annotated[int,Form()],
                       files: List[UploadFile], session: Session = Depends(db.session), token: str = Header(None)):
   return await laptop_sell_crud.laptop_sell_info_input(device_name=device_name,serial_number=serial_number,product_details=product_details,
                                                  step=step, files=files,db=session, token=token)
