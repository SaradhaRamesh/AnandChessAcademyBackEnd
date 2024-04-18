const express = require('express');
const router = express.Router();
const { contact, validate } = require("../models/Contact");
const bcrypt = require("bcrypt");

router.post("/", async (req, res, next) => {
  try {
    // Validate the request body
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    // Check if user with the given email already exists
    const existingUser = await contact.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(409).send({ message: "User with given email already exists" });

    // Hash the password
    // const salt = await bcrypt.genSalt(Number(process.env.SALT));
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const newUser = new contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      mobile: req.body.mobile,
      message: req.body.message
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});
router.get("/", async (req, res, next) => {
  try {
    // Retrieve all contacts from the database
    const allContacts = await contact.find();

    res.status(200).send(allContacts);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

module.exports = router;
