from fastapi import APIRouter
from datetime import datetime
from uuid import uuid4
from dclaw_contract.models import Contract, ContractCreate

router = APIRouter()

@router.post("/contracts", response_model=Contract)
async def create_item(payload: ContractCreate):
    return Contract(
        id=str(uuid4()),
        title=payload.title,
        contract_type=payload.contract_type,
        status="draft",
        parties=["Acme Corp", "Vendor Inc"],
        expiry_date="2026-12-31",
        risk_score=3,
        created_at=datetime.utcnow(),
    )

@router.get("/contracts/{contract_id}/clauses")
async def get_item(contract_id: str):
    return [{"id": f"{contract_id}-c1", "title": "Indemnification"}, {"id": f"{contract_id}-c2", "title": "Limitation of Liability"}, {"id": f"{contract_id}-c3", "title": "Termination"}, {"id": f"{contract_id}-c4", "title": "Governing Law"}, {"id": f"{contract_id}-c5", "title": "Confidentiality"}]
