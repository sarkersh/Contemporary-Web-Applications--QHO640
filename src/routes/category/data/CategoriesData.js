

export const getFeaturedCategories = () => {
    return new Promise((resolve, reject) => {

        console.log("getFeaturedCategories")


        const Data = [
            {
                id: 1,
                name: 'Basic Tee',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                imageAlt: "Front of men's Basic Tee in black.",


            },
            {
                id: 2,
                name: 'Basic Tee',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                imageAlt: "Front of men's Basic Tee in black.",

            },
            {
                id: 3,
                name: 'Basic Tee',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                imageAlt: "Front of men's Basic Tee in black.",

            },
        ];

        console.log("getFeaturedCategories", Data)

        if (Data) {
            resolve(Data);
        } else {
            reject("Error fetching Deals");
        }
    });
};
