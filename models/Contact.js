const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	message: { type: String, required: true },
	mobile: { type: String, required: true }
});

const contact = mongoose.model("Contact", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		mobile: Joi.string().required().label("Mobile"),
    message: Joi.string().required().label("Message"),
	});
	return schema.validate(data);
};

module.exports = { contact, validate };
