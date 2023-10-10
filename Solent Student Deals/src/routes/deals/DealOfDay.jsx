
import React, { useEffect, useState } from "react";

import { BgDealOfDay, HomeBottom2, HomeBottom1 } from "../../assets/index.js";
const bgImage = BgDealOfDay; // assign it to a variable
import {CountdownTimer} from "../../components/index.js"
import ProductInfoItem from "./ProductInfoItem.jsx";


const futureDate = '2023-12-31T23:59:59'; // Replace with your desired future date

export default function DealOfDay(props) {

    const [deals, setDeals] = useState([]);

    useEffect(() => {

        setDeals(props.deals);

    }, []);


    //console.log('DealOfDay 0   ', props.deals[0])
    const deal = props.deals[0];

    return (

        <>

            {(typeof deal !== 'undefined') && (


                <>
                    <section style={{ "--bg-image": `url(${bgImage})` }}
                             className="w-full flex flex-row justify-center py-6 sm:px-6 lg:px-8 bg-[image:var(--bg-image)] bg-cover bg-no-repeat">


                        <section className="dealofday container mx-36 my-24">

                            <div className="grid grid-cols-1 md:grid-cols-3 ">

                                <div className=" left-col p-4 md:col-span-2 ">
                                    <div className="lg:pr-8 lg:pt-4">
                                        <div className="lg:max-w-lg">
                                            <h2 className="text-white text-5xl">DEAL OF THE DAY</h2>
                                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                                {deals.productName}
                                            </p>
                                            <p className="mt-6 text-lg leading-8 text-white">
                                                {deal.description}
                                            </p>

                                            <dl className="mt-10 max-w-xl space-y-8 text-5xl leading-7 text-white lg:max-w-none">

                                                <div>
                                                    <CountdownTimer futureDate={futureDate} />
                                                </div>

                                            </dl>
                                        </div>
                                    </div>
                                </div>

                                <div className="right-col p-4 md:col-span-1 ">

                                    <ProductInfoItem deal={deal} />
                                </div>

                            </div>
                        </section>

                    </section>
                </>
            )}
        </>

    )
}





