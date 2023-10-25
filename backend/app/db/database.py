from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


DB_URL = "mysql+pymysql://root:password@127.0.0.1:3306/refurlab?charset=utf8mb4"
engine = create_engine(DB_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

