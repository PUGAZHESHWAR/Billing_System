from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse
import os
from app.controller.config import settings

from app.controller.database import engine, Base
from app.models import user  # Import User Model 

#router imports
from app.routers import user
from app.routers import auth


# Create all tables in the database
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Billing & Inventory Management System",
    description="FastAPI backend for tea shop, cafe, and restaurant management",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create upload directory
os.makedirs(settings.upload_dir, exist_ok=True)

# Static files for uploaded images
app.mount("/uploads", StaticFiles(directory=settings.upload_dir), name="uploads")

app.include_router(user.router, prefix="/api", tags=["User Management"])
app.include_router(auth.router, prefix="/api", tags=["Authentication"])


@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"}
    )

# @app.get("/")
# async def root():
#     return {
#         "message": "Billing & Inventory Management System API",
#         "version": "1.0.0",
#         "docs": "/docs"
#     }

# @app.get("/health")
# async def health_check():
#     return {"status": "healthy", "timestamp": "2024-01-01T00:00:00Z"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)