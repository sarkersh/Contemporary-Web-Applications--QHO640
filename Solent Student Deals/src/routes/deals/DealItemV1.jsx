
import {StarRating} from "../../components/index.js";
import {Link} from "react-router-dom";


export default function DealItemV1(deal) {

    const dealPrice = parseFloat(deal.salePrice)
    const originalPrice = parseFloat(deal.price)

    const discount = originalPrice - dealPrice
    const percentDiscount = (discount / originalPrice) * 100


    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl
             transition duration-200 border-solid border-2 border-gray-100">

                <div className={"w-full flex flex-wrap"}>
                    <p className={"w-1/2"}>
                        <div className={"rounded bg-blue-900 text-white text-xs text-left w-2/3"}>Best Seller</div>
                        <div className={"rounded bg-red-600 text-white text-xs w-1/3 mt-1 mb-2"}>-{percentDiscount}%</div>
                    </p>
                    <div className={"w-1/2"}>
                        <StarRating stars={deal.reviewScore} />
                    </div>

                </div>
                <div className="inline-flex mb- mx-auto items-center justify-center text-white bg-green-500 rounded-lg">

                    <Link to={'deal/' + deal.id} >
                        <img className="h-36 mx-auto object-fit-cover w-full" src={deal.imageSrc} alt=""  />
                    </Link>

                </div>

                <Link to={'deal/' + deal.id} >
                    <h3 className="mb-4 text-l text-left leading-tight font-bold" >
                            {deal.productName}
                    </h3>
                </Link>

                <p className="text-coolGray-500 text-left font-medium">£{deal.salePrice} </p>

                <div className="w-full flex flex-wrap">

                    <div className={"w-1/2"}>
                        <p className="text-coolGray-500 text-left font-medium">
                            {deal.shop}
                        </p>
                    </div>
                    <div className={"w-1/2 w-1/2 text-right"}>

                        <Link to={`${deal.dealUrl}`}>
                            <button className="py-1  px-4 text-sm text-white rounded-xl bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-blue)]">Get deal</button>
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    )
}