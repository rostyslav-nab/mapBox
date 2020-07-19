const geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [30.5178, 50.4324]
        },
        properties: {
            title: 'Kyiv',
            description: 'Washington, D.C.'
        }
    },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-122.414, 37.776]
            },
            properties: {
                title: 'Mapbox',
                description: 'San Francisco, California'
            }
        }]
};
