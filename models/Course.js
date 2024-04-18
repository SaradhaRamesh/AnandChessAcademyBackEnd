const mongoose = require('mongoose');

// Define a schema for the course details
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
    required: true
  },
  deliveryMethod: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
