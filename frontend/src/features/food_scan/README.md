# Food Scan Feature (Quick Scan)

This directory handles the camera input for scanning food items and displaying meal prep recommendations.

## Logic Flow
1. User opens camera (`CameraView.tsx`).
2. Image captured and sent to Backend/Gemini Vision API.
3. Response (Meal identification + Prep info) displayed in `MealPrepResult.tsx`.

## Key Files
- `CameraView.tsx`
- `ScanButton.tsx`
- `ResultsDisplay.tsx`
