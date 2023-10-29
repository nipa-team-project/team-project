from dataclasses import asdict
from db import database
from fastapi import FastAPI
from routers import laptop_info_list
from core.config import conf


app = FastAPI()


def list_app():
    c = conf()
    app = FastAPI()
    conf_dict = asdict(c)
    database.db.init_app(app, **conf_dict)
    app.include_router(laptop_info_list.router)

    return app


app = list_app()