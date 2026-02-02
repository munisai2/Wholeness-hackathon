from fastapi import UploadFile, HTTPException
from google import genai
from google.genai import types
import os
import shutil
import tempfile
import json
import asyncio

# Initialize Gemini Client
client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

async def analyze_video(file: UploadFile):
    try:
        # Save uploaded file to temp file
        with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as temp_video:
            shutil.copyfileobj(file.file, temp_video)
            temp_video_path = temp_video.name

        print(f"Video saved to {temp_video_path}")

        # Upload to Gemini
        video_file = client.files.upload(file=temp_video_path)
        print(f"Video uploaded to Gemini: {video_file.name}")

        # Wait for processing
        while video_file.state.name == "PROCESSING":
            print("Waiting for video processing...")
            await asyncio.sleep(2)
            video_file = client.files.get(name=video_file.name)

        if video_file.state.name == "FAILED":
            raise HTTPException(status_code=500, detail="Video processing failed.")

        # Analyzis Prompt
        prompt = """
        Analyze this video of food items.
        1. List every food item identified.
        2. Extrapolate the quantity/weight of each item.
        3. Provide estimated nutritional info (Calories, Protein, Carbs, Fat) for each item.
        4. Suggest a healthy meal prep plan using these ingredients.
        
        Return the result in structured JSON format with keys: "items" (list of objects with name, quantity, nutrition), "meal_prep" (list of strings or objects describing the plan).
        """

        response = client.models.generate_content(
            model="gemini-2.0-flash-exp",
            contents=[
                types.Content(
                    role="user",
                    parts=[
                        types.Part.from_uri(
                            file_uri=video_file.uri,
                            mime_type=video_file.mime_type
                        ),
                        types.Part.from_text(text=prompt),
                    ]
                )
            ],
            config=types.GenerateContentConfig(
                response_mime_type="application/json"
            )
        )
        
        # Cleanup temp file
        os.unlink(temp_video_path)

        return json.loads(response.text)

    except Exception as e:
        print(f"Error in analyze_video: {e}")
        raise HTTPException(status_code=500, detail=str(e))
