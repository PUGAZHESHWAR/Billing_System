from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse

from app.controller.database import engine, Base
from app.models import user  # Import User Model 

# Create all tables in the database
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Billing & Inventory Management System",
    description="FastAPI backend for tea shop, cafe, and restaurant management",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)