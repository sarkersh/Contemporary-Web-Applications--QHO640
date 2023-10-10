import React, { useState, useEffect } from 'react'
import {ProductInfo, ProductTabs} from "../../components/index.js"

import { useParams, useSearchParams } from "react-router-dom";

import { db } from "../../firebase-config";
import {
    collection,
    getDocs,

    doc,
    getDoc
} from "firebase/firestore";

 function ProductDetails(props) {


   //Firebase Stuff
   const [deal, setDeal] = useState(null);
   const [reviews, setReviews] = useState(null);

   const params = useParams();
   const dealCollectionRef = doc(db, "deals", params.id);

    const getDeal = async () => {
        const docSnap = await getDoc(dealCollectionRef);
        if (docSnap.exists()) {
            setDeal(docSnap.data());
        } else {
             docSnap.data() //will be undefined in this case
        }

    };


     const getReviews = async () => {


         // Create a reference to the reviews subcollection of the deal document
         const reviewsRef = collection(dealCollectionRef, "reviews");

         // Get all the reviews documents from the subcollection
         const reviewsSnap = await getDocs(reviewsRef);

         // Check if there are any reviews documents in the subcollection
         if (reviewsSnap.size > 0) {

            const reviews = reviewsSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

            setReviews(reviews);

         } else {
             // Log a message to the console indicating that there are no reviews
             console.log("No reviews for this deal!");
         }

     }

    useEffect(() => {

        getDeal();
        getReviews()

    }, [])




    return (
        <section className={" bg-gray-100"}>
            <div className={"mx-auto max-w-6xl px-8 py-10 sm:px-6 sm:py-10 lg:max-w-5xl lg:px-8"}>
                {(deal === null) ? (
                    <div>Loading</div>
                ): (

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

                        <div className={"flex gap-4 flex-col py-4"}></div>

                        <ProductTabs description={deal.description} reviews={reviews} attributes={["Strong", "quality"]}/>

                    </>

                )}

            </div>
        </section>

    )
}

export default ProductDetails