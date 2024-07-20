// src/components/BlogPage.js
import React from "react";
import BlogList from "./BlogList";
import SubscriptionForm from "./SubscriptionForm";
import "./css/BlogPage.css";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <header className="header">
      <h1 className="orange">FROKER</h1><h1>BLOG</h1>
      <p>Articles covering the most recent <br /> updates and advancements</p>
      </header>
      <section className="recent-posts">
        <h2>Recent Posts</h2>
        <BlogList />
      </section>
      <SubscriptionForm />
    </div>
  );
};

export default BlogPage;
