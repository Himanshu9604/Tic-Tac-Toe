import React, { useState } from 'react';

import './FirstTask1.css';

function FirstTask1() {
    const [picIndex, setPicIndex] = useState(0);
    const picList = ['Images/Developer1.jpg', 'Images/Developer2.jpg', 'Images/Developer3.jpg', 'Images/Developer4.jpg', 'Images/Developer5.jpg', 'Images/Developer6.jpg', 'Images/Developer7.jpg',];

    const handlePicChange = () => {
        setPicIndex((picIndex + 1) % picList.length);
    };

    return (
        <div className="container">
            <div className="left-side">
                <img src={picList[picIndex]} alt="Profile Picture" />
            </div>
            <div className="right-side">
                <button onClick={handlePicChange}>Change Pic</button>
            </div>
        </div>
    );
}

export default FirstTask1;
