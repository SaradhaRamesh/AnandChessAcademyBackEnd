const express = require('express');
const regis = require('../models/registration');

const router = express.Router();

// Registration Endpoint
router.post('/', async (req, res) => {
  try {
    const newUser = new regis(req.body);
    await newUser.save();
    res.status(201).send('User registered successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Fetch User by Email Endpoint
router.get("/", async (req, res, next) => {
  try {
    // Retrieve all contacts from the database
    const allContacts = await regis.find();

    res.status(200).send(allContacts);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

module.exports = router;
