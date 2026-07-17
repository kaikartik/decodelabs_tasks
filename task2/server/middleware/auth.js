
const ADMIN_PASSWORD = 'qvrtik2026';

function requireAuth(req, res, next) {
  const password = req.headers['x-admin-password'];

  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({
      error: 'Unauthorized — invalid or missing password'
    });
  }

  next();
}

module.exports = requireAuth;