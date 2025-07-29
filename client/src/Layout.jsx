import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Cafe_Business_Logo.png';
import './Layout.css';

export default function Layout({ children }) {
    return (
        <div className="layout">
            {/* Logo */}
            <img src={logo} alt="Sunday Logo" className="logo" />

            {/* Top Nav */}
            <nav className="nav">
                <Link to="/">Welcome</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/order">Order</Link>
                <Link to="/visit">Visit</Link>
            </nav>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    );
}