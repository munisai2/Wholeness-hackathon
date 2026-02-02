# Real-time Workout Assistant

This feature uses the camera to analyze user posture and provide real-time feedback and motivation.

## Logic Flow
1. **Pose Estimation**: potentially using `@mediapipe/pose` or sending frames to Gemini 3 Multimodal Live API.
2. **Feedback Loop**: Compare user pose to ideal pose.
3. **Audio/Visual Feedback**: "Keep your back straight!", "Great job!".

## Key Files
- `WorkoutCamera.tsx`: Custom camera feed handler.
- `PoseOverlay.tsx`: Canvas drawing skeleton on top of video.
- `FeedbackDisplay.tsx`: UI for text/audio suggestions.
