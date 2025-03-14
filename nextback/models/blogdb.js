const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now }, 
    image: { type: String },
    slug: { type: String, unique: true }
});

module.exports = mongoose.model('Blog', blogSchema);