import React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapView = () => {

    return (
        <Map
            initialViewState={{
                longitude: 77.06982,
                latitude: 28.2327635,
                zoom: 4
            }}
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        />
    )
}

export default MapView