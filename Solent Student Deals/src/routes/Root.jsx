
import { useState, useEffect } from "react";
import { Outlet, Link, useLoaderData, useLocation, useNavigate, useNavigation} from "react-router-dom";
import { FaBeer} from 'react-icons/fa';
import { BiBellOff, BiStar  } from 'react-icons/bi';
import { FcBusiness, FcBullish, FcBriefcase  } from 'react-icons/fc';



import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import {SignIn, Logout, GoogleAuth} from "./Auth/SignIn.jsx";
import  Header from "../components/header.jsx";

//Assets
import {
    Catb,
    Cat7,
    Cat8
} from "../assets/index.js";
import Footer from "../components/Footer.jsx";
import CityFilter from "../components/CityFilter.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import PriceSlider from "../components/PriceSlider.jsx";
import ShopFilter from "../components/ShopFilter.jsx";





export default function Root() {

    const { pathname} = useLocation();

    return (

        <div className={"flex flex-col min-h-screen bg-gray-100"}>

            <Header />

            <main className={"flex flex-row bg-gray-100 "}>

                {(pathname == "/deals") ? (
                    <div id="sidebar" className={"flex flex-col p-6 bg-white shadow border w-1/3 "}>

                        <CategoryFilter />
                        <CityFilter />
                        <PriceSlider />
                        <ShopFilter />

                    </div>
                ): null}


                <div id={"details"} className="flex flex-col p-0 bg-white shadow w-screen ">


                    {/*show details - children of root element here*/}
                    <Outlet />
                </div>
            </main>

            <Footer />


        </div>
    );
}