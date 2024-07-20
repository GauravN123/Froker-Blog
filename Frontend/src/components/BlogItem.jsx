// src/components/BlogItem.jsx
import React from "react";
import "./css/BlogItem.css";

// Use import.meta.glob to import all images in the assets folder
const images = import.meta.glob('../assets/*', { eager: true });

const BlogItem = ({ blog }) => {
  const imagePath = images[`../assets/${blog.image}`].default;

  return (
    <div className="blog-item">
      <img src={imagePath} alt={blog.subject} className="blog-image" />
      <p>
        by {blog.author} - {blog.date}
      </p>
      <h3>{blog.subject}</h3>
      <p>{blog.excerpt}</p>
      <a href={`/blogs/${blog.id}`}>Read More...</a>
    </div>
  );
};

export default BlogItem;
