import {CatShoes} from "../../assets/index.js";
import {StarRating} from "../../components/index.js";



export default function ProductInfoItem() {
    return (
        <div className="w-full px-4">

            <div className="h-full p-8 text-center hover:bg-gray-100 rounded-md hover:shadow-xl
             transition duration-200 border-solid border-2 border-gray-100 bg-white">


                <div className={"w-full flex flex-col items-center justify-center mb-10"}>

                    <h1 className={"text-3xl font-bold text-gray-800"}>Product Name</h1>
                    <p className={"text-coolGray-300 text-left text-sm"}>SALE 20% Off</p>
                </div>

                <div className="inline-flex mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">

                    <img className="h-36 mx-auto" src={CatShoes} alt=""  />

                </div>

                <div className="w-full flex flex-wrap">
                    <div className={"w-full"}>

                        <p className="text-coolGray-500 text-right text-sm">£2.67</p>
                    </div>
                </div>

                <div className="w-full flex flex-wrap">

                    <div className={"w-1/2"}>
                        <p className="text-coolGray-500 text-left font-medium">
                            Amazon
                        </p>
                    </div>
                    <div className={"w-1/2 w-1/2 text-right"}>
                        <button className="py-1  px-4 text-sm text-white rounded-xl bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-blue)]">Button</button>
                    </div>

                </div>

            </div>
        </div>
    )
}