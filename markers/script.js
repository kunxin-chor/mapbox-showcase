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

let marker = new mapboxgl.Marker()
    .setLngLat([103.8198,1.3521]) // set the lng and lat of the marker
    .addTo(map); // and add it to the map object we just created