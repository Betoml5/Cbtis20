

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Post = new Schema({
    title: String,
    content: String,
    date: String,
    category: String,
    author: String,
   
});

module.exports = mongoose.model('post', Post)