from dataclasses import asdict
from db import database
from fastapi import FastAPI
from routers import manager_router
from core.config import conf


def create_app():
    c = conf()
    app = FastAPI()
    conf_dict = asdict(c)
    database.db.init_app(app, **conf_dict)
    app.include_router(manager_router.router)

    return app


app = create_app()

