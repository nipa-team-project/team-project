from sqlalchemy.orm import Session, joinedload
from schemas.laptop_info_schema import LaptopSellFormCreate
from models.laptop_sell_info_model import LaptopSellInfo
from models.laptop_sell_image_model import LaptopSellImage
from core.s3 import s3_connection
from io import BytesIO
from core import util
from typing import List
from fastapi import UploadFile, Body


async def laptop_sell_info_input(sell_info: LaptopSellFormCreate, files: List[UploadFile],
                                 db: Session, token: str):
    account_id = int(util.decode_token(token))
    db_sell = LaptopSellInfo(device_name=sell_info.device_name, serial_number=sell_info.serial_number,
                             product_details=sell_info.product_details, step=sell_info.product_details,
                             account_id=account_id)
    db.add(db_sell)
    db.commit()

    # 슈퍼키가 유일성 만족하는 것 (후보키로 쓰는거죠 - PK 값을 대신할 수 있는) / 급한대로 device_name과 serial_number로 설정
    # 추후 refactoring 할 때 더 고민해보기
    sell_id = db.query(LaptopSellInfo.laptop_sell_info_id).filter(LaptopSellInfo.device_name == sell_info.device_name, '', 
                                              LaptopSellInfo.serial_number == sell_info.serial_number).first()
    
    s3 = s3_connection()
    # 처음에 등록하고
    # 이미지 값 차곡차곡 쌓아서 넣어주기 (FK)
    try:
        for i in files.file:
            file_data = await i.read()
            bucket_name = 'refurlab'
            s3_file_name = i.filename
            file_obj = BytesIO(file_data)
            s3.upload_fileobj(file_obj, bucket_name, s3_file_name)

            url = f"https://{bucket_name}.s3.amazonaws.com/{s3_file_name}"
            db_image = LaptopSellImage(path=url, laptop_sell_info_id=sell_id)
            db.add(db_image)
            db.commit()
    except Exception as e:
        print(e)
        
    # 서빙으로 이미지 경로 넘겨주기



# def laptop_sell_input(db: Session, sell_info: LaptopSellFormCreate):
#
#     # Laptop에 값들이 저장되어 있잖아요. -> sell_info에서 받아온 값의 아디를 찾으면되겠다.
