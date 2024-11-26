const mongoose = require('mongoose');

// Define the Feedback Schema
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Trims any extra spaces
    maxlength: 100, // Maximum length of the name
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'], // Email regex validation
  },
  message: {
    type: String,
    required: true,
    minlength: 10, // Minimum length of the message
    maxlength: 1000, // Maximum length of the message
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically add timestamp when the feedback is created
  },
});

// Create the Feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
