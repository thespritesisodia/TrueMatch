const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

// Hardcoded credentials for testing login
const hardcodedEmail = "user@example.com";
const hardcodedPassword = "yourpassword"; // Plaintext password (not hashed)

// POST /auth/login (Direct login using hardcoded credentials)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Check if the provided email matches the hardcoded one
    if (email !== hardcodedEmail) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hardcoded password
    if (password !== hardcodedPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If the email and password match, login successful
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
