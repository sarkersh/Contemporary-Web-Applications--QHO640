import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Notification from "./Notification.jsx";

// A component that renders a product gallery thumbnail in the first column
const ProductThumbnail = ({ src, alt, onClick }) => {
    return (
        <div className="w-full h-16 p-2">
            <img
                src={src}
                alt={alt}
                className="h-16 mx-auto object-cover cursor-pointer"
                onClick={onClick}
            />
        </div>
    );
};

// A component that renders a product image in the second column
const ProductImage = ({ src, alt }) => {
    return (
        <div className="w-2/5 p-2 h-[500px]">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
};

// A component that renders a product review score, star rating and add review text in the first row of the third column
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
        <div className="flex items-center ">
            <div className="flex items-center">

                <span className="ml-1 mr-2 text-gray-800">{score}</span>
                {renderStars()}

            </div>
            <span className="text-blue-500 hover:underline text-gray-700 cursor-pointer px-3">
                Add review
            </span>
        </div>
    );
};

// A component that renders a product name in the second row of the third column
const ProductName = ({ name }) => {
    return <h1 className="text-xl font-bold text-gray-800">{name}</h1>;
};

// A component that renders a product price in the third row of the third column
const ProductPrice = ({ price }) => {
    return <span className="text-gray-500 font-bold text-l">${price}</span>;
};

// A component that renders a product description in the fourth row of the third column
const ProductDescription = ({ description }) => {
    return <p className="text-gray-700">{description}</p>;
};

// A component that renders a product affiliate shop name, thumbs up and down icons in the fifth row of the third column
const ProductShop = ({ shop }) => {
    return (
        <div className="flex items-center gap-4">
            <span className="text-blue-500">{shop}</span>
            <ThumbUpIcon style={{ color: '#bbb' }} />
            <ThumbDownIcon style={{ color: '#bbb' }} />
        </div>
    );
};

// A component that renders a buy now button, wishlist icon and add to wishlist text in the sixth row of the third column
const ProductButton = ({ url }) => {
    return (
        <div className="flex items-center justify-start gap-4">
            <a href={url} className="bg-gray-700 text-sm text-white px-8 py-2 rounded-2xl">
                Get Deal
            </a>
            <FavoriteBorderIcon style={{ color1: 'pink' }} />
            <span className="text-gray-500">Add to wishlist</span>
        </div>
    );
};

// A component that renders a product info with three columns and all the subcomponents
const ProductInfo = ({
         thumbnails,
         imageSrc,
         imageAlt,
         reviewScore,
         productName,
         price,
         salePrice,
         description,
         shop,
         dealUrl,
     }) => {
    // A state variable that tracks the current image index
    const [imageIndex, setImageIndex] = useState(0);

    // A function that handles the click event of the thumbnails
    const handleClick = (index) => {
        // Update the state with the new image index
        setImageIndex(index);
    };

    return (
        <div className="container rounded-xl mx-auto p-4 mt-12 py-12 bg-[#E7E7E7]">
            <div className="flex gap-4">
                <div className="w-1/6 flex flex-col justify-center items-center text-center gap-4">
                    {thumbnails.map((thumbnail, index) => (
                        <ProductThumbnail
                            key={index}
                            src={thumbnail}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
                <ProductImage src={thumbnails[imageIndex]} alt={imageAlt} />
                <div className="w-2/5 flex flex-col gap-4 p-4 -ml-4 rounded-xl bg-white">
                    <ProductReview score={reviewScore} />
                    <ProductName name={productName} />
                    <ProductPrice price={price} />
                    <ProductDescription description={description} />
                    <ProductShop shop={shop} />
                    <ProductButton url={dealUrl} />
                    <Notification />
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
