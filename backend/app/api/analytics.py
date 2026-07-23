from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user

from app.services.analytics_service import get_dashboard_data

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


@router.get("/")
def dashboard(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return get_dashboard_data(db)