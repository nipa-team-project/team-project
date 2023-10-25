# models 파일은 데이터베이스 테이블과 매칭되는 모델
from sqlalchemy import Column, BIGINT, String, BOOLEAN, DATETIME
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Account(Base):
    __tablename__ = "account"

    account_id = Column(BIGINT, primary_key=True, autoincrement=True)
    id = Column(String, unique=True, nullable=False)
    platform_type = Column(String, nullable=False)
    admin = Column(BOOLEAN, nullable=False)
    password = Column(String, nullable=False)
    nickname = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    phonenumber = Column(String, unique=True, nullable=False)
    create_date = Column(DATETIME, nullable=False)
    update_date = Column(DATETIME, nullable=False)

