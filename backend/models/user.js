const mongoose = require('mongoose');

// Define User schema with enhancements
const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'user@example.com']
  },
  password: { 
    type: String, 
    required: true, 
    minlength: 6 // Enforces minimum password length
  }
}, { timestamps: true }); // Adds 'createdAt' and 'updatedAt' automatically

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
