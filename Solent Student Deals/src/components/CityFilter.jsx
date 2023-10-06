import React, { useState } from 'react';

// A component that renders a single city with a checkbox
const City = ({ name, checked, onChange }) => {
    return (
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
    );
};

// A component that renders a list of cities with checkboxes and a search box
const CityFilter = () => {
    // An array of ten cities
    const cities = [
        'Birmingham',
        'London',
        'Leeds',
        'Manchester',
        'leicester',
        'Wolverhampton',
        'Bradford',
        'Bristol',
        'Liverpool',
        'Peterborough',
    ];

    // A state variable that tracks the checked status of each city
    const [checked, setChecked] = useState(
        // Initialize the state with an object that has false values for each city
        Object.fromEntries(cities.map((city) => [city, false]))
    );

    // A state variable that tracks the search query
    const [query, setQuery] = useState('');

    // A function that handles the change event of the checkboxes
    const handleChange = (event) => {
        // Get the name and checked value of the target element
        const { name, checked } = event.target;

        // Update the state with the new checked value for the corresponding city
        setChecked((prev) => ({ ...prev, [name]: checked }));
    };

    // A function that handles the input event of the search box
    const handleInput = (event) => {
        // Get the value of the target element
        const { value } = event.target;

        // Update the state with the new query value
        setQuery(value);
    };

    // A function that filters the cities based on the query
    const filterCities = () => {
        // Convert the query to lowercase
        const lowerQuery = query.toLowerCase();

        // Return an array of cities that match the query (case-insensitive)
        return cities.filter((city) => city.toLowerCase().includes(lowerQuery));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold ">Location</h1>
            <input
                type="text"
                className="w-full border p-2 my-2"
                placeholder="Search for a city"
                value={query}
                onInput={handleInput}
            />
            <div className="flex flex-col gap-2">
                {filterCities().map((city) => (
                    <City
                        key={city}
                        name={city}
                        checked={checked[city]}
                        onChange={handleChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default CityFilter;
