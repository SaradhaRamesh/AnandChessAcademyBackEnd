const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  addressLine1: String,
  addressLine2: String,
  state: String,
  district: String,
  pincode: String
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  fideId: String,
  rating: String,
  gender: String,
  dob: {
    date: Number,
    month: Number,
    year: Number
  },
  parentName: String,
  institute: String,
  mobileNumber: String,
  alternateMobileNumber: String,
  address: addressSchema,
  aicfId: String,
  entryFee: Number,
  finalAmount: Number
});

const User = mongoose.model('registration', userSchema);

module.exports = User;
