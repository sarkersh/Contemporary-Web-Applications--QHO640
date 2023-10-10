
function Notifications() {
    // create a sample array of notifications
    const notifications = [
        {
            id: 1,
            image: 'https://source.unsplash.com/random/100x100?sig=1',
            name: 'Apple iPhone 13 Pro',
            salePrice: '$999.00',
            price: '$1099.00',
            store: 'Amazon',
            url: 'https://www.amazon.com/Apple-iPhone-13-Pro-128GB/dp/B09G9D5ZC8',
        },
        {
            id: 2,
            image: 'https://source.unsplash.com/random/100x100?sig=2',
            name: 'Samsung Galaxy S21 Ultra',
            salePrice: '$899.00',
            price: '$1199.00',
            store: 'Best Buy',
            url: 'https://www.bestbuy.com/site/samsung-galaxy-s21-ultra-5g-128gb-unlocked-phantom-black/6447784.p?skuId=6447784',
        },
        {
            id: 3,
            image: 'https://source.unsplash.com/random/100x100?sig=3',
            name: 'Sony PlayStation 5 Console',
            salePrice: '$499.00',
            price: '$599.00',
            store: 'Walmart',
            url: 'https://www.walmart.com/ip/Sony-PlayStation-5-Console/363472942',
        },
        {
            id: 4,
            image: 'https://source.unsplash.com/random/100x100?sig=4',
            name: 'Microsoft Xbox Series X Console',
            salePrice: '$499.00',
            price: '$599.00',
            store: 'Target',
            url: 'https://www.target.com/p/xbox-series-x-console/-/A-80790841#lnk=sametab',
        },
        {
            id: 5,
            image: 'https://source.unsplash.com/random/100x100?sig=5',
            name: 'Nintendo Switch Console with Neon Blue and Neon Red Joy-Con',
            salePrice: '$299.00',
            price: '$349.00',
            store: 'GameStop',
            url: 'https://www.gamestop.com/video-games/switch/consoles/products/nintendo-switch-with-neon-blue-and-neon-red-joy-con/11095819.html',
        },
        {
            id: 6,
            image: 'https://source.unsplash.com/random/100x100?sig=6',
            name: 'Apple MacBook Pro 16-inch Laptop with Apple M1 Pro Chip (2021)',
            salePrice: '$2299.00',
            price: '$2499.00',
            store: 'Apple Store',
            url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-gray-apple-m1-pro-10-core-cpu-16-core-gpu-512gb#overview',
        },
        {
            id: 7,
            image: 'https://source.unsplash.com/random/100x100?sig=7',
            name: 'Dell XPS 15 9510 Laptop with Intel Core i7 Processor (2021)',
            salePrice: '$1999.00',
            price: '$2199.00',
            store: 'Dell Store',
            url:
                'https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9510-laptop/xn9510cto220s?view=configurations&configurationid=8c8f7c3a-df6e-4b2a-bf0a-fb6e8c2f0c8d#features_section',
        },
        {
            id: 8,
            image: 'https://source.unsplash.com/random/100x100?sig=8',
            name:
                'HP Spectre x360 Convertible Laptop with Intel Core i7 Processor (2021)',
            salePrice: '$1599.00',
            price: '$1799.00',
            store: 'HP Store',
            url:
                'https://store.hp.com/us/en/pdp/hp-spectre-x360-laptop-14t-ea000-touch-1q881av-1?jumpid=ma_2017-spectre-family_product-tile_laptops_1_1q881av-1_hp-spectre-x360-laptop---',
        },
        {
            id: 9,
            image: 'https://source.unsplash.com/random/100x100?sig=9',
            name: 'Apple AirPods Pro',
            salePrice: '$199.00',
            price: '$249.00',
            store: 'Costco',
            url: 'https://www.costco.com/apple-airpods-pro.product.100519747.html',
        },
        {
            id: 10,
            image: 'https://source.unsplash.com/random/100x100?sig=10',
            name: 'Bose QuietComfort 35 II Wireless Headphones',
            salePrice: '$249.00',
            price: '$299.00',
            store: 'Bose Store',
            url:
                'https://www.bose.com/en_us/products/headphones_outlet/quietcomfort-35-wireless-ii-refurbished.html#v=qc35_ii_wireless_black_refurbished',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <ul className="grid grid-cols-1 gap-4 ">
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        className="flex flex-row bg-white rounded-md shadow-md p-4"
                    >
                        <img
                            src={notification.image}
                            alt={notification.name}
                            className="w-1/8 h-16 pr-4 object-cover rounded-t-md"
                        />
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-lg font-medium text-gray-800 mt-2">
                                {notification.name}
                            </h2>
                            <div className={"flex flex-row"}>
                                <p className="text-sm font-medium text-green-600 mt-1 pr-4">
                                    {notification.salePrice}
                                </p>
                                <p className="text-sm font-medium pr-4 text-gray-600 line-through mt-1">
                                    {notification.price}
                                </p>
                                <p className="text-sm font-medium text-gray-600 mt-1">
                                    {notification.store}
                                </p>

                            </div>

                        </div>
                        <a
                            href={notification.url}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-purple-600 text-white font-bold rounded-md px-4 py-2 mt-4 hover:bg-purple-700"
                        >
                            Get Deal
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
