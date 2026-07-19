# Task 2 — Backend API Development

REST API for the qvrtik Dev Journal — built as part of the DecodeLabs Full Stack Development Internship 2026.

## What's built
- Express.js server on port 3000
- GET /api/log — fetch all journal entries (public)
- POST /api/log — create new entry (password protected)
- DELETE /api/log/:id — remove entry (password protected)
- Custom auth middleware using x-admin-password header
- Input validation with proper HTTP status codes (400, 401, 404, 201)

## Tech used
Node.js · Express.js · CORS

## How to run
cd server
npm install
npm run dev

Server starts at http://localhost:3000

## Endpoints
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | /api/log | No | Fetch all entries |
| POST | /api/log | Yes | Create entry |
| DELETE | /api/log/:id | Yes | Delete entry |

Auth header: x-admin-password: qvrtik2026
