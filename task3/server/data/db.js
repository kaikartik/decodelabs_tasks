const Database = require('better-sqlite3');
const path = require('path');

// Database file lives at server/data/journal.db
const dbPath = path.join(__dirname, 'journal.db');
const db = new Database(dbPath);

// Enable WAL mode — better performance for concurrent reads
db.pragma('journal_mode = WAL');

// Create table if it doesn't exist yet
// This runs every time the server starts but only creates the table once
db.exec(`
  CREATE TABLE IF NOT EXISTS entries (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    type      TEXT    NOT NULL CHECK(type IN ('DSA','BUILD','VIDEO','MUSIC','LIFE')),
    title     TEXT    NOT NULL,
    link      TEXT,
    platform  TEXT,
    date      TEXT    NOT NULL DEFAULT (date('now'))
  );
`);

module.exports = db;