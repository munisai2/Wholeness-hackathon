# Setup Instructions

## Prerequisites
1.  **Node.js**: It appears Node.js is not installed or not in your PATH. Please install standard Node.js (v18+) from [nodejs.org](https://nodejs.org/).
2.  **Python**: Ensure Python 3.10+ is installed.

## Backend Setup
1.  Navigate to `backend`:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    py -m pip install -r requirements.txt
    ```
3.  Run Server:
    ```bash
    py src/main.py
    ```
    Server will run on `http://localhost:3000`.

## Frontend Setup
1.  Navigate to `frontend`:
    ```bash
    cd frontend
    ```
2.  Install dependencies (after installing Node.js):
    ```bash
    npm install
    ```
3.  Run Dev Server:
    ```bash
    npm run dev
    ```
