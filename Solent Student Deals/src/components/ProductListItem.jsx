import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
//import StarBorderIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import {GetDealButton} from './index.js';

// A component that renders a product image in the left column
const ProductImage = ({ src, alt }) => {
    return (
        <div className="w-1/3 p-2">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
};

// A component that renders a product review score in the top row
const ProductReview = ({ score }) => {
    // A function that returns an array of star icons based on the score
    const renderStars = () => {
        // An array of five colors, either gray or yellow depending on the score
        const colors = [
            score >= 1 ? 'orange' : 'gray',
            score >= 2 ? 'orange' : 'gray',
            score >= 3 ? 'orange' : 'gray',
            score >= 4 ? 'orange' : 'gray',
            score >= 5 ? 'orange' : 'gray',
        ];

        // Return an array of star icons with the corresponding colors
        return colors.map((color, index) => (
            <StarIcon key={index} style={{ color }} />
        ));
    };

    return (
        <div className="flex items-center">
            <span className="mr-2 text-gray-500">{score}</span>
            {renderStars()}
        </div>
    );
};

// A component that renders a product name in a heading element
const ProductName = ({ name, id }) => {
    return (
        <a href={"/deal/"+id} className="text-gray-800 font-bold text-xl">
            {name}
        </a>
    );
};

// A component that renders a product price and sale price side by side
const ProductPrice = ({ price, salePrice }) => {
    return (
        <div className="flex items-center">
            <span className="text-gray-500 line-through mr-2">£{price}</span>
            <span className="text-gray-800 font-bold">£{salePrice}</span>
        </div>
    );
};

// A component that renders a product description
const ProductDescription = ({ description }) => {
    return <p className="text-gray-700">{description}</p>;
};

// A component that renders a product offer date and affiliate shop side by side
const ProductOffer = ({ date, shop }) => {
    return (
        <div className="flex items-center justify-left">
            <span className="text-gray-500 mr-14"> {date}</span>
            <span className="text-blue-500">{shop}</span>
        </div>
    );
};

// A component that renders a buy now button aligned to the right
const ProductButton = ({ url }) => {

    console.log("DEAL URL", url)

    return (
        <div className="flex justify-end">
            <a href={url} >
                <GetDealButton />
            </a>
        </div>
    );
};

// A component that renders a product list item with all the subcomponents
const ProductListItem = ({
    id,
     imageSrc,
     imageAlt,
     reviewScore,
     productName,
     price,
     salePrice,
     description,
     offerDate,
     shop,
     dealUrl,
}) => {
    return (
        <div className="flex border p-4">

            <ProductImage src={imageSrc} alt={imageAlt} />
            <div className="w-2/3 p-2 flex flex-col gap-4">
                <ProductReview score={reviewScore} />
                <ProductName name={productName} id={id}/>
                <ProductPrice price={price} salePrice={salePrice} />
                <ProductDescription description={description} />
                <ProductOffer date={offerDate} shop={shop} />
                <ProductButton url={dealUrl} />
            </div>
        </div>
    );
};

export default ProductListItem;
