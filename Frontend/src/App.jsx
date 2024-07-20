// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
import './components/css/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogPage />
      <Footer />
    </div>
  );
}

export default App;
