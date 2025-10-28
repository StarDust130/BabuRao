🧩 Team Roles
👨‍🎨 Frontend Developer (@Soap1-4)

Focus: UI/UX, pages, components, animations
Tasks:

Build pages: Home, Dashboard, Add Habit, AI Chat

Make the UI aesthetic using Tailwind

Integrate API calls using fetch('/api/...')

Handle user interactions (tick ✅, delete ❌, edit ✏️)

Frontend AI Prompt Example (for V0/Vibe):

“Create a modern responsive dashboard UI in Next.js + Tailwind for a Habit Tracker app. It should show habit cards with tick/cross buttons, a motivational quote area, and a navbar. Use soft colors, rounded cards, and minimal clean style.”


--------------------------------------------------------------------------------------------------------------------------
⚙️ Backend Developer (@Archiviste-ken)

Focus: Logic, APIs, and database
Tasks:

Setup MongoDB with Mongoose models: User, Habit, DailyLog

Build API routes in /app/api/habits

POST /api/habits → add habit

GET /api/habits → list habits

PATCH /api/habits/:id → mark complete/incomplete

Connect to AI API for chat suggestions (/api/ai route)

Backend AI Prompt Example:

“Create Next.js API routes for a habit tracker using MongoDB (Mongoose). Include routes to add, list, update, and delete habits. Each habit should have name, frequency, and completion history.”

--------------------------------------------------------------------------------------------------------------------------
🤖 AI/Logic Guy

Focus: AI integration + smart logic
Tasks:

Connect OpenAI / Gemini API

Build /api/ai endpoint that:

Takes user progress

Returns a motivational message or suggestion

Example prompt for AI API:

“You are a motivational friend. The user completed 4/5 habits today. Give short, friendly encouragement.”