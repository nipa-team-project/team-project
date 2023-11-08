from pydantic import BaseModel
from fastapi import UploadFile
from typing import List


class LaptopSellFormCreate(BaseModel):
    device_name: str
    serial_number: str
    product_details: str
    step: int
    file: List[UploadFile]




