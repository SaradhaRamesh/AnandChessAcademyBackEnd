const express = require('express');
const router = express.Router();
const Course = require('../models/Course'); // Import the Course model

// Route to handle POST request to store course details
router.post('/', async (req, res) => {
  try {
    const { name, mobileNumber, email, schedule, deliveryMethod, level } = req.body;
    // Create a new course instance
    const course = new Course({ name, mobileNumber, email, schedule, deliveryMethod, level });
    // Save the course details to the database
    await course.save();
    res.status(201).json(course); // Respond with the created course object
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to handle GET request to retrieve all course details
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find(); // Retrieve all courses from the database
    res.json(courses); // Respond with the retrieved courses
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
