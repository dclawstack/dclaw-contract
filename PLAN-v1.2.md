# DClaw Contract — v1.2 Feature Roadmap

> Based on: Y Combinator vertical SaaS principles, trending GitHub repos (contract-management), AI product research (Ironclad, Icertis, Agiloft, LinkSquares)

## Pre-Flight Checklist

- [ ] `frontend/package-lock.json` committed after any `npm install` / dependency change
- [ ] `frontend/next-env.d.ts` exists and is committed
- [ ] `docker-compose.yml` healthchecks correct
- [ ] `frontend/Dockerfile` declares `ARG NEXT_PUBLIC_API_URL` before `RUN npm run build`

## v1.0 Feature Inventory (Current)

- [ ] Contract repository & search
- [ ] Contract lifecycle stages
- [ ] Template library
- [ ] Approval workflow
- [ ] Real backend CRUD (no mocks)
- [ ] Docker + Helm deployment
- [ ] Alembic migrations
- [ ] Backend tests

---

## v1.2 Roadmap

### P0 — Must Have (Ship in v1.0, demo-ready)

#### 1. AI Contract Copilot (Negotiation Assistant)
**Description:** AI assistant that helps negotiate contracts by suggesting counter-clauses, flagging unfavorable terms, and explaining legal language in plain English.
- **AI Angle:** Clause comparison against playbook. LLM-powered plain-language explanations.
- **Backend:** `/api/v1/ai/negotiate` endpoint. Playbook RAG.
- **Frontend:** Inline AI suggestions in contract editor. Redline comparison view.
- **Files:** `backend/app/services/negotiation_ai.py`, `frontend/src/components/contract-copilot.tsx`

#### 2. Contract Lifecycle Management (CLM)
**Description:** End-to-end contract workflow: draft → review → approve → sign → store → renew/terminate.
- **Backend:** State machine workflow. Deadline alerts. Renewal reminders.
- **Frontend:** Contract pipeline board. Detail view with audit trail.
- **Files:** `backend/app/services/clm_workflow.py`, `frontend/src/app/contracts/pipeline.tsx`

#### 3. Template Builder & Dynamic Fields
**Description:** No-code template builder with variables, conditional clauses, and branding.
- **Backend:** Template engine with Jinja2-like syntax. PDF generation.
- **Frontend:** Visual template builder. Preview with sample data.
- **Files:** `backend/app/services/templates.py`

#### 4. AI Contract Extraction & Metadata
**Description:** Upload any contract. AI extracts parties, dates, amounts, renewal terms, termination clauses, and obligations.
- **AI Angle:** Document parsing + structured extraction (LLM with JSON schema).
- **Backend:** `/api/v1/ai/extract` endpoint. Metadata indexing.
- **Frontend:** Upload → structured data preview. Editable extraction results.
- **Files:** `backend/app/services/extraction.py`

### P1 — Should Have (v1.1–1.2)

#### 5. Obligation & Milestone Tracking
**Description:** Extract and track contractual obligations with deadlines. Auto-reminders.
- **Backend:** Obligation extraction + tracking engine.
- **Frontend:** Obligation dashboard. Milestone timeline.

#### 6. Contract Analytics & Reporting
**Description:** Contract volume, cycle time, risk distribution, vendor spend analysis.
- **Backend:** Analytics aggregation.
- **Frontend:** Executive dashboard with KPIs.

#### 7. E-Signature Integration
**Description:** Native e-signature via DocuSign/HelloSign. Status tracking.
- **Backend:** E-sign API integration. Webhook handling.
- **Frontend:** Send for signature button. Status badge.

#### 8. Vendor & Counterparty Management
**Description:** Profile pages for each vendor with contract history, risk score, and negotiation insights.
- **Backend:** Counterparty aggregation + risk scoring.
- **Frontend:** Vendor directory with contract timeline.

### P2 — Could Have (v1.3+)

#### 9. AI Contract Drafting from Brief
**Description:** Generate first-draft contracts from a business brief and template.

#### 10. Renewal Risk Prediction
**Description:** AI predicts which contracts are at risk of non-renewal based on engagement signals.

#### 11. Third-Party Paper Ingestion
**Description:** Upload contracts from counterparties. AI maps their clauses to your playbook.

#### 12. Blockchain Notarization
**Description:** Immutable contract hash storage on blockchain for tamper-proof audit trails.

---

## Implementation Priority

1. **Week 1–2:** AI Contract Copilot (P0.1) + CLM Workflow (P0.2)
2. **Week 3–4:** Template Builder (P0.3) + AI Extraction (P0.4)
3. **Week 5–6:** Obligation Tracking (P1.5) + Contract Analytics (P1.6)
4. **Week 7–8:** E-Signature (P1.7) + Vendor Management (P1.8)
