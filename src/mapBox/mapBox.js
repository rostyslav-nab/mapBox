import React, {useEffect, useState} from 'react'
import './mapBox.css'
import mapboxgl from 'mapbox-gl'
import SRC_MARKER from '../assets/marker.svg'
import ReactMapboxGl, {Popup} from "react-mapbox-gl"
import {Marker, GeoJSONLayer} from "react-mapbox-gl"


// const Map = ReactMapboxGl({
//     accessToken: "pk.eyJ1IjoiYmRlcHBvIiwiYSI6ImNrY3FidDY3YjEzODYyeGxmNzFibWt6bG8ifQ.rPFrZe1hzodSmElCTawGFg"
// });
//
// export const MapBox = () => {
//     const STYLE = 'mapbox://styles/bdeppo/ckcsb5bdy09os1ik5k14bptnv'
//
//     // const [initialLng, setInitialLng] = useState(30.5178)
//     // const [initialLat, setInitialLat] = useState(50.4303)
//     // const [zoom, setZoom] = useState(16.49)
//     //
//     // const [markerLat, setMarkerLat] = useState(0)
//     // const [markerLng, setMarkerLng] = useState(0)
//
//     return (
//         <div>
//             <Map className='mapContainer' style={STYLE} pitch={[45]} center={[initialLng, initialLat]} zoom={[16]}>
//                 <Marker
//                     coordinates={[30.5178, 50.4303]}
//                     anchor="bottom">
//                     <img src={SRC_MARKER} alt={'marker'}/>
//                 </Marker>
//                 <Popup
//                     coordinates={[30.5178, 50.4303]}
//                     offset={{
//                         'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
//                     }} className={'popUP'}>
//                     <input type="text" placeholder={'Title'}/>
//                     <input type="text" placeholder={'Description'}/>
//                     <button>Save</button>
//                 </Popup>
//
//                 <GeoJSONLayer/>
//             </Map>
//         </div>
//     )
// }
//

//


//
// export const MapBox = () => {
//     const mapContainerRef = useRef(null);
//
//     // initialize map when component mounts
//     useEffect(() => {
//         const map = new mapboxgl.Map({
//             container: mapContainerRef.current,
//             // See style options here: https://docs.mapbox.com/api/maps/#styles
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [-104.9876, 39.7405],
//             zoom: 12.5,
//         });
//
//         // add navigation control (the +/- zoom buttons)
//         map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
//
//         // clean up on unmount
//         return () => map.remove();
//     }, []); // eslint-disable-line react-hooks/exhaustive-deps
//
//     return <div className="mapContainer" ref={mapContainerRef} />;
// };

mapboxgl.accessToken = 'pk.eyJ1IjoiYmRlcHBvIiwiYSI6ImNrY3FidDY3YjEzODYyeGxmNzFibWt6bG8ifQ.rPFrZe1hzodSmElCTawGFg'

export const MapBox = () => {
    const [lng, setLng] = useState(30.5178)
    const [lat, setLat] = useState(50.4303)
    const [zoom, setZoom] = useState(16.49)

    const [markerLat, setMarkerLat] = useState(0)
    const [markerLng, setMarkerLng] = useState(0)


    let mapContainer = ''




    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/bdeppo/ckcsb5bdy09os1ik5k14bptnv',
            center: [lng, lat],
            zoom,
            pitch: 45,
            bearing: -17.6,
            antialias: true
        });

        map.on('mousemove', function(e) {
            document.getElementById('info').innerHTML =
            // e.point is the x, y coordinates of the mousemove event relative
            // to the top-left corner of the map
                JSON.stringify(e.point) +
                '<br />' +
                // e.lngLat is the longitude, latitude geographical position of the event
                JSON.stringify(e.lngLat.wrap());
        });

        map.on('click', (e)=>{
            setMarkerLat(e.lngLat.lat)
            setMarkerLng(e.lngLat.lng)


        })

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4))
            setLat(map.getCenter().lat.toFixed(4))
            setZoom(map.getZoom().toFixed(2))
        });



        // map.on('load', function () {
        //     const layers = map.getStyle().layers;
        //
        //     let labelLayerId;
        //     for (let i = 0; i < layers.length; i++) {
        //         if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
        //             labelLayerId = layers[i].id;
        //             break;
        //         }
        //     }
        //
        //     map.addLayer(
        //         {
        //             'id': '3d-buildings',
        //             'source': 'composite',
        //             'source-layer': 'building',
        //             'filter': ['==', 'extrude', 'true'],
        //             'type': 'fill-extrusion',
        //             'minzoom': 15,
        //             'paint': {
        //                 'fill-extrusion-color': 'rgba(125,137,118,0.7)',
        //
        //                 // use an 'interpolate' expression to add a smooth transition effect to the
        //                 // buildings as the user zooms in
        //                 'fill-extrusion-height': [
        //                     'interpolate',
        //                     ['linear'],
        //                     ['zoom'],
        //                     15,
        //                     0,
        //                     15.05,
        //                     ['get', 'height']
        //                 ],
        //                 'fill-extrusion-base': [
        //                     'interpolate',
        //                     ['linear'],
        //                     ['zoom'],
        //                     15,
        //                     0,
        //                     15.05,
        //                     ['get', 'min_height']
        //                 ],
        //                 'fill-extrusion-opacity': 0.6
        //             }
        //         },
        //         labelLayerId
        //     );
        // });

        // add markers to map
        geojson.features.forEach(function (marker) {

            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'marker';

            // const markerNode = document.createElement('div');
            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
                .addTo(map);
        });

        // <ToolTip title={marker.properties.title} desc={marker.properties.description}/>
        // '<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'
    }, [])


    console.log(markerLat, markerLng)

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





    return (
        <div>
            <div className='sidebarStyle'>
                <div>Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div>
            </div>
            <div ref={el => {
                mapContainer = el
            }} className='mapContainer'/>
        </div>
    )
}
