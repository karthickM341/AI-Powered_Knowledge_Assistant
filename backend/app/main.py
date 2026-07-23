from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.auth import router as auth_router
from app.api.documents import router as document_router
from app.api.chat import router as chat_router
from app.api.analytics import router as analytics_router

app = FastAPI(
    title="AI-Powered Knowledge Assistant",
    version="1.0.0"
)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(document_router)
app.include_router(chat_router)
app.include_router(analytics_router)

@app.get("/")
def home():
    return {
        "message": "AI-Powered Knowledge Assistant API is running successfully!"
    }