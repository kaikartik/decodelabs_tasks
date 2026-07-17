const db = require('./db');

function getAll() {
  return db.prepare(`
    SELECT * FROM entries
    ORDER BY date DESC, id DESC
  `).all();
}

function create(data) {
  const stmt = db.prepare(`
    INSERT INTO entries (type, title, link, platform, date)
    VALUES (@type, @title, @link, @platform, @date)
  `);

  const result = stmt.run({
    type: data.type,
    title: data.title,
    link: data.link || null,
    platform: data.platform || null,
    date: data.date || new Date().toISOString().split('T')[0]
  });

  // Fetch and return the newly created entry
  return db.prepare('SELECT * FROM entries WHERE id = ?').get(result.lastInsertRowid);
}

function remove(id) {
  const entry = db.prepare('SELECT * FROM entries WHERE id = ?').get(id);
  if (!entry) return null;

  db.prepare('DELETE FROM entries WHERE id = ?').run(id);
  return entry;
}

module.exports = { getAll, create, remove };