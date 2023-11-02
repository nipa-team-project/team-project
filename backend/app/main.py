from dataclasses import asdict
from db import database
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import account_router
from core.config import conf

def create_app():
    c = conf()
    app = FastAPI()
    conf_dict = asdict(c)
    database.db.init_app(app, **conf_dict)
    app.include_router(account_router.router)

    # CORS 미들웨어 추가
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return app

app = create_app()

app.include_router(account_router.router)


