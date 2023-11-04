from dataclasses import asdict
from db import database
from fastapi import FastAPI
from routers import account_router
from core.config import conf


app = FastAPI()


def create_app():
    c = conf()
    conf_dict = asdict(c)
    database.db.init_app(app, **conf_dict)
    app.include_router(account_router.router)

    return app


app = create_app()

