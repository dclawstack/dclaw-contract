from pydantic import BaseModel
from datetime import datetime
from typing import List

class Contract(BaseModel):
    id: str
    title: str
    contract_type: str
    status: str
    parties: list[str]
    expiry_date: str
    risk_score: int
    created_at: datetime

class ContractCreate(BaseModel):
    title: str
    contract_type: str
