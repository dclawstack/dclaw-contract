from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "DClaw Contract"
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/dclaw_contract"
    cors_origins: str = "*"

    class Config:
        env_prefix = "CONTRACT_"

settings = Settings()
