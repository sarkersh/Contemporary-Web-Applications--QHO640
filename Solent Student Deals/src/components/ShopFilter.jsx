import React, { useState } from 'react';

// A component that renders a single shop with a checkbox and a number
const Shop = ({ name, deals, checked, onChange }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id={name}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                <label htmlFor={name} className="ml-2">
                    {name}
                </label>
            </div>
            <span className="text-gray-500">{deals}</span>
        </div>
    );
};

// A component that renders a list of shops with checkboxes and a search box
const ShopFilter = () => {
    // An array of ten shops with their names and number of deals
    const shops = [
        { name: 'Amazon', deals: 120 },
        { name: 'Walmart', deals: 80 },
        { name: 'Target', deals: 60 },
        { name: 'Best Buy', deals: 40 },
        { name: 'Costco', deals: 35 },
        { name: 'eBay', deals: 30 },
        { name: 'Kohls', deals: 25 },
        { name: 'Macys', deals: 20 },
        { name: 'Sears', deals: 15 },
        { name: 'JCPenney', deals: 10 },
    ];

    // A state variable that tracks the checked status of each shop
    const [checked, setChecked] = useState(
        // Initialize the state with an object that has false values for each shop
        Object.fromEntries(shops.map((shop) => [shop.name, false]))
    );

    // A state variable that tracks the search query
    const [query, setQuery] = useState('');

    // A function that handles the change event of the checkboxes
    const handleChange = (event) => {
        // Get the name and checked value of the target element
        const { name, checked } = event.target;

        // Update the state with the new checked value for the corresponding shop
        setChecked((prev) => ({ ...prev, [name]: checked }));
    };

    // A function that handles the input event of the search box
    const handleInput = (event) => {
        // Get the value of the target element
        const { value } = event.target;

        // Update the state with the new query value
        setQuery(value);
    };

    // A function that filters the shops based on the query
    const filterShops = () => {
        // Convert the query to lowercase
        const lowerQuery = query.toLowerCase();

        // Return an array of shops that match the query (case-insensitive)
        return shops.filter((shop) => shop.name.toLowerCase().includes(lowerQuery));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">Shops</h1>
            <input
                type="text"
                className="w-full border p-2 my-2"
                placeholder="Search for a shop"
                value={query}
                onInput={handleInput}
            />
            <div className="flex flex-col gap-2">
                {filterShops().map((shop) => (
                    <Shop
                        key={shop.name}
                        name={shop.name}
                        deals={shop.deals}
                        checked={checked[shop.name]}
                        onChange={handleChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopFilter;
