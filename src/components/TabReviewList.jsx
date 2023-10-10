import React, { useState } from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons';


const TabReviewList = ({reviews}) => {


    const handleSubmit = () => {
        // do something with reviews
        //console.log(reviews);
    };

    return (
        <div className="review-list bg-white p-8 rounded-bl-xl rounded-br-xl shadow-lg ">
            <h1 className="text-2xl font-bold text-gray-600 mb-4">User reviews</h1>
            <div className="reviews space-y-4 overflow-y-auto h-64">



                {/* Check if the reviews array is not empty */}
                {(reviews) ? (
                    // Show reviews
                    reviews.map((review, index) => (
                        <div key={index} className="review bg-white p-4 rounded-md shadow-sm flex items-center space-x-4">
                            <div className="text-xl rounded-3xl bg-gray-200 p-2">
                                {review.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="text flex-1">
                                <h2 className={"text-l"}>{review.name}</h2>
                                <div className="rating text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <span key={value}>
                                  {value <= review.score ? '★' : '☆'}
                                </span>
                                    ))}
                                </div>
                                <p className="text-sm font-bold">{review.name}</p>
                                <p className="text-xs">{review.text}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    // Display a message
                    <p className="text-lg font-semibold text-gray-500">No reviews found</p>
                )}


            </div>

        </div>
    );
};



export default TabReviewList;
