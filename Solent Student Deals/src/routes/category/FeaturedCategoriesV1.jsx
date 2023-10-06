import {
    CatTravel, LogoLight, RegisterLeft, LoginLeft,
    CatWatches, CatShoes, CatPhones,
    CatHealthBeauty, CatGames, CatComputers, CatClothing,
    CatBooks, CatSports

} from "../../assets/index.js"


export default function FeaturedCategoriesV1() {

    return (
        <section data-section-id="3" data-share="" data-category="logo-clouds" data-component-id="2c84e5fe_16_awz" className="py-24">
            <div className="container px-4 mx-auto max-w-5xl ">
                <h2 className="mb-8 text-center text-gray-800 text-xl text-3xl font-bold sm:text-4xl" >
                    Featured Categories
                </h2>
                <div className="flex flex-wrap items-center -m-4">
                    <FeaturedCategoryItem name={"Shoes"} image={CatShoes} />
                    <FeaturedCategoryItem name={"Clothing"} image={CatClothing} />
                    <FeaturedCategoryItem name={"Games"} image={CatGames} />
                    <FeaturedCategoryItem name={"Travel"} image={CatTravel} />
                    <FeaturedCategoryItem name={"Watches"} image={CatWatches} />
                    <FeaturedCategoryItem name={"Books"} image={CatBooks} />
                    <FeaturedCategoryItem name={"Health & Beauty"} image={CatHealthBeauty} />
                    <FeaturedCategoryItem name={"Phones"} image={CatPhones} />
                    <FeaturedCategoryItem name={"Computer"} image={CatComputers} />
                    <FeaturedCategoryItem name={"Sports"} image={CatSports} />

                </div>
            </div>
        </section>

    )
}


function FeaturedCategoryItem({name, image}) {
    return (
        <div class="w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div class="py-16 bg-gray-50 flex flex-col items-center align-content-between">
                <img class="h-14 mx-auto" src={image} alt="" data-config-id="image6" />
                <h2 className={"mx-auto mt-8 font-bold"}>{name}</h2>
            </div>
        </div>
    )
}
