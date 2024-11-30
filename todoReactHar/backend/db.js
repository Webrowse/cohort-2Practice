const mongoose = require('mongoose');
require('dotenv').config();


const { Schema } = mongoose;

mongoose.connect('mongodb+srv://adarsh:aZdVStcLTD5uRxH4@cluster0.anowx.mongodb.net/')
.then(() => console.log("connected DB"))
.catch(() => console.log("error in DB"));

const todoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports  = {
    todo
}

