const express = require('express');
const cors = require('cors');
const logRoutes = require('./routes/log');

const app = express();
const PORT = 3000;

// ---- Middleware ----
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// ---- Routes ----
app.use('/api/log', logRoutes);

// ---- Health check ----
app.get('/', (req, res) => {
  res.json({
    message: 'qvrtik dev journal API is running',
    version: '1.0.0',
    endpoints: {
      'GET /api/log': 'fetch all entries',
      'POST /api/log': 'create entry (requires x-admin-password header)'
    }
  });
});

// ---- 404 handler ----
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.path} not found`
  });
});

// ---- Error handler ----
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// ---- Start server ----
app.listen(PORT, () => {
  console.log(`
  ┌─────────────────────────────────────┐
  │   qvrtik dev journal API            │
  │   running on http://localhost:3000  │
  └─────────────────────────────────────┘
  `);
});