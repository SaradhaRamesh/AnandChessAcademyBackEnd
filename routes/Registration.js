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
router.get('/user/:email', async (req, res) => {
  try {
    const user = await regis.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
