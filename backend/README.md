# Wholeness Backend Server

Node.js + Express server handling API requests, Database interactions, and Gemini integration.

## Setup
1. `npm install`
2. Create `.env` file with `GEMINI_API_KEY`.
3. `npm run dev`

## Structure
- `src/controllers`: Request handlers.
- `src/models`: Database models (Mongoose/Prisma).
- `src/services`: External services (Gemini, Video Gen).
- `src/routes`: API Route definitions.
