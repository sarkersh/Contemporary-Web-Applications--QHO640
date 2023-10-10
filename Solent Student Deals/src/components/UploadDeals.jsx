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

const DealList = () => {
    // Sample deal products
    const [deals, setDeals] = useState([
        {
            id: '3',
            imageSrc: 'https://m.media-amazon.com/images/I/711sJF9Xm4L._AC_SL1500_.jpg',
            imageAlt: 'SAFEJAWZ Mouthguard Slim Fit, Adults and Junior Gum Shield',
            productName: 'SAFEJAWZ Mouthguard Slim Fit, Adults and Junior Gum Shield',
            bestSeller: '1',
            categoryId: '10',
            price: 7.99,
            salePrice: 6.99,
            offerDate: '2023-10-31',
            shop: 'Amazon',
            dealUrl: 'https://www.amazon.co.uk/dp/B073CWQ6PD?m=A1GMADXM9ZJQ8M&ref=carousel_c_pc_a_A6U8DYRD848LS&th=1',
            description:
                'These blue sneakers are perfect for casual wear or sports. They are made of durable and breathable material and have a comfortable fit. They are also on sale for a limited time, so hurry up and get them before they run out of stock.',
            gallery: ['https://m.media-amazon.com/images/I/71gzZ7UzjGL._AC_SX679_.jpg',
                'https://m.media-amazon.com/images/I/717FM1hEU0L._AC_SX679_.jpg',
                '/deal1-3.jpg'],
            location: 'London',
            reviewScore: 4.5,
        },
        {
            id: '4',
            imageSrc: 'https://m.media-amazon.com/images/I/71jBRPCDAvL._AC_SX679_.jpg',
            imageAlt: 'Childs Farm | Kids Hair & Body Wash 250ml',
            productName: 'Childs Farm | Kids Hair & Body Wash 250ml',
            bestSeller: '1',
            categoryId: '7',
            price: 3.99,
            salePrice: 1.99,
            offerDate: '2023-11-15',
            shop: 'Amazon',
            dealUrl: 'https://www.amazon.co.uk/dp/B01FFXJNWM?m=A3P5ROKL5A1OLE&ref=carousel_c_pc_a_A6U8DYRD848LS&th=1',
            description:
                'Our one bottle wonder gently cleans hair and body in the bath or shower Brimming with the fragrance of blackberry & organic apples\n' +
                'Formulated with only the best sustainable and ethically sourced sustainably sourced ingredients, 97% Natural Origin.',
            gallery: ['https://m.media-amazon.com/images/I/71jBRPCDAvL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81+4AUu+gQL._AC_SL1500_.jpg'],
            location: 'Manchester',
            reviewScore: 4.8,
        },
        {
            id: '5',
            imageSrc: 'https://m.media-amazon.com/images/I/710KQDrOyYL._AC_SL1500_.jpg',
            imageAlt: 'Xbox Wireless Controller – Carbon Black',
            productName: 'Xbox Wireless Controller – Carbon Black',
            bestSeller: '0',
            categoryId: '3',
            price: 39.35,
            salePrice: 25.99,
            offerDate: '2023-11-15',
            shop: 'Amazon',
            dealUrl: 'https://www.amazon.co.uk/Xbox-Wireless-Controller-Carbon-Black/dp/B07SDFLVKD?ref_=Oct_DLandingS_D_be0eec9c_0&th=1',
            description:
                'BUILT TO PERFORM: The Mitre Aircell Carbon shin guard allows men, women, and kids of all ages to put their best foot forward during games. The fixed sock with ankle protection secures the guard in place for maximum protection from the ball\n' +
                'LIGHT AS A FEATHER: The extremely lightweight foam backing allows airflow around the leg keeping you cooler and drier during training and matches and making this piece of kit an instant essential',
            gallery: ['https://m.media-amazon.com/images/I/61STkyOrupL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/61Tqog6UYMS._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/41sqFQdDYfL._AC_SX679_.jpg'],
            location: 'Manchester',
            reviewScore: 4.6,
        },
    ]);

    const handleUpload = () => {
        // Upload the deals to the Firebase collection
        deals.forEach((deal) => {
            setDoc(doc(db, 'deals', deal.id), deal)
                .then(() => {
                    console.log('Deal uploaded successfully');
                })
                .catch((error) => {
                    console.error('Error uploading deal:', error);
                });
        });
    };

    return (
        <div className="deal-list bg-gray-100 p-8 rounded-xl shadow-lg max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-purple-600 mb-4">Deal List</h1>
            <div className="deals space-y-4 overflow-y-auto h-64">
                {deals.map((deal) => (
                    <div key={deal.id} className="deal bg-white p-4 rounded-md shadow-sm flex items-center space-x-4">
                        <div className="image w-16 h-16">
                            <img src={deal.imageSrc} alt={deal.imageAlt} className="w-full h-full rounded-md" />
                        </div>
                        <div className="info flex-1">
                            <p className="text-sm font-bold">{deal.productName}</p>
                            <p className="text-xs text-gray-600">{deal.shop}</p>
                            <p className="text-xs text-purple-600">
                                {deal.salePrice} (was {deal.price})
                            </p>
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

export default DealList;
