import {CatShoes} from "../../assets/index.js";
import {StarRating} from "../../components/index.js";



export default function DealItemV1() {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl
             transition duration-200 border-solid border-2 border-gray-100">


                <div className={"w-full flex flex-wrap"}>
                    <p className={"w-1/2"}>
                        <div className={"rounded bg-blue-900 text-white text-xs text-left w-2/3"}>Best Seller</div>
                        <div className={"rounded bg-red-600 text-white text-xs w-1/3 mt-1 mb-2"}>-44%</div>
                    </p>
                    <div className={"w-1/2"}>
                        <StarRating stars={4.5} />
                        {/*<StarRating2 stars={2.5} />*/}
                    </div>

                </div>
                <div className="inline-flex mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">

                    <img className="h-36 mx-auto" src={CatShoes} alt=""  />

                </div>
                <h3 className="mb-4 text-l text-left leading-tight font-bold" >Product Name</h3>
                <p className="text-coolGray-500 text-left font-medium">£2.67</p>

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