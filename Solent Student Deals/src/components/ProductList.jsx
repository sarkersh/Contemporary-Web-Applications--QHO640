
import React, { useState, useEffect } from 'react';
import ProductListItem from './ProductListItem'; // Import the product list item component
import Breadcrumbs from '@mui/material/Breadcrumbs'; // Import the breadcrumbs component from Material UI
import Link from '@mui/material/Link'; // Import the link component from Material UI
import FilterListIcon from '@mui/icons-material/FilterList'; // Import the filter icon from Material UI
import Select from '@mui/material/Select'; // Import the select component from Material UI
import MenuItem from '@mui/material/MenuItem'; // Import the menu item component from Material UI
import ViewListIcon from '@mui/icons-material/ViewList'; // Import the list view icon from Material UI
import ViewModuleIcon from '@mui/icons-material/ViewModule'; // Import the grid view icon from Material UI
import Typography from '@mui/material/Typography';
import {CatShoes} from "../assets/index.js";


import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";


// A component that renders a product list with a breadcrumb and a toolbar
const ProductList = () => {

    //Firebase Stuff
    const [deals, setDeals] = useState([]);
    const dealsCollectionRef = collection(db, "deals");

    
    const getDeals = async () => {
        const data = await getDocs(dealsCollectionRef);
        const deals = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        setDeals(deals);

    };

    useEffect(() => {

        getDeals();

    }, [])


    // A state variable that tracks the sort by option
    const [sortBy, setSortBy] = useState('Relevance');

    // A function that handles the change event of the select component
    const handleChange = (event) => {
        // Get the value of the target element
        const { value } = event.target;

        // Update the state with the new value
        setSortBy(value);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        Home
                    </Link>
                    <Link color="inherit" href="/products">
                        Products
                    </Link>

                </Breadcrumbs>
                <div className="flex items-center gap-4">
                    <FilterListIcon />
                    <Select value={sortBy} onChange={handleChange}>
                        <MenuItem value="Relevance">Relevance</MenuItem>
                        <MenuItem value="PriceLowToHigh">Price: Low to High</MenuItem>
                        <MenuItem value="PriceHighToLow">Price: High to Low</MenuItem>
                        <MenuItem value="RatingHighToLow">Rating: High to Low</MenuItem>
                    </Select>
                    <ViewListIcon />
                    <ViewModuleIcon />
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {deals.map((deal) => {

                    return (
                        <ProductListItem key={deal.id} {...deal } />
                    )})

                }
            </div>

        </div>
    );
};

export default ProductList;
