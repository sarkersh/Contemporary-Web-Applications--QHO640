import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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


export default ProductTabs;
