import React from 'react';
import './Body_blog.css';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';

const Main = () => {
  const blogEntries = Object.keys(localStorage).filter(key => key.includes('blogEntry_')).map(key => {
    const entry = JSON.parse(localStorage.getItem(key));
    return (
      <div key={entry.id} className="card">
        <div className="card-content">
          <h2 className="title">{entry.title}</h2>
          <div className="info">
            <span>Author: {entry.author}</span>
            <span>Category: {entry.category}</span>
          </div>
          <p className="text">{entry.content.substring(0, 150)}...</p>
          <Link to={`/blog/${entry.id}`} className="read-more">Read more →</Link>
        </div>
        <div className="image">
          <img src={entry.image} alt="Blog Image" />
        </div>
      </div>
    );
  });

  return (
    <>
      <Logo />
      <div>
        <main className="main" id="main">
          <section>
            {blogEntries}
          </section>
        </main>
      </div>
    </>
  );
};

export default Main;
