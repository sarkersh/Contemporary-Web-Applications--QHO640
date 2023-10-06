import React, { useState, useEffect } from 'react';
//import axios from 'axios';

// A component that renders a single product category with a link
const Category = ({ name, url }) => {
    return (
        <div className="flex items-center">
            <a href={url} className="">
                {name}
            </a>
        </div>
    );
};

// A component that renders a list of product categories and a title
const CategoryFilter = () => {
    // An array of ten product categories
    const categories =[
        { name: 'Shoes', url: '1' },
        { name: 'Clothing', url: '2' },
        { name: 'Games', url: '3' },
        { name: 'Travel', url: '4' },
        { name: 'Watches', url: '5' },
        { name: 'Books', url: '6' },
        { name: 'Health & Beauty', url: '7' },
        { name: 'Phones', url: '8' },
        { name: 'Computers', url: '9' },
        { name: 'Sports', url: '[10' },
        ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">Location</h1>
            <div className="flex flex-col gap-2">
                {categories.map((category) => (
                    <Category key={category.name} name={category.name} url={category.url} />
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
