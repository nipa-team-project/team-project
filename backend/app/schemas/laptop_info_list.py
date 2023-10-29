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
    os: str
    screen_size: str
    business_usage: str
    internet_lecture_usage: str
    gamming_usage: str
    hardware: str

class LaptopCreate(LaptopBase):
    pass

class Laptop(LaptopBase):
    laptop_info_list_id: int
    create_date: datetime
    update_date: datetime
    images: List[Image] = []

    class Config:
        from_attributes = True
