from fastapi import APIRouter, UploadFile, File
from src.controllers.food_controller import analyze_video

router = APIRouter()

@router.post("/scan-video")
async def scan_video_endpoint(file: UploadFile = File(...)):
    return await analyze_video(file)
