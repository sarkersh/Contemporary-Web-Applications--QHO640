
//import Root, { rootLoader } from "./Root";
import Root from "./Root";
/* previous imports */
import ErrorPage from "../error-page.jsx";


import '../App.css'
import Deals from "./deals/Deals.jsx";
import DealItemList from "./deals/DealItemList.jsx";
import DealOfDay from "./deals/DealOfDay.jsx";

import Home from "./home/Home";
import HomeBottom from "./home/HomeBottom.jsx";
import HeroSection from "./home/HeroSection.jsx";
import Nav from "../components/Nav.jsx";
import FeaturedCategoriesV1 from "./category/FeaturedCategoriesV1.jsx";

import DealItemV1 from "./deals/DealItemV1.jsx";
import ProductDetails from "./deals/ProductDetails.jsx";
import DealGrid from "./deals/DealGrid.jsx";
import ProductInfoItem from "./deals/ProductInfoItem.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";


import { dealsLoader} from "./deals/DealItemList.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import Notifications from "./dashboard/Notifications.jsx";



export {
    Root,
    Home as Index,
    Nav,
    FeaturedCategoriesV1,
    //categoriesLoader,
    Deals,
    DealItemList,
    DealOfDay,
    DealItemV1,
    DealGrid,
    HomeBottom,
    //rootLoader,
    dealsLoader,
    HeroSection,
    ErrorPage,
    ProductDetails,
    ProductInfoItem,
    Login,
    Register,
    Dashboard,
    Notifications


}
