import { Link, NavLink } from 'react-router-dom';

/**
 * Navbar component provides navigation links to different pages of the site
 */
export default function Navbar() {
    return (
        <nav className="bg-rose-100 p-4 shadow-md sticky top-0 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo or brand name */}
                <Link to="/" className="text-2xl font-bold text-rose-800">
                    The Sunday Place
                </Link>

                {/* Navigation Links */}
                <div className="space-x-6">
                    <NavLink
                    to="/"
                    className={({ isActive }) => 
                        isActive ? 'text-rose-700 font-semibold' : 'text-gray-700 hover:text-rose-600'
                    }
                >
                    Home
                </NavLink>
                <NavLink to="/order"
                    className={({ isActive }) => 
                        isActive ? 'text-rose-700 font-semibold' : 'text-gray-700 hover:text-rose-600'
                    }
                >
                    Order Ahead
                </NavLink>
                <NavLink to="/visit"
                    className={({ isActive }) => 
                        isActive ? 'text-rose-700 font-semibold' : 'text-gray-700 hover:text-rose-600'
                    }
                >
                    Visit Us
                </NavLink>
                </div>
            </div>
        </nav>
    );
}