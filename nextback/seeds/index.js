const mongoose = require('mongoose');
const fs = require('fs').promises;
const path = require('path');
const Blog = require('../models/blogdb');

mongoose.connect('mongodb://localhost:27017/blogdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const seedDB = async () => {
    try {
        const jsonPath = path.join(__dirname, 'a.json');

        await fs.access(jsonPath);
        const data = await fs.readFile(jsonPath, 'utf-8');
        const blogPosts = JSON.parse(data);

        if (!Array.isArray(blogPosts)) {
            throw new Error('Invalid JSON format: Expected an array');
        }

        await Blog.deleteMany({});
        await Blog.insertMany(blogPosts);
        console.log('Database successfully seeded');

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close()
            .then(() => console.log('MongoDB connection closed'))
            .catch(err => console.error('Error closing connection:', err));
    }
};

seedDB();