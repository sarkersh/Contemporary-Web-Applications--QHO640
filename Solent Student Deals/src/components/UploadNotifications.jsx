

import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc
} from "firebase/firestore";

function UploadNotifications() {
    // create a sample array of notification products
    const notificationProducts = [
        {
            id: '1',
            imageSrc: 'https://source.unsplash.com/random/100x100?sig=1',
            productName: 'Apple iPhone 13 Pro',
            price: 99,
            salePrice: 999,
            offerDate: '2023-01-01',
            shop: 'Amazon',
            dealUrl: '1',
        },
        {
            id: '2',
            imageSrc: 'https://source.unsplash.com/random/100x100?sig=2',
            productName: 'Samsung Galaxy S21 Ultra',
            price: 1199,
            salePrice: 899,
            offerDate: '2023-01-02',
            shop: 'Best Buy',
            dealUrl: '2',
        },
        {
            id: '3',
            imageSrc: 'https://source.unsplash.com/random/100x100?sig=3',
            productName: 'Sony PlayStation 5 Console',
            price: 599,
            salePrice: 499,
            offerDate: '2023-01-03',
            shop: 'Walmart',
            dealUrl: '3',
        },
        {
            id: '4',
            imageSrc: 'https://source.unsplash.com/random/100x100?sig=4',
            productName: 'Microsoft Xbox Series X Console',
            price: 599,
            salePrice: 499,
            offerDate: '2023-01-04',
            shop: 'Target',
            dealUrl:'4',
        },
        {
            id: '5',
            imageSrc: 'https://source.unsplash.com/random/100x100?sig=5',
            productName:
            'Nintendo Switch Console with Neon Blue and Neon Red Joy-Con',
            price: 349,
            salePrice: 299,
            offerDate: '2023-01-10',
            shop: 'GameStop',
            dealUrl:'5',
        },
        ];

    // create a function to handle the upload logic
    const handleUpload = async () => {
        // create a reference to the notifications collection
        const notificationsRef = collection(db, 'notifications');
        try {
            // loop through the notification products array
            for (const product of notificationProducts) {
                // add a new document to the notifications collection with the product data
                await addDoc(notificationsRef, product);
            }
            // show a success message
            alert('Upload successful');
        } catch (error) {
            // get the error code and message from the error object
            const errorCode = error.code;
            const errorMessage = error.message;
            // show an error message
            alert(`Upload failed. Error code: ${errorCode}. Error message: ${errorMessage}`);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold">Upload Notifications</h1>

            <button
                onClick={handleUpload}
                className="bg-purple-600 text-white font-bold rounded-md px-6 py-3 mt-4 hover:bg-purple-700"
            >
                Upload
            </button>

        </div>
    );
}

export default UploadNotifications;
