import React, { useState } from 'react';

/**
 * FoodScanner Feature
 * Handles camera input and Gemini Vision API integration.
 */
const FoodScanner: React.FC = () => {
    const [isScanning, setIsScanning] = useState(false);

    const handleScan = async () => {
        setIsScanning(true);
        // TODO: Capture image and send to backend
        console.log("Scanning...");
        setTimeout(() => setIsScanning(false), 2000);
    };

    return (
        <div className="food-scanner">
            <h2>Quick Scan</h2>
            <button onClick={handleScan} disabled={isScanning}>
                {isScanning ? 'Analyzing...' : 'Scan Food'}
            </button>
        </div>
    );
};

export default FoodScanner;
