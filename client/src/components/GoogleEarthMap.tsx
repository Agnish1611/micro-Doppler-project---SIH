import React, { useEffect, useRef } from 'react';

const GoogleEarthMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (window.google) {
            initGoogleEarth();
        } else {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAh7ZkCCZDJv0WfNiNRKJFEaguZe9yDViM&libraries=earth`;
            script.async = true;
            script.defer = true;
            script.onload = () => initGoogleEarth();
            document.head.appendChild(script);
        }
    }, []);

    const initGoogleEarth = () => {
        if (!window.google || !window.google.maps) return;

        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 0, lng: 0 },
            zoom: 3,
            mapTypeId: window.google.maps.MapTypeId.SATELLITE,
        });

        const earth = new window.google.maps.EarthLayer(map);
        earth.setMap(map);
    };

    return (
        <div>
            <h1>Google Earth</h1>
            <div
                ref={mapRef}
                style={{
                    width: '100%',
                    height: '600px',
                    border: '1px solid black',
                }}
            />
        </div>
    );
};

export default GoogleEarthMap;
