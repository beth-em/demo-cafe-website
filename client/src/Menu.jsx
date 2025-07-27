import React from 'react';

/* Menu data hardcoded for now - can later be fetched from an API or database */

const menuData = [
    {
        category: 'Coffee',
        items: [
            {id: 1, name: 'Espresso', description: 'Single Shot', price: 0.50 },
            {id: 2, name: 'Latte', description: 'Espresso with steamed milk and foam', price: 4.25 },
            {id: 3, name: 'Cold Brew', description: 'Smooth cold brewed coffee', price: 3 },
        ],
    },
    {
        category: 'Pastries',
        items: [
            { id: 4, name: 'Scones', description: 'Orange Cranberry, Blueberry Lemon, Rasberry Cardamom', price: 2.50 },
            {id: 5, name: 'Muffins', description: 'Peach Strussel, Chocolate, Banana Bread', price: 1.50 },
            {id: 6, name: 'Pan Dulce', description: 'Conchas, Puerqitos', price: 1.50 },
        ],
    },
    {
        category: 'Grab & Go',
        items: [
            {id: 1, name: 'Turkey Havarti Croissant', description: 'Thinly sliced turkey on a bed of lettuce with havarti, tomato, red onion and dijon-garlic aoli', price: 6.50 },
            {id: 1, name: 'Avocado-Egg Breakfast', description: 'Mashed avocados on toasted whole grain bread topped with hard-boiled eggs and green onions', price: 3 },
            {id: 1, name: 'Tuna Melt', description: 'Tuna salad mix on a bed of lettuce with swiss cheese, red onion, tomato on whole grain bread', price: 3 },
        ],
    },
];
    /* Menu component that renders the categories and items */
    export default function Menu() {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-4xl font-semibold text-rose-800 mb-8 text-center">Our Menu</h2>

                {/* Loop through each category */}
                {menuData.map(({ category, items }) => (
                    <section key={category} className="mb-10">
                        <h3 className="text-2xl font-bold text-rose-700 mb-4 border-b border-rose-300 pb-1">
                          {category}
                        </h3>

                        {/* List of items in this category */}
                        <ul className="space-y-4">
                            {items.map(({ id, name, description, price }) => (
                                <li
                                  key={id}
                                  className="flex justify-between items-center border-b border-rose-100 pb-2"
                                >
                                  <div>
                                    <p className="font-semibold text-rose-900">{name}</p>
                                    <p className="text-sm text-rose-600">{description}</p>
                                  </div>
                                  <div className="font-semibold text-rose-800">${price.toFixed(2)}</div>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        );
}

