import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// A component that renders a single review with the reviewer's initials, name, score, star rating and text
export const Review = ({ initials, name, score, text }) => {
    // A function that returns an array of star icons based on the score
    const renderStars = () => {
        // An array of five colors, either gray or yellow depending on the score
        const colors = [
            score >= 1 ? 'yellow' : 'gray',
            score >= 2 ? 'yellow' : 'gray',
            score >= 3 ? 'yellow' : 'gray',
            score >= 4 ? 'yellow' : 'gray',
            score >= 5 ? 'yellow' : 'gray',
        ];

        // Return an array of star icons with the corresponding colors
        return colors.map((color, index) => (
            <StarIcon key={index} style={{ color }} />
        ));
    };

    return (
        <div className="flex flex-col border p-4">
            <div className="flex gap-4">
                <div className="w-1/6 flex justify-center items-center">
                    <Avatar style={{ backgroundColor: 'gray' }}>{initials}</Avatar>
                </div>
                <div className="w-5/6 flex flex-col gap-2">
                    <Typography variant="h6" component="h3" className="text-gray-800">
                        {name}
                    </Typography>
                    <div className="flex items-center">
                        {renderStars()}
                        <span className="ml-2 text-gray-500">{score}/5</span>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Typography variant="body1" component="p" className="text-gray-700">
                    {text}
                </Typography>
            </div>
        </div>
    );
};

// A component that renders a list of reviews for a given product
const ReviewList = ({ reviews }) => {
    return (
        <div className="container mx-auto p-4 bg-gray-100">
            <h1 className="text-xl font-bold">Reviews</h1>
            <div className="flex flex-col gap-4 mt-4">
                {reviews.map((review) => (
                    <Review key={review.name} {...review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewList;
