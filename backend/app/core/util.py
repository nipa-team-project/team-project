from datetime import timedelta, datetime

from fastapi.security import OAuth2PasswordBearer
from jose import jwt
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
ACCESS_TOKEN_EXPIRE_MINUTES = 30
SECRET_KEY = "7140a5c1493b8edc0c23fe71be40a98344e2418fa79479c5e8762f73545faca6"
ALGORITHM = "HS256"


# make access token
def encode_token(account):
    if account:
        data = {
            'sub': account.id,
            'exp': datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        }

        access_token = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
        return access_token

