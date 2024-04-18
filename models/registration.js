const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  tournament:String,
  fideId: String,
  rating: String,
  gender: String,
  dob: String,
  parentName: String,
  institute: String,
  mobileNumber: String,
  alternateMobileNumber: String,
  addressLine1: String,
  addressLine2: String,
  state: String,
  district: String,
  pincode: String,
  aicfId: String,
  entryFee: Number,
  finalAmount: Number
});

const User = mongoose.model('registration', userSchema);

module.exports = User;
