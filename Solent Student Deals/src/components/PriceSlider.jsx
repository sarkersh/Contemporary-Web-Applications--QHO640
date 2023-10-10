import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Link, useNavigate } from 'react-router-dom';


// A component that renders a price slider with two round circles
const PriceSlider = () => {

    const navigate = useNavigate();

    // A state variable that tracks the min and max prices
    const [price, setPrice] = useState([10, 300]);

    // A function that handles the change event of the slider
    const handleChange = (event, newValue) => {
        // Update the state with the new value of the slider
        setPrice(newValue);

        // Get the name and checked value of the target element
        const priceRange = newValue.toString().replace(',', '-')

        console.log("PRICE >>>>", priceRange);
        const path = `/deals?price_range=${priceRange}`;

        // Navigate to the /deals route with the query string
        navigate(path );

    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">PRICE</h1>
            <Slider
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={500}
                style={{ color: 'gray' }}
            />
            <div className="flex justify-between">
                <span>Min: £{price[0]}</span>
                <span>Max: £{price[1]}</span>
            </div>
        </div>
    );
};

export default PriceSlider;
