

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter as Router,
    Routes,
    Route,
    Link

} from "react-router-dom"



import './App.css'


import {
    Root,
    Index,
    Deals,
    dealsLoader,
    ErrorPage,
    ProductDetails,
    Login,
    Register,
    Dashboard
} from "./routes/index.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        //loader: rootLoader,
        //action: rootAction,
        children: [
            {
                path: "/",
                element: <Index />,
                loader: dealsLoader
            },
            {
                path: "deal/:id",
                element: <ProductDetails />,
            },
            {
                path: "deals/",
                element: <Deals />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "Register",
                element: <Register />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            }
        ],

    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
