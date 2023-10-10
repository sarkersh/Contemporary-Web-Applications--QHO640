import React, { useState } from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons';
//import 'tailwindcss/tailwind.css';



const TabReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleRating = (value) => {
        setRating(value);
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
            <h1 className="text-3xl font-bold mb-4">Mohammed L.</h1>
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
                placeholder="Write review"
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

//====================================================





const ReviewForm1 = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleRating = (value) => {
        setRating(value);
    };

    const handleReview = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = () => {
        // do something with rating and review
        console.log(rating, review);
    };

    return (

        <>

            <div className="review-form bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-4">Mohammed L.</h1>
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
                    placeholder="Write review"
                    value={review}
                    onChange={handleReview}
                />
                <button
                    className="submit-button w-full py-2 bg-blue-500 text-white font-bold rounded-md mt-4 hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            <ReviewList />
        </>

    );
};




const ReviewList = () => {
    const [reviews, setReviews] = useState([
        {
            name: 'Mohammed I.',
            rating: 4,
            text: 'Bought the black ones some days ago price like the blue color but can\'t be bothered to change now.',
        },
        {
            name: 'Mohammed I.',
            rating: 4,
            text: 'Bought the black ones some days ago price like the blue color but can\'t be bothered to change now.',
        },
        {
            name: 'Mohammed I.',
            rating: 4,
            text: 'Bought the black ones some days ago price like the blue color but can\'t be bothered to change now.',
        },
    ]);

    const handleSubmit = () => {
        // do something with reviews
        console.log(reviews);
    };

    return (
        <div className="review-list bg-gray-100 p-8 rounded-xl shadow-lg ">
            <h1 className="text-2xl font-bold text-purple-600 mb-4">User reviews</h1>
            <div className="reviews space-y-4 overflow-y-auto h-64">
                {reviews.map((review, index) => (
                    <div key={index} className="review bg-white p-4 rounded-md shadow-sm flex items-center space-x-4">
                        <div className="rating text-yellow-400">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span key={value}>
                  {value <= review.rating ? '★' : '☆'}
                </span>
                            ))}
                        </div>
                        <div className="text flex-1">
                            <p className="text-sm font-bold">{review.name}</p>
                            <p className="text-xs">{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="submit-button w-full py-2 bg-purple-500 text-white font-bold rounded-md mt-4 hover:bg-purple-600"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};



export default TabReviewForm;
