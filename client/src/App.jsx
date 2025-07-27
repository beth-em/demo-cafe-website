// ROOT COMPONENT OF WEBSITE - HERO/LANDING PAGE + FULL MENU

import './App.css';
import './index.css';
import Menu from './Menu.jsx';

function App() {
  return (
    // Wrapper div takes up full hight of screen and sets a soft prink background
    <div className="min-h-screen bg-rose-50 text-center">

      {/* ------------------------------- Hero Section ---------------------------------- */}
      <header className="flex flex-col items-center justify-center p-6 bg-rose-100 shadow-sm">
        <h1 className="text-5xl font-bold text-rose-800 mb-4">
          The Sunday Place
        </h1>

        {/* Subheading tagline to describe the vibe and services */}
        <p className="text-xl text-rose-600 max-w-xl mb-6">
          Fresh pastries, artisan coffee, and warm community – all week long.
          Order ahead and pick up at your convenience.
        </p>

        {/* CTA button (order form functionality added later...) */}
        <button className="bg-rose-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-rose-600 transition">
          Order Ahead
        </button>
      </header>

      {/* -------- Menu Section -------- */}
      <main className="py-12">
        {/* This displays the cafe's menu with catefories and items */}
        <Menu />
      </main>
    </div>
  );
}

// Export App so Vite can render it in index.js
export default App;
