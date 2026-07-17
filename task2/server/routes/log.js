const express = require('express');
const router = express.Router();
const store = require('../data/store');
const requireAuth = require('../middleware/auth');

// GET /api/log — fetch all entries (public)
router.get('/', (req, res) => {
  const entries = store.getAll();
  res.status(200).json({
    success: true,
    count: entries.length,
    data: entries
  });
});

// POST /api/log — create new entry (protected)
router.post('/', requireAuth, (req, res) => {
  const { type, title, link, platform, date } = req.body;

  // Validate required fields
  if (!type || !title) {
    return res.status(400).json({
      success: false,
      error: 'type and title are required fields'
    });
  }

  // DELETE /api/log/:id — remove an entry (protected)
router.delete('/:id', requireAuth, (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid id — must be a number'
    });
  }

  const deleted = store.remove(id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      error: `Entry with id ${id} not found`
    });
  }

  res.status(200).json({
    success: true,
    data: deleted
  });
});

  // Validate type is one of the allowed values
  const allowedTypes = ['DSA', 'BUILD', 'VIDEO', 'MUSIC', 'LIFE'];
  if (!allowedTypes.includes(type)) {
    return res.status(400).json({
      success: false,
      error: `type must be one of: ${allowedTypes.join(', ')}`
    });
  }

  const entry = store.create({ type, title, link, platform, date });

  res.status(201).json({
    success: true,
    data: entry
  });
});

module.exports = router;