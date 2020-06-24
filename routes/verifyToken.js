const express = require('express');
const jwt = require('jsonwebtoken');

module.exports = (req , res , next) =>{
    const token = req.cookies.token;
    if(!token) return res.status(401).send('please log in bro.');

    try{
        const verified = jwt.verify(token , process.env.JWT_SECRET);
        req.user = verified;
    }
    catch(err){
        res.status(400).send('invalid token');
    }
    next();
}