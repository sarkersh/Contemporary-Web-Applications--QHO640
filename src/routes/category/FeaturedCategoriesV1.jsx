import {
    CatTravel, LogoLight, RegisterLeft, LoginLeft,
    CatWatches, CatShoes, CatPhones,
    CatHealthBeauty, CatGames, CatComputers, CatClothing,
    CatBooks, CatSports

} from "../../assets/index.js"
import { Link, useNavigate } from 'react-router-dom';

export default function FeaturedCategoriesV1() {

    return (
        <section data-section-id="3" data-share="" data-category="logo-clouds" data-component-id="2c84e5fe_16_awz" className="py-24">
            <div className="container px-4 mx-auto max-w-5xl ">
                <h2 className="mb-8 text-center text-gray-800 text-xl text-3xl font-bold sm:text-4xl" >
                    Featured Categories
                </h2>
                <div className="flex flex-wrap items-center -m-4">
                    <FeaturedCategoryItem name={"Shoes"} image={CatShoes} id={"1"}/>
                    <FeaturedCategoryItem name={"Clothing"} image={CatClothing} id={"2"}/>
                    <FeaturedCategoryItem name={"Games"} image={CatGames} id={"3"}/>
                    <FeaturedCategoryItem name={"Travel"} image={CatTravel} id={"4"} />
                    <FeaturedCategoryItem name={"Watches"} image={CatWatches} id={"5"}/>
                    <FeaturedCategoryItem name={"Books"} image={CatBooks} id={"6"}/>
                    <FeaturedCategoryItem name={"Health & Beauty"} image={CatHealthBeauty} id={"7"} />
                    <FeaturedCategoryItem name={"Phones"} image={CatPhones} id={"8"}/>
                    <FeaturedCategoryItem name={"Computer"} image={CatComputers} id={"9"}/>
                    <FeaturedCategoryItem name={"Sports"} image={CatSports} id={"10"}/>

                </div>
            </div>
        </section>

    )
}


function FeaturedCategoryItem({name, image, id}) {
    return (
        <div class="w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <Link to={"/deals?category="+id} >
                <div className="py-16 bg-gray-50 flex flex-col items-center align-content-between text-center hover:bg-white rounded-md hover:shadow-xl
             transition duration-200 border-solid border-2 border-gray-100">
                    <img className="h-14 mx-auto" src={image} alt="" data-config-id="image6" />
                    <h2 className={"mx-auto mt-8 font-bold"}>{name}</h2>
                </div>
            </Link>


        </div>
    )
}
