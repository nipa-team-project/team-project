from dataclasses import asdict
from fastapi.middleware.cors import CORSMiddleware
from db import database
from fastapi import FastAPI
from routers import laptop_info_list
from core.config import conf


app = FastAPI()

origins = [
    # "http://localhost:3000",  # React 앱의 주소를 여기에 넣음
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["total_count"]  # 사용자 정의 헤더 이름을 여기에 넣음
)


def list_app():
    c = conf()
    app = FastAPI()
    conf_dict = asdict(c)
    database.db.init_app(app, **conf_dict)
    app.include_router(laptop_info_list.router)

    return app


app = list_app()
