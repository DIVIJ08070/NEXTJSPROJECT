const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Blog = require('./models/blogdb');
const cors = require('cors');


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/blogdb')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
  app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find(); 
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error });
    }
});
app.get("/api/blogs/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog); 
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5002, () => {
    console.log('Server is running on port 5002');
});