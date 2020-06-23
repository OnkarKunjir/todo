const mongoose = require('mongoose');
const TodoSchema = require('./todo');

const UserSchema = new mongoose.Schema({
    email     : String,
    password  : String,
    todo_list : [TodoSchema],
});

const User = new mongoose.model('user' , UserSchema);
module.exports = User;