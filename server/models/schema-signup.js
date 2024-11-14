// models/User.js
const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function() {
        return this.password === this.confirmPassword;
      },
      message: 'Passwords do not match.'
    }
  }
});

// Export the model
const User = mongoose.model('User', userSchema);
module.exports = User;
