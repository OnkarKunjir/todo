const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title : String,
    status : String
});

module.exports = TodoSchema;