import {HomeBottom1, HomeBottom2} from "../../assets/index.js";
import React from "react";

export default function HomeBottom() {
    return (
        <section className="py-10 bg-white overflow-hidden border">
            <div className="px-4 mx-auto">
                <div className="flex flex-wrap items-center -m-8">
                    <div className="w-full md:w-1/2 h-[31rem]" style={{backgroundImage:`url(${HomeBottom1})`}}>

                    </div>

                    <div className="w-full md:w-1/2 h-[31rem]"  style={{backgroundImage:`url(${HomeBottom2})`}}>

                    </div>

                </div>
            </div>
        </section>
    )
}
