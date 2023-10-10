import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ futureDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(futureDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div>
            {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
        </div>
    );
};

export default CountdownTimer;