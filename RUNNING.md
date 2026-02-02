# How to Run Wholeness - Food Scan

## Prerequisites
1.  **Node.js**: You need to install Node.js (v18 or higher) for the frontend. Download it from [nodejs.org](https://nodejs.org/).
2.  **Python**: You need Python 3.10+ installed.

## 1. Start the Backend (Python)
The backend handles the video analysis using the Gemini API.

1.  Open a terminal and navigate to the `backend` folder:
    ```powershell
    cd backend
    ```
2.  Install dependencies (if you haven't yet):
    ```powershell
    py -m pip install -r requirements.txt
    ```
3.  Start the server:
    ```powershell
    py -m uvicorn src.main:app --reload --host 0.0.0.0 --port 3000
    ```
    You should see "Uvicorn running on http://0.0.0.0:3000".

## 2. Start the Frontend (React)
The frontend allows you to record video and view results.

1.  Open a **new** terminal window and navigate to the `frontend` folder:
    ```powershell
    cd frontend
    ```
2.  Install dependencies:
    ```powershell
    npm install
    ```
3.  Start the development server:
    ```powershell
    npm run dev
    ```
4.  Control + Click the link shown (usually `http://localhost:5173`) to open the app in your browser.

## 3. Using the App
1.  Navigate to the **Food Scan** section.
2.  Click **Start Recording**.
3.  Point your camera at the food items and pan slowly.
4.  Click **Stop Recording**.
5.  Click **Analyze Recording**.
6.  Wait for the Gemini API to analyze the video and show the Meal Prep suggestions!
