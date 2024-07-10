import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogEntry = () => {
  const { id } = useParams();
  const [blogEntry, setBlogEntry] = useState(null);

  useEffect(() => {
    const entry = localStorage.getItem(`blogEntry_${id}`);
    if (entry) {
      setBlogEntry(JSON.parse(entry));
    }
  }, [id]);

  if (!blogEntry) {
    return <div>Blog entry not found.</div>;
  }

  return (
    <div className="blog-details">
      <h2>{blogEntry.title}</h2>
      <p>Author: {blogEntry.author}</p>
      <p>Category: {blogEntry.category}</p>
      <img src={blogEntry.image} alt="Blog" />
      <p>{blogEntry.content}</p>
    </div>
  );
};

export default BlogEntry;
