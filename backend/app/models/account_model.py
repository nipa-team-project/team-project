# models 파일은 데이터베이스 테이블과 매칭되는 모델
from sqlalchemy import Column, BIGINT, String, BOOLEAN, DATETIME, func
from db.database import Base


class Account(Base):
    __tablename__ = 'account'

    account_id = Column(BIGINT, primary_key=True, autoincrement=True)
    id = Column(String(30), unique=True, nullable=False)
    platform_type = Column(String(1), nullable=False) # R, K, N
    admin = Column(BOOLEAN, nullable=False) # true, false
    password = Column(String(255), nullable=False)
    nickname = Column(String(16), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    phonenumber = Column(String(255), unique=True, nullable=False)
    create_date = Column(DATETIME, nullable=False, default=func.utc_timestamp())
    update_date = Column(DATETIME)
