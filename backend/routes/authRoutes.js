const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

console.log('[ROUTES] AuthRoutes Loaded ✅');

// Test route
router.get('/test', (req, res) => {
  res.send('🔥 Route aktif bro!');
});

// Real routes
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
