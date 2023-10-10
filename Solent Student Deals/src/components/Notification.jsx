import React, { useState } from 'react';
import Popup from 'reactjs-popup'; // Import Popup component from reactjs-popup package
import 'reactjs-popup/dist/index.css'; // Import Popup styles
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore'; // Import Firestore methods from firebase/firestore package


/*
import { initializeApp } from 'firebase/app'; // Import Firebase app initialization method from firebase/app package

// Initialize Firebase app with your configuration
const firebaseConfig = {
    // Your Firebase configuration object
};

const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = getFirestore(app);
*/

function Subscribe() {
    // Declare state variables for name and email inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Define a function that handles the form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default browser behavior
        try {
            // Add a new document to the userinfo collection with the name and email values
            await setDoc(doc(db, 'userinfo', name), {
                name: name,
                email: email,
            });
            alert('Data added successfully'); // Show a success message
        } catch (error) {
            alert(error.message); // Show an error message
        }
    };

    return (
        <div className="flex items-center justify-start bg-white">
            {/* Use Popup component to create a popup with a trigger button */}
            <Popup
                trigger={<button className="bg-white px-0 py-2 text-black text-left ">Notify me of new deals and discounts</button>}
                modal
                closeOnDocumentClick
            >
                {/* Use render props to access the popup state and actions */}
                {(close) => (
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        {/* Use a form element to wrap the input fields and the submit button */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Your name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                {/* Use close function to close the popup on button click */}
                                <button type="submit" onClick={close} className="bg-blue-500 px-4 py-2 text-white rounded">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </Popup>
        </div>
    );
}

export default Subscribe;
