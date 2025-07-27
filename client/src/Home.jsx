import Menu from './Menu.jsx';

/* Home component displays the main hero and menu section */
export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <header className="text-center bg-rose-100 p-6 shadow-sm">
                <h1 className="text-5xl font-bold text-rose-800 mb-4">The Sunday Place</h1>
                <p className="text-xl text-rose-600 max-w-xl mx-auto mb-6">
                    Fresh pastries, artisan coffee, and warm community - all week long.
                </p>
                <button className="bg-rose-700 text-white px-6 py-3 rounded-full shadow hover:bg-rose-600 transition">
                    Order Ahead
                </button>
            </header>

            {/* Menu */}
            <main className="py-12">
                <Menu />
            </main>
        </div>
    );
}