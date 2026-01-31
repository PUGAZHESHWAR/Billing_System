import os
from pydantic import ConfigDict
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Environment
    app_env: str = "development"

    # Database
    database_url: str

    # Security
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    # App
    debug: bool = True

    # Model configuration (Pydantic v2)
    model_config = ConfigDict(
        env_file=".env.prod" if os.getenv("APP_ENV") == "production" else ".env.dev",
        extra="allow",
    )

settings = Settings()
