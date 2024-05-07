import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        // Retrieve visitor count from local storage
        const count = localStorage.getItem('visitorCount');
        if (count) {
            setVisitorCount(parseInt(count));
        } else {
            // Set initial visitor count if not found in local storage
            setVisitorCount(0);
        }
    }, []);

    const handleVisit = () => {
        // Increment visitor count and update local storage
        const newCount = visitorCount + 1;
        setVisitorCount(newCount);
        localStorage.setItem('visitorCount', newCount.toString());
    };

    return (
        <div className='h-full w-full flex items-center'>
            <h1>Welcome to My Website</h1>
            <p>Total Visitors: {visitorCount}</p>
            <button onClick={handleVisit}>Visit</button>
        </div>
    );
};

export default VisitorCounter;
