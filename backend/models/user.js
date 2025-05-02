const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // Email must be unique
  password: { type: String, required: true } // Password field
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
