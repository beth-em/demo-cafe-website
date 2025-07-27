// src/App.jsx
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './Home.jsx';
import Order from './Order.jsx';
import Visit from './Visit.jsx';

/**
 * App wraps all routes with a Navbar and defines page routes using React Router.
 */
export default function App() {
  return (
    <Router>
      {/* Always visible navigation */}
      <Navbar />

      {/* Page-specific content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </Router>
  );
}
