const router = require("express").Router()
const {Admin} = require("../models/admin")
const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) =>{
    try{
    const { error } = validate(req.body);

    if(error)
        return res.status(400).send({ message: error.details[0].message });

    const user = await Admin.findOne({ email: req.body.email });
    if(!user)
        return res.status(401).send({ message:"Invalid Email "})

    const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if(!validPassword)
        return res.status(401).send({message: "Invalid Password"})

    var userToken = await jwt.sign({email:user.email}, 'periyaRagasiyam')

    res.header('auth',userToken).send(userToken)

}

catch(error){
res.status(500).send({message: "Internal Server Error"})
}

})

const validate = (data) =>{
    const schema = Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password"),

    })
    return schema.validate(data);
}

module.exports = router;