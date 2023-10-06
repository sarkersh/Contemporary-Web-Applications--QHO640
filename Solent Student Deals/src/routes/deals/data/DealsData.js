

export const getDealItemList = () => {
    return new Promise((resolve, reject) => {


        const Deals = [
            {
                id: 1,
                name: 'Basic Tee',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',

            },
            {
                id: 2,
                name: 'Basic Tee',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
            },
        ];

        if (Deals) {
            resolve(Deals);
        } else {
            reject("Error fetching Deals");
        }
    });
};


export const getDealOfDay = () => {
    return new Promise((resolve, reject) => {

        const Deals = [
            {
                id: 1,
                name: 'Basic Tee',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',

            }
        ];

        if (Deals) {
            resolve(Deals);
        } else {
            reject("Error fetching Deals");
        }
    });
};
