"use client"; // Required for client-side rendering in Next.js

import React, { useEffect } from "react";
 // Import the CSS file for animations

const WindyWeatherMap = () => {
    useEffect(() => {
        const initWindyMap = () => {
            const options = {
                key: "rNV3lJwLizqsHpEg2oIyf0hrz2wgEsxh", // Your Windy API key
                lat: 20.5937, // Default latitude (center of India)
                lon: 78.9629, // Default longitude (center of India)
                zoom: 5, // Default zoom level
                verbose: false,
            };

            windyInit(options, (windyAPI) => {
                console.log("Windy API initialized", windyAPI);
            });
        };

        // Load Leaflet and Windy libraries
        const loadScripts = () => {
            const leafletScript = document.createElement("script");
            leafletScript.src = "https://unpkg.com/leaflet@1.4.0/dist/leaflet.js";
            leafletScript.async = true;
            document.body.appendChild(leafletScript);

            const windyScript = document.createElement("script");
            windyScript.src = "https://api.windy.com/assets/map-forecast/libBoot.js";
            windyScript.async = true;
            windyScript.onload = initWindyMap; // Initialize map after loading scripts
            document.body.appendChild(windyScript);
        };

        loadScripts();
    }, []);

    return (
        <div>
            <h1 className="weather text-3xl font-bold text-center py-5">Horizon Weather Map</h1>
            <div className="flex justify-center mb-4 relative top-24 z-10">
                <img 
                    src="/horizon-logo.png" 
                    alt="Horizon Logo" 
                    style={{ width: '180px' }} // Adjust width as needed
                />
            </div>
            <div id="windy" style={{ height: "100vh", width: "100%" }}></div>
        </div>
    );
};

export default WindyWeatherMap;
