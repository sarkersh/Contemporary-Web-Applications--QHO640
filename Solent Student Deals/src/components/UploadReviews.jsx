import React, { useState } from 'react';


import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    getFirestore,
    setDoc

} from "firebase/firestore";


const ReviewUpload = () => {
    // Sample reviews
    const [reviews, setReviews] = useState([
        {
            date: '2023-10-01',
            id: '1',
            score: 5,
            userId: 'user1',
            text: 'I love this product! It is exactly what I was looking for. It is well-made, comfortable, and stylish. I would definitely recommend it to anyone who needs a new pair of shoes.',
        },
        {
            date: '2023-10-02',
            id: '2',
            score: 3,
            userId: 'user2',
            text: 'This product is okay, but not great. It is a bit too tight for me and the color is not as bright as I expected. It is not worth the full price, but maybe on sale it is a good deal.',
        },
    ]);

    const handleUpload = () => {
        // Upload the reviews to the Firebase subcollection
        reviews.forEach((review) => {
            setDoc(doc(db, 'deals', review.id, 'reviews', review.id), review)
                .then(() => {
                    console.log('Review uploaded successfully');
                })
                .catch((error) => {
                    console.error('Error uploading review:', error);
                });
        });
    };

    return (
        <div className="review-list bg-gray-100 p-8 rounded-xl shadow-lg max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-purple-600 mb-4">Review List</h1>
            <div className="reviews space-y-4 overflow-y-auto h-64">
                {reviews.map((review) => (
                    <div key={review.id} className="review bg-white p-4 rounded-md shadow-sm flex items-center space-x-4">
                        <div className="score text-yellow-400 text-xl font-bold">
                            {review.score}
                        </div>
                        <div className="text flex-1">
                            <p className="text-sm font-bold">{review.userId}</p>
                            <p className="text-xs text-gray-600">{review.date}</p>
                            <p className="text-xs">{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="upload-button w-full py-2 bg-purple-500 text-white font-bold rounded-md mt-4 hover:bg-purple-600"
                onClick={handleUpload}
            >
                Upload to Firebase
            </button>
        </div>
    );
};

export default ReviewUpload
