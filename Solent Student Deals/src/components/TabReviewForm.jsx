import React, { useState } from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons';


const TabReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [name, setName] = useState('');

    const handleRating = (value) => {
        setRating(value);
    };

    const handleName = (value) => {
        setName(value);
    };

    const handleReview = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = () => {
        // do something with rating and review
        console.log(rating, review);
    };

    return (
        <div className="review-form bg-white p-8 rounded-tl-xl rounded-tr-x shadow-lg ">
            <input type={"text"}
                className="review-text w-full h-8 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
                value={review}
                onChange={handleName}
            />
            <div className="stars flex space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((value) => (
                    <span key={value} onClick={() => handleRating(value)}>
            {value <= rating ? (
                <StarFilled className="text-yellow-400" />
            ) : (
                <StarOutlined className="text-gray-400" />
            )}
          </span>
                ))}
            </div>
            <textarea
                className="review-text w-full h-32 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write a review"
                value={review}
                onChange={handleReview}
            />
            <button
                className="submit-button  w-24  py-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold rounded-full mt-4 hover:from-purple-700 hover:to-purple-500"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};



export default TabReviewForm;
