import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body_blog from './components/Body_blog';
import Crear_blog from './components/Crear_blog';
import BlogEntry from './components/BlogEntry';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body_blog />} />
        <Route path="/Crear_blog" element={<Crear_blog />} />
        <Route path="/blog/:id" element={<BlogEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
