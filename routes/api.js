const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const verifyToken = require('./verifyToken');

const router = express.Router();
require('dotenv/config');

mongoose.connect(process.env.DB_URL , { useNewUrlParser: true ,  useUnifiedTopology: true} , ()=>{
  console.log('connected');
});

router.use(verifyToken);
router.get('/' , (req , res)=>{
  res.send('yo this is top secret');
});

router.get('/featch' , (req , res)=>{
  User.find( { email : req.user.email } , (err , docs)=>{
    if(err){
      res.send('Something went wrong');
    }
    else{
      res.json(docs[0].todo_list);
    }
  });
});

router.post('/add' , (req , res)=>{
  //TODO :: give user chance to edit title before submitting.
  const new_todo = {
    title : 'New todo',
    status : 'Yet to start'
  }
  User.updateOne( {email : req.user.email} , {$push : { todo_list : new_todo }} , (err , result)=>{
    if(err){
      console.log('failed to add');
    }
    else{
      res.send();
    }
  });
});

router.put('/update' , (req , res)=>{
  let todo = req.body;
  User.updateOne( {email : req.user.email , 'todo_list._id' : todo._id} , { 'todo_list.$.title' : todo.title , 'todo_list.$.status' : todo.status } , (err , result)=>{
    if(err){
      console.log('failed to modify');
    }
    else{
      res.send();
    }
  });
});

router.delete('/remove/:id' , (req , res)=>{
  let todo_id = req.params.id;
  // todos = todos.filter( t => t.id != _id );
  User.updateOne( {email : req.user.email} , {$pull : {todo_list : {_id : todo_id}} } ,  (err , result)=>{
    if(err){
      console.log('error while deleting todo');
    }
    else{
      res.send();
    }
  });
});

module.exports = router;