"use client";

import React, { useState } from "react";

const BlogForm = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
    image: "",
    slug: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog);
    // Here you would typically handle the backend submission
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-xl mt-10 transition duration-300">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        📝 Add a New Blog Post
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        {/* Title */}
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full p-3 mt-1 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter the blog title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            value={blog.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 mt-1 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="Write a short description..."
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleChange}
            className="w-full p-3 mt-1 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="Author name"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={blog.date}
            onChange={handleChange}
            className="w-full p-3 mt-1 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={blog.image}
            onChange={handleChange}
            className="w-full p-3 mt-1 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter image URL"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Slug (URL identifier)
          </label>
          <input
            type="text"
            name="slug"
            value={blog.slug}
            onChange={handleChange}
            className="w-full p-3 mt-1 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter blog slug (e.g., my-first-blog)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-700 transition duration-300 text-lg font-semibold"
        >
          🚀 Submit Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;