from sqlalchemy import Column, Integer, String, ForeignKey, DATETIME, func
from sqlalchemy.orm import relationship
from db.database import Base


# class Image(Base):
#     __tablename__ = 'laptop_info_list_image'
#
#     laptop_info_image_id = Column(Integer, primary_key=True, index=True)
#     laptop_info_list_id = Column(Integer, ForeignKey("laptop_info_list.laptop_info_list_id"))
#     # laptop_info_list_id 필드를 통해 Laptop 클래스와의 관계를 설정
#     # Laptop 클래스는 이미 정의되었으므로 직접 참조할 수 있음
#     # 그러나 순환 참조를 방지하기 위해 여기서도 문자열로 클래스 이름을 지정
#     laptop = relationship("Laptop", back_populates="images", post_update=True)
#     path = Column(String(255), nullable=False)
#     create_date = Column(DATETIME, nullable=False, default=func.utc_timestamp())
#     update_date = Column(DATETIME)
