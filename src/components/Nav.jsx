import { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,  } from '@heroicons/react/24/outline'
import {LogoDark, SearchButton, User, WishList} from "../assets/index.js"

//Firebase Auth
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../firebase-config";


const categories =[
    { name: 'Shoes', url: '1' },
    { name: 'Clothing', url: '2' },
    { name: 'Games', url: '3' },
    { name: 'Travel', url: '4' },
    { name: 'Watches', url: '5' },
    { name: 'Books', url: '6' },
    { name: 'Health & Beauty', url: '7' },
    { name: 'Phones', url: '8' },
    { name: 'Computers', url: '9' },
    { name: 'Sports', url: '[10' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {

    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState('');
    // Declare a state variable called focused and initialize it to false
    const [focused, setFocused] = useState(false);

    //Search Related
    //===================================================
    // State variables for the input fields
    const [location, setLocation] = useState('');
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');



    // Define a function that handles the focus event of the textbox
    const handleFocus = () => {
        // Set the state of focused to true
        setFocused(!focused);
    };

    // Define a function that handles the blur event of the textbox
    const handleBlur = (event) => {
        // Set the state of focused to false
        setFocused(false);
    };


    // Handle input changes
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);

        // Construct the query string from the input values
        const queryString = `?category=${event.target.value}`;

        // Navigate to the /deals route with the query string
        navigate('/deals' + queryString);

    };

    // Handle search button click
    const handleSearch = () => {
        // Construct the query string from the input values
        const queryString = `?keyword=${keyword}&category=${category}`;

        // Navigate to the /deals route with the query string
        navigate('/deals' + queryString);
    };

    // Sample cities for the dropdown list
    const cities = [
        'Birmingham',
        'London',
        'Leeds',
        'Manchester',
        'Leicester',
        'Wolverhampton',
        'Bradford',
        'Bristol',
        'Liverpool',
        'Peterborough'
    ];



    // create a function to handle the logout logic
    const handleLogout = async () => {

        try {
            // sign out using firebase auth
            await signOut(auth);
            setLoginStatus("");
            console.log('user has just signed out!');

            // redirect to the home page
            navigate('/');

        } catch (error) {
            console.log('Sorry user cannot signed out!!!!');

        }
    };


    useEffect(() => {

        // listen to the auth state change event
        onAuthStateChanged(auth, (user) => {
            // check if user is logged in
            if (user) {
                // user is logged in, console log the message
                console.log('user is logged in');
                console.log(user.providerData[0]);
                setLoginStatus(user.providerData[0].providerId);

            } else {
                // user is not logged in, console log the message
                console.log('user not logged in');
            }
        });


    }, [loginStatus]); // Pass location as a dependency

    return (

        <>
            <Disclosure as="nav" className="bg-gray-50">
                {({ open }) => (
                    <>
                        {/*<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">*/}
                        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">

                                        <Link to="/" onClick={handleLogout}>
                                            <img
                                                className="h-14 w-auto"
                                                src={LogoDark}
                                                alt="Your Company"
                                            />
                                        </Link>

                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4 h-16 items-center">

                                            <div className=" relative ">
                                                <input type="text"
                                                       id="search-form-location"
                                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                       placeholder="Enter your location"
                                                       value={location}
                                                       onChange={handleLocationChange}
                                                       onClick={handleLocationChange}
                                                       //onFocus={handleFocus} // Attach the handleFocus function to the onFocus event
                                                       // onBlur={handleBlur} // Attach the handleBlur function to the onBlur event
                                                />
                                                {(location) && (
                                                    <div className="dropdown absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                                        {cities.map((city) => (
                                                            <div
                                                                key={city}
                                                                className="option p-2 hover:bg-purple-200 cursor-pointer"
                                                                onClick={() => {

                                                                    const queryString = `?location=${city}`;

                                                                    // Navigate to the /deals route with the query string
                                                                    navigate('/deals' + queryString);

                                                                    setLocation("")
                                                                }}
                                                            >
                                                                {city}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className=" relative ">
                                                <input type="text" id="search-form-keyword"
                                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                       placeholder="Search "
                                                       value={keyword}
                                                       onChange={handleKeywordChange}
                                                />
                                            </div>

                                            <select className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                    name="category"
                                                    value={category}
                                                    onChange={handleCategoryChange}
                                            >
                                                <option value="">
                                                    Select Category
                                                </option>
                                                <option value="1">
                                                    Shoes
                                                </option>
                                                <option value="2">
                                                    Clothing
                                                </option>
                                                <option value="3">
                                                    Games
                                                </option>
                                                <option value="4">
                                                    Travel
                                                </option>
                                                <option value="5">
                                                    Watches
                                                </option>
                                                <option value="6">
                                                    Books
                                                </option>
                                                <option value="7">
                                                    Health & Beauty
                                                </option>
                                                <option value="8">
                                                    Phones
                                                </option>
                                                <option value="9">
                                                    Computers
                                                </option>
                                                <option value="10">
                                                    Sports
                                                </option>
                                            </select>
                                            <img src={SearchButton}
                                                 alt="SearchButton"
                                                 //class={"search-icon"}
                                                 onClick={handleSearch}
                                                 className={"h-[2.3rem] cursor-pointer"}
                                                 style={{
                                                     marginLeft: "-0.1rem",
                                                     marginTop: "0.2rem"}}
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    <div>

                                        {(loginStatus) ? (

                                            <>
                                                <button
                                                    type="button"
                                                    className="relative rounded-full bg-gray-20 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-20"
                                                >
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only"></span>
                                                    {/*<UserIcon className="h-6 w-6" aria-hidden="true" />*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                    </svg>

                                                </button>

                                                <Link to="#" onClick={handleLogout}>Logout</Link>
                                            </>


                                        ) : (
                                            <>

                                                <Link to="/Register" className={"mr-2"}>Register</Link>
                                                <Link to="/login">Login</Link>

                                            </>

                                        )}
                                    </div>

                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="relative flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-20">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Wishlist</span>
                                                <img className="h-5 w-5 rounded-full" src={WishList} alt=""  />
                                            </Menu.Button>
                                        </div>

                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {categories.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>



        </>


    )
}
