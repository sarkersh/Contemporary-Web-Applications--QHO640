import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ReviewList} from "./index.js";
import TabReviewList from "./TabReviewList";
import TabReviewForm from "./TabReviewForm.jsx";

// A component that renders a tab panel with the content for each tab
const TabPanel = ({ children, value, index }) => {
    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

// A component that renders a component with three tabs under the product info component
const ProductTabs = ({ description, reviews, attributes }) => {
    // A state variable that tracks the current tab index
    const [tabIndex, setTabIndex] = useState(0);

    // A function that handles the change event of the tabs
    const handleChange = (event, newValue) => {
        // Update the state with the new tab index
        setTabIndex(newValue);
    };

    return (
        <div className="container mx-auto p-4 bg-gray-100">
            <Tabs value={tabIndex} onChange={handleChange}>
                <Tab label="Description" />
                <Tab label="Reviews" />
                <Tab label="Attributes" />
            </Tabs>
            <TabPanel value={tabIndex} index={0}>
                {description}
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>

                <TabReviewForm />
                <TabReviewList reviews={reviews} />

            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
                {attributes.map((attribute) => (
                    <p key={attribute.name}>
                        {attribute.name}: {attribute.value}
                    </p>
                ))}
            </TabPanel>
        </div>
    );
};



const reviews = [
    {
        initials: 'JW',
        name: 'John Walker',
        score: 5,
        text: 'I love this product! It works perfectly and the sound quality is amazing. I highly recommend it to anyone who wants to enjoy their music without any noise.',
    },
    {
        initials: 'ML',
        name: 'Mary Lee',
        score: 4,
        text: 'This product is good, but not great. It does cancel the noise, but sometimes it feels too quiet and unnatural. I wish there was a way to adjust the level of noise cancellation.',
    },
    {
        initials: 'RS',
        name: 'Robert Smith',
        score: 3,
        text: 'This product is okay, but not worth the price. It does what it says, but the battery life is not very long and the design is not very comfortable. I think there are better options out there.',
    },
    {
        initials: 'KH',
        name: 'Kimberly Harris',
        score: 2,
        text: 'This product is disappointing. It barely cancels any noise and the sound quality is poor. I expected more from a brand like Bose. I regret buying this product.',
    },
    {
        initials: 'AB',
        name: 'Alex Brown',
        score: 1,
        text: 'This product is terrible. It does not work at all and it broke after one week of use. It is a waste of money and time. Do not buy this product.',
    },
];


export default ProductTabs;
