import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const SearchNavBar2 = () => {
    // State variables for the input fields
    const [location, setLocation] = useState('');
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    // Navigate object for navigation
    const navigate = useNavigate();

    // Handle input changes
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    // Handle search button click
    const handleSearch = () => {
        // Construct the query string from the input values
        const queryString = `?location=${location}&keyword=${keyword}&category=${category}`;

        // Navigate to the /deals route with the query string
        navigate('/deals' + queryString);
    };

    // Sample cities for the dropdown list
    const cities = [
        'London',
        'Manchester',
        'Birmingham',
        'Glasgow',
        'Liverpool',
        'Bristol',
        'Leeds',
        'Edinburgh',
        'Cardiff',
        'Belfast',
    ];

    return (
        <div className="nav-bar bg-purple-600 p-4 flex items-center justify-between">
            <div className="logo text-white text-2xl font-bold">Deal Finder</div>
            <div className="search flex items-center space-x-2">
                <div className="location relative w-32 h-8">
                    <input
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={handleLocationChange}
                        onClick={handleLocationChange}
                        className="w-full h-full border border-gray-300 rounded-md p-2"
                    />
                    {location && (
                        <div className="dropdown absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            {cities.map((city) => (
                                <div
                                    key={city}
                                    className="option p-2 hover:bg-purple-200 cursor-pointer"
                                    onClick={() => setLocation(city)}
                                >
                                    {city}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <input
                    type="text"
                    placeholder="Enter keyword"
                    value={keyword}
                    onChange={handleKeywordChange}
                    className="keyword w-32 h-8 border border-gray-300 rounded-md p-2"
                />
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="category w-32 h-8 border border-gray-300 rounded-md p-2"
                >
                    <option value="">Select category</option>
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="kitchenware">Kitchenware</option>
                    <option value="music">Music</option>
                    <option value="shoes">Shoes</option>
                    <option value="sports">Sports</option>
                    <option value="travel">Travel</option>
                    <option value="other">Other</option>
                </select>
                <button
                    onClick={handleSearch}
                    className="search-button bg-white text-purple-600 font-bold rounded-md px-4 py-2 hover:bg-purple-200"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchNavBar2;
