import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

// A component that renders a price slider with two round circles
const PriceSlider = () => {
    // A state variable that tracks the min and max prices
    const [price, setPrice] = useState([0, 500]);

    // A function that handles the change event of the slider
    const handleChange = (event, newValue) => {
        // Update the state with the new value of the slider
        setPrice(newValue);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">Price Slider</h1>
            <Slider
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={500}
                style={{ color: 'blue' }}
            />
            <div className="flex justify-between">
                <span>Min: ${price[0]}</span>
                <span>Max: ${price[1]}</span>
            </div>
        </div>
    );
};

export default PriceSlider;
