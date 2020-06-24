// api for login and signup
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const inputValidation = require('../models/inputValidation');

const router = require('express').Router();

router.post('/sign_up' , async (req , res)=>{
    // validate input object
    const {value , error} =  inputValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check user does exist
    const userExist =  await User.findOne({email : value.email});
    if (userExist) return res.status(400).send('user already exist');

    // hash password
    const hashedPassword = await bcrypt.hash(value.password , 10 );
    // add new user to the database
    const user = new User({
        email : value.email,
        password : hashedPassword
    });
    const savedUser = await user.save();
    
    
    // generating token
    const token  = jwt.sign( {email : user.email} , process.env.JWT_SECRET );
    // res.header('auth-token' , token);
    
    res.send({'auth-token' : token});
});


router.post('/login' , async (req , res)=>{
    // validate input object
    const {value , error} =  inputValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check user exist
    const user =  await User.findOne({email : value.email});
    if (!user) return res.status(400).send('user does not exist');


    // validate user password
    const valid = await bcrypt.compare(value.password , user.password);
    if( !valid ) return res.status(400).send('username or password not correct');

    // generating token
    const token  = jwt.sign( {email : user.email} , process.env.JWT_SECRET );
    // res.header('auth-token' , token);
    res.send({'auth-token' : token});

});


module.exports = router;