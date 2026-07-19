# Task 3 — Database Integration

SQLite database layer added to the Task 2 API — built as part of the DecodeLabs Full Stack Development Internship 2026.

## What's built
- SQLite database via better-sqlite3
- Schema with constraints: NOT NULL, CHECK, AUTOINCREMENT
- Parameterized queries (SQL injection prevention)
- Full CRUD: Create, Read, Delete entries
- Data persists across server restarts
- WAL mode enabled for performance

## Schema
CREATE TABLE entries (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  type     TEXT NOT NULL CHECK(type IN ('DSA','BUILD','VIDEO','MUSIC','LIFE')),
  title    TEXT NOT NULL,
  link     TEXT,
  platform TEXT,
  date     TEXT NOT NULL DEFAULT (date('now'))
);

## Tech used
Node.js · Express.js · better-sqlite3 · SQLite

## How to run
cd server
npm install
npm run dev

Database file (journal.db) is auto-created on first run.
