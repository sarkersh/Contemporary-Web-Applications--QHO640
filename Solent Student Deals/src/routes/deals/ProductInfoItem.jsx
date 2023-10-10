import {CatShoes} from "../../assets/index.js";
import {StarRating} from "../../components/index.js";
import Notification from "../../components/Notification.jsx"


export default function ProductInfoItem({deal}) {


    const dealPrice = parseFloat(deal.salePrice)
    const originalPrice = parseFloat(deal.price)

    const discount = originalPrice - dealPrice
    const percentDiscount = (discount / originalPrice) * 100

    return (
        <div className="w-full px-4">

            <div className="h-full p-8 text-center hover:bg-gray-100 rounded-md hover:shadow-xl
             transition duration-200 border-solid border-2 border-gray-100 bg-white">


                <div className={"w-full flex flex-col items-center justify-center mb-10"}>

                    <h1 className={"text-3xl font-bold text-gray-800"}>{deal.productName}</h1>
                    <p className={"text-coolGray-300 text-left text-sm"}>SALE {percentDiscount.toFixed(2)}% Off</p>
                </div>

                <div className="inline-flex mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">

                    <img className="h-36 mx-auto" src={deal.imageSrc} alt=""  />

                </div>

                <div className="w-full flex flex-wrap">
                    <div className={"w-full text-right"}>

                        <span className="text-gray-500 line-through mr-2">£{deal.price}</span>
                        <span className="text-coolGray-500 text-right text-gray-800 font-bold text-sm">£{deal.salePrice}</span>
                    </div>
                </div>

                <div className="w-full flex flex-wrap">

                    <div className={"w-1/2"}>
                        <p className="text-coolGray-500 text-xl font-medium">
                            {deal.shop}
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