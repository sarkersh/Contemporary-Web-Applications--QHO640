import React, { useEffect, useState } from "react";
import { getFeaturedCategories } from "../category/data/CategoriesData.js";


export default function FeaturedCategories() {

    const [categories, setFCategories] = useState([]);

    useEffect(() => {

        async function getCategories() {
            const categories = await getFeaturedCategories();
            setFCategories(categories)
        }

        getCategories()


    }, [])

    //console.log("FCategories", categories)

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {categories.map((category) => (
                        <div key={category.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={category.imageSrc}
                                    alt={category.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={category.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {category.name}
                                        </a>
                                    </h3>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export function FeaturedCategoriesV1() {

    return (
        <section data-section-id="3" data-share="" data-category="logo-clouds" data-component-id="2c84e5fe_16_awz" className="py-24">
            <div className="container px-4 mx-auto">
                <h3 className="mb-8 text-center text-lg text-gray-500" data-config-id="header">Trusted by brands all over the world</h3>
                <div className="flex flex-wrap items-center -m-4">
                    <div className="w-full md:w-1/3 lg:w-1/6 p-4">
                        <div className="py-16 bg-blue-50">
                            <img className="h-6 mx-auto" src="bendis-assets/logos/slack-color.svg" alt="" data-config-id="image1" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/6 p-4">
                        <div className="py-16 bg-blue-50">
                            <img className="h-6 mx-auto" src="bendis-assets/logos/dropbox-color.svg" alt="" data-config-id="image2" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/6 p-4">
                        <div className="py-16 bg-blue-50">
                            <img className="h-6 mx-auto" src="bendis-assets/logos/spotify-color.svg" alt="" data-config-id="image3" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/6 p-4">
                        <div className="py-16 bg-blue-50">
                            <img className="h-6 mx-auto" src="bendis-assets/logos/amazon-color.svg" alt="" data-config-id="image4" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/6 p-4">
                        <div className="py-16 bg-blue-50">
                            <img className="h-6 mx-auto" src="bendis-assets/logos/netflix-color.svg" alt="" data-config-id="image5" />
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 lg:w-1/6 p-4">
                        <div class="py-16 bg-blue-50">
                            <img class="h-6 mx-auto" src="bendis-assets/logos/stripe-color.svg" alt="" data-config-id="image6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}



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
