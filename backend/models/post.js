

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
    title: String,
    date: Date,
    category: String,
    image: String,
    author: String,
});

module.exports = mongoose.model('post', ProjectSchema)