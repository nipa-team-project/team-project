from dataclasses import asdict
from db import database
from fastapi import FastAPI
from routers import account_router, laptop_router, laptop_sell_router
from core.config import conf


def create_app():
    c = conf()
    app = FastAPI()
    conf_dict = asdict(c)
    database.db.init_app(app, **conf_dict)
    app.include_router(account_router.router)
    app.include_router(laptop_router.router)
    app.include_router(laptop_sell_router.router)
    return app


app = create_app()

