import React, { useState, useEffect } from 'react';

import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
} from "firebase/firestore";


function Notifications() {

    const [notifications, setNotifications] = useState([]);
    const notificationsCollectionRef = collection(db, "notifications");

    const getAllNotifications = async () => {

        const data = await getDocs(notificationsCollectionRef);
        const notifications = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        setNotifications(notifications);

    };


    useEffect(() => {

            getAllNotifications();

    }, []);


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <ul className="grid grid-cols-1 gap-4 ">
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        className="flex flex-row bg-white rounded-md shadow-md p-4"
                    >
                        <img
                            src={notification.imageSrc}
                            alt={notification.productName}
                            className="w-1/8 h-16 pr-4 object-cover rounded-t-md"
                        />
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-lg font-medium text-gray-800 mt-2">
                                {notification.productName}
                            </h2>
                            <div className={"flex flex-row items-center"}>

                                <p className="text-gray-500 line-through mr-2">
                                    {notification.price}
                                </p>
                                <p className="text-coolGray-500 text-right text-gray-800 font-bold mr-8 text-sm">
                                    {notification.salePrice}
                                </p>

                                <p className="text-sm font-medium text-right text-gray-600 mt-0 text-l">
                                    {notification.shop}
                                </p>

                            </div>

                        </div>
                        <a
                            href={notification.dealUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-purple-600 items-center text-white font-bold rounded-md px-4 py-2 mt-4 h-10 hover:bg-purple-700"
                        >
                            Get Deal
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
