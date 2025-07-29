import React from 'react';
import './Home.css'; // <- link to your custom CSS
import logo from './assets/Cafe_Business_Logo.png';
import cafeImage from './assets/Cafe_Illustration.png';

export default function Home() {
  return (
    <div className="home-container">

      {/* Logo */}
      <img src={logo} alt="Sunday Place Logo" className="logo" />

      {/* Top nav */}
      <nav className="nav">
        <a href="/">Welcome</a>
        <a href="/menu">Menu</a>
        <a href="/order">Order</a>
        <a href="/visit">Visit Us</a>
      </nav>

      {/* Cafe illustration */}
      <img src={cafeImage} alt="Café Front" className="cafe-image" />

      {/* Fixed bottom nav */}
      <footer className="bottom-nav">
        <a href="mailto:hello@sundayplace.com">
          <span>📧</span>
          <span>Email</span>
        </a>
        <a href="tel:+11234567890">
          <span>📱</span>
          <span>Call</span>
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer">
          <span>📍</span>
          <span>Map</span>
        </a>
        <a href="#hours">
          <span>⏰</span>
          <span>Hours</span>
        </a>
      </footer>
    </div>
  );
}
