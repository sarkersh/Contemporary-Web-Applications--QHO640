import React, { useState, useEffect } from "react";

import {
    DealOfDay,
    HeroSection,
    HomeBottom,
    FeaturedCategoriesV1,
    DealGrid
} from "../index.jsx";
import { useParams, useSearchParams } from "react-router-dom";

import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getFirestore,
    query,
    where
} from "firebase/firestore";


export default function Home() {

    //Firebase Stuff
    const [deals, setDeals] = useState([]);
    const dealsCollectionRef = collection(db, "deals");




    const getAllDeals = async () => {

        const data = await getDocs(dealsCollectionRef);
        const deals = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        setDeals(deals);

    };


    useEffect(() => {

        console.log('DealOfDay 7777777777' )



       getAllDeals();

    }, []);


    //console.log('DealOfDay 111111   ', deals[0])

    return (
        <>
            {typeof deals !== 'undefined' && Array.isArray(deals) && (
                <>
                    <HeroSection />
                    <FeaturedCategoriesV1 />
                    <DealOfDay deals={deals} />
                    <DealGrid deals={deals}/>
                    <HomeBottom />
                </>
            )}
        </>
    );
}
