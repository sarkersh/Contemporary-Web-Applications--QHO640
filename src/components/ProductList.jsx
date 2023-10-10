
import React, { useState, useEffect } from 'react';
import ProductListItem from './ProductListItem'; // Import the product list item component
import Breadcrumbs from '@mui/material/Breadcrumbs'; // Import the breadcrumbs component from Material UI
import Link from '@mui/material/Link'; // Import the link component from Material UI
import FilterListIcon from '@mui/icons-material/FilterList'; // Import the filter icon from Material UI
import Select from '@mui/material/Select'; // Import the select component from Material UI
import MenuItem from '@mui/material/MenuItem'; // Import the menu item component from Material UI
import ViewListIcon from '@mui/icons-material/ViewList'; // Import the list view icon from Material UI
import ViewModuleIcon from '@mui/icons-material/ViewModule'; // Import the grid view icon from Material UI
import { useParams, useSearchParams } from "react-router-dom";

import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getFirestore,
    query,
    where
} from "firebase/firestore";


// A component that renders a product list with a breadcrumb and a toolbar
const ProductList = () => {

    //Firebase Stuff
    const [deals, setDeals] = useState([]);
    const dealsCollectionRef = collection(db, "deals");

    // Get the query string parameters
    const [searchParams] = useSearchParams();

    // Get the value of a specific parameter
    const category = searchParams.get('category');
    const keyword = searchParams.get('keyword');
    const location = searchParams.get('location');
    const shop = searchParams.get('shop');
    const priceRange = searchParams.get('price_range');

    const searchByCategory = async () => {

        // Create a query against the collection
        const q = query(dealsCollectionRef, where("categoryId", "==", category));

        // Get a snapshot of the query results
        const querySnapshot = await getDocs(q);

        const deals = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDeals(deals);

    };

    const searchByShop = async () => {

        // Create a query against the collection
        const q = query(dealsCollectionRef, where("shop", "==", shop));

        // Get a snapshot of the query results
        const querySnapshot = await getDocs(q);

        const deals = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDeals(deals);

    };

    const searchByLocation = async () => {

        // Create a query against the collection
        const q = query(dealsCollectionRef, where("location", "==", location));

        // Get a snapshot of the query results
        const querySnapshot = await getDocs(q);

        const deals = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDeals(deals);

    };

    const getAllDeals = async () => {

        const data = await getDocs(dealsCollectionRef);
        const deals = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        setDeals(deals);

    };


    useEffect(() => {

        if(category){
            searchByCategory()
        }else if(location) {
            searchByLocation();
        }else if(shop){
            searchByShop();
        }else{
            getAllDeals();
        }
        //advancedDealsSearch()

    }, [category, keyword, location, shop]);


    // Fetch data from Firebase when minPrice or maxPrice changes
    useEffect(() => {


        if(!priceRange){
            return
        }

        const minPrice = parseInt(priceRange.split('-')[0]);
        const maxPrice = parseInt(priceRange.split('-')[1]);


        // Create a query to get deals that match the price range
        const q = query(
            collection(db, 'deals'),
            where('price', '>=', minPrice),
            where('price', '<=', maxPrice)
        );


        // Execute the query and update the deals state
        getDocs(q)
            .then((querySnapshot) => {
                const deals = [];
                querySnapshot.forEach((doc) => {
                    deals.push(doc.data());
                });
                setDeals(deals);
            })
            .catch((error) => {
                console.error('Error getting documents:', error);
            });

    }, [priceRange]);



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

                {deals.length > 0 ? (
                    deals.map((deal) => (
                        <ProductListItem key={deal.id} {...deal } />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold">No Deals Found</h1>
                    </div>
                )}

            </div>

        </div>
    );
};

export default ProductList;
