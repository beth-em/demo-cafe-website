// src/App.jsx
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import Order from './Order.jsx';
import Visit from './Visit.jsx';

/**
 * App wraps all routes with a Navbar and defines page routes using React Router.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </Router>
  );
}

export default App;