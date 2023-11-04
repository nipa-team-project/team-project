# # models 파일은 데이터베이스 테이블과 매칭되는 모델
# from sqlalchemy import Column, BIGINT, String
# from sqlalchemy.orm import relationship
# from db.database import Base
#
#
# class Laptop(Base):
#     laptop_id = Column(BIGINT, primary_key=True, autoincrement=True)
#     device_name = Column(String(255), nullable=False)
#     os = Column(String(30), nullable=False)
#     screen_size = Column(String(30), nullable=False)
#     hardware = Column(String(100), nullable=False)
#     brand = Column(String(30),nullable=False)
#
#     # 관계 매핑
#     laptop_sell_infos = relationship("LaptopSellInfo", back_populates="laptops")
