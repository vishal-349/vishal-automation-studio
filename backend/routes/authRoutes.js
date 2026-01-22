const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected route
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Protected profile data',
    user: req.user,
  });
});

module.exports = router;
