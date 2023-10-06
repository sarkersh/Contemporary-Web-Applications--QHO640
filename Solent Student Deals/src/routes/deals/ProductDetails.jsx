import React, { useState, useEffect } from 'react'
import {ProductInfo, ProductTabs, ReviewList} from "../../components/index.js"

import {
    CatTravel, LogoLight, RegisterLeft, LoginLeft,
    CatWatches, CatShoes, CatPhones,
    CatHealthBeauty, CatGames, CatComputers, CatClothing,
    CatBooks, CatSports

} from "../../assets/index.js"


import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    getFirestore
} from "firebase/firestore";


export default function ProductDetails() {


   //Firebase Stuff
   const [deal, setDeal] = useState(null);

   const dealCollectionRef = doc(db, "deals", "TulT3NUDNyRh6R6qxM5x");


    const getDeals = async () => {
        const data = await getDocs(dealsCollectionRef);
        const deals = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        setDeals(deals);

    };



    const getDeal = async () => {
        const docSnap = await getDoc(dealCollectionRef);
        if (docSnap.exists()) {
            //console.log("Document data:", docSnap.data());
            setDeal(docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }

    };

    useEffect(() => {

        getDeal();

    }, [])

    console.log("MY Deal:", deal);

    if(!deal) {
        return null;
    }

    return (
        <>
            <ProductInfo
                thumbnails={deal.gallery}
                imageSrc={deal.imageSrc}
                imageAlt={deal.imageAlt}
                reviewScore={deal.reviewScore}
                productName={deal.productName}
                price={deal.price}
                salePrice={deal.salePrice}
                description={deal.description}
                offerDate={deal.offerDate}
                shop={deal.shop}
                dealUrl={deal.dealUrl}

            />

            <div className={"flex gap-4 flex-col py-4"}>

            </div>

            <ProductTabs description={"description"} attributes={["Strong", "quality"]}/>


        </>
    )
}
