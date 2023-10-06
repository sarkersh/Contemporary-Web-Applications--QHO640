
import { BiBellOff, BiStar, BiSolidStarHalf, BiSolidStar  } from 'react-icons/bi';



// A component that renders a star rating based on the stars prop
const StarRating2 = ({ stars }) => {
    // An array of three colors, either gray, yellow, or orange depending on the stars prop
    const colors = [
        stars >= 1 ? 'orange' : 'gray',
        stars >= 2 ? 'orange' : stars >= 1.5 ? 'orange' : 'gray',
        stars >= 3 ? 'orange' : stars >= 2.5 ? 'orange' : 'gray',
        stars >= 4 ? 'orange' : stars >= 3.5 ? 'orange' : 'gray',
        stars >= 5 ? 'orange' : stars >= 4.5 ? 'orange' : 'gray',
    ];

    return (
        <div className="flex justify-center">
            {colors.map((color, index) => (
                // Use a ternary operator to render either a full star or a half star
                color === 'orange' ? (
                    <BiSolidStarHalf key={index} style={{ color }} className="text-2xl " />
                ) : (
                    <BiSolidStar key={index} style={{ color }} className="text-2xl" />
                )
            ))}
        </div>
    );
};





// A function that returns a star icon with a given color
const StarIcon = ({ color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        className="w-6 h-6"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253l2.847 5.763.018.04 6.32.917-4.55 4.44-.015.015.99 5.77-5.18-2.726-.014-.008-5.18 2.726.99-5.77-.015-.015-4.55-4.44 6.32-.917.018-.04L12 6.253z"
        />
    </svg>
);

// A component that renders a star rating based on the stars prop
const StarRating = ({ stars }) => {
    // An array of five colors, either gray or yellow depending on the stars prop
    const colors = [
        stars >= 1 ? 'yellow' : 'gray',
        stars >= 2 ? 'yellow' : 'gray',
        stars >= 3 ? 'yellow' : 'gray',
        stars >= 4 ? 'yellow' : 'gray',
        stars >= 5 ? 'yellow' : 'gray',
    ];

    return (
        <div className="flex justify-center">
            {colors.map((color, index) => (
                <StarIcon key={index} color={color} />
            ))}
        </div>
    );
};

export default StarRating;