from pydantic import BaseModel
from typing import List
from datetime import datetime

class ImageBase(BaseModel):
    path: str

class ImageCreate(ImageBase):
    pass

class Image(ImageBase):
    laptop_info_image_id: int
    laptop_info_list_id: int
    create_date: datetime
    update_date: datetime


class Config:
        orm_mode = True

class LaptopBase(BaseModel):
    title: str
    price: int
    price_time_sale: int
    purchase_limit: str
    os: str
    screen_size: str
    business_usage: str
    internet_lecture_usage: str
    gaming_usage: str
    hardware: str
    hashtag: str
    purchase_limit: str
    delivery_fee: str
    product_code: int
    own_product_code: str
    manufacturing_company: str
    brand: str
    stock: str

class LaptopCreate(LaptopBase):
    pass

class Laptop(LaptopBase):
    laptop_info_list_id: int
    create_date: datetime
    update_date: datetime
    images: List[Image] = []

    class Config:
        from_attributes = True