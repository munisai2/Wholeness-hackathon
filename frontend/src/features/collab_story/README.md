# Collaborative Story Mode

This feature visualizes a group workout as a story-based race (e.g., animal race).

## Architecture
- **WebSockets**: Uses Socket.io (client) to sync progress with friends.
- **Story Rendering**: `StoryCanvas.tsx` renders the animated race/scene.
- **Progress Tracking**: Updates based on workout metrics (reps, speed).

## Key Files
- `Lobby.tsx`: Waiting room for friends.
- `StoryCanvas.tsx`: The game/story visualization.
- `Leaderboard.tsx`: Real-time ranking.
