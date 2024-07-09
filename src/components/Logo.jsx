import React from 'react';
import './Logo.css';
import agregar from '../assets/agregar.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="hero">
      <h1>Your Journey Your Story</h1>
      <h2>Choose Your Favorite Destination.</h2>
      <Link to='/Crear_blog'>
        <img src={agregar} alt="Menu" className="svg-fixed-bottom-right" />
      </Link>
    </div>
  );
}

export default Logo;
