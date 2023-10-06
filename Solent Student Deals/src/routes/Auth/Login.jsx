import React from 'react'
import Experiment from "../../components/Experiment.jsx";

export default function Login() {
    return (

        <>
            <h1 className="text-xl5 justify-center items-center"> TEST "</h1>

            <Experiment />

            <section className="bg-white">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
                    <h1 className="text-xl5 justify-center items-center"> TEST "</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                        <div className="bg-red-500 p-4">First column</div>
                        <div className="bg-blue-500 p-4">Second column</div>
                    </div>
                </div>
            </section>
        </>


    )
}
