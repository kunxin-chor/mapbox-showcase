/* global mapboxgl */
mapboxgl.accessToken = "pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZqbG03MTMyNjNibHd6ZGZtZ2h4ZyJ9.3lNlfchk5P2BV4Zcr-bAsg";

let mapOptions = {
    container: 'map', // which html element it should be
    style:'mapbox://styles/mapbox/streets-v11', // how it should look like
    center:[103.8198, 1.3521], // where should be the map be centered at
    zoom:11 // how zoomed we are 
};
let map = new mapboxgl.Map(mapOptions);

// Create a new marker

// create a pop-up
let popup = new mapboxgl.Popup(
    {
        offset:25
    }
);
// what the popup should show
popup.setHTML(`<h3>Singapore</h3><p>Sunny island set in the sea`);

// create the marker and set the popup to use
let marker = new mapboxgl.Marker()
    .setLngLat([103.8198,1.3521]) // set the lng and lat of the marker
    .setPopup(popup)
    .addTo(map)  // and add it to the map object we just created
    

// show a second marker
// create a pop-up
let changi_popup = new mapboxgl.Popup(
    {
        offset:25
    }
);
// what the popup should show
changi_popup.setHTML(`<h3>Singapore Changi Airport</h3><p>Best airport in the world`);

// create the marker and set the popup to use
let changi_marker = new mapboxgl.Marker()
    .setLngLat([103.9915,1.3644]) // set the lng and lat of the marker
    .setPopup(changi_popup)
    .addTo(map)  // and add it to the map object we just created
    
