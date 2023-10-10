import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';

import {auth} from "../../firebase-config";

import { GoogleOutlined, FacebookOutlined, UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {RegisterLeft, LoginLeft, GoogleIcon, FaceBookIcon} from "../../assets/index.js";

export default function Login() {


    // create state variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // create a state variable for error message
    const [error, setError] = useState('');

    const navigate = useNavigate();

    // handle the change of email input
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // handle the change of password input
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // handle the submit of the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        // get the auth instance from firebase app
        //const auth = getAuth(app);
        try {
            // sign in with email and password using firebase auth
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            // get the user object from the user credential
            const user = userCredential.user;
            // clear the error message
            setError('');


            // redirect to the user account page using navigate
            navigate('/dashboard');

        } catch (error) {
            // get the error code and message from the error object
            const errorCode = error.code;
            const errorMessage = error.message;
            // set the error message state with the error message
            setError(errorMessage);
        }
    };


    // handle the click of the Google login button
    const handleGoogleLogin = async () => {
        // get the auth instance from firebase app
        //const auth = getAuth(app);
        // create a Google provider object
        const provider = new GoogleAuthProvider();
        try {
            // sign in with popup using firebase auth and Google provider
            const userCredential = await signInWithPopup(auth, provider);
            // get the user object from the user credential
            const user = userCredential.user;
            // clear the error message
            setError('');

            // redirect to the user account page using navigate
            navigate('/dashboard');

        } catch (error) {
            // get the error code and message from the error object
            const errorCode = error.code;
            const errorMessage = error.message;
            // set the error message state with the error message
            setError(errorMessage);
        }
    };



    return (

        <>

            <section className=" bg-gray-100">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                        <div className="bg-gray-100 p-0 rounded-xl items-center">
                            <img className={"object-cover image-center"} src={LoginLeft} alt=""/>
                        </div>
                        <div className="p-4 rounded-xl bg-white p-4 flex items-center justify-center">

                            <div className="p-4 flex flex-col items-center justify-items-start ">
                                <h1 className="text-2xl font-bold w-full mb-4">Login</h1>
                                {error && <p className="text-red-600">{error}</p>}
                                <form onSubmit={handleSubmit} className="space-y-4">

                                    <div className="flex flex-col">

                                        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:outline-none focus-within:ring-purple-600 focus-within:border-purple-600">
                                            <MailOutlined style={{ color: '#a0aec0' }} />
                                            <input type="email"
                                                   id="email"
                                                   name="email"
                                                   value={email}
                                                   onChange={handleEmailChange}
                                                   placeholder="Email address"
                                                   className="ml-2 flex-grow"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">

                                        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:outline-none focus-within:ring-purple-600 focus-within:border-purple-600">
                                            <LockOutlined style={{ color: '#a0aec0' }} />
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={password}
                                                onChange={handlePasswordChange}
                                                placeholder="Password"
                                                className="ml-2 flex-grow"
                                            />
                                        </div>
                                    </div>
                                    <button type="submit"
                                            className="bg-purple-600 text-white font-bold rounded-md px-4 py-2 hover:bg-purple-700 text-right ">
                                        Login
                                    </button>

                                </form>
                                <div className={" py-4"}> ----------------------- Or Sign-Up With -----------------------</div>
                                <div className="flex space-x-4 justify-center items-center">


                                    <img className={"object-cover cursor-pointer image-center w-5 poiner "}
                                         src={GoogleIcon} alt=""
                                         onClick={handleGoogleLogin}
                                    />

                                    <img className={"object-cover cursor-pointer image-center w-5 poiner"}
                                         src={FaceBookIcon}
                                         alt=""/>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>


    )
}



