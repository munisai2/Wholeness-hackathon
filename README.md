# Wholeness - Health & Fitness Companion
## Gemini 3 Hackathon Project

Welcome to the **Wholeness** repository. This project is a real-time multimodal companion that transforms your camera into a personal trainer and your kitchen into a science-backed nutrition lab.

### Team Structure & Features
This project is organized to allow our 4-person team to work collaboratively.

#### Folder Structure
- **/frontend**: Next.js Application (User Interface, 3D Models, Camera Interactions)
- **/backend**: Node.js/Express Server (API, Database, Gemini Integration)
- **/ai_services**: Specialized Python scripts (if needed for video generation)

### Features & Locations

| Feature | Description | Code Location |
| :--- | :--- | :--- |
| **3D Body Model** | Interactive 3D human model navigation | `frontend/src/components/3d_body/` |
| **Food & Disease Info** | Sliding pages for details | `frontend/src/pages/body_part_details/` |
| **Quick Scan** | Scan food for meal prep (Vision) | `frontend/src/features/food_scan/` |
| **Workout Assistant** | Real-time form correction & motivation | `frontend/src/features/workout_assistant/` |
| **Collaborative Story** | Multiplayer story-based workouts | `frontend/src/features/collab_story/` |
| **Personalized Video** | Video generation (Face Swap/Avatar) | `backend/services/video_gen/` |

### Getting Started

1. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. **Backend**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

---
*Created for Gemini 3 Hackathon*
