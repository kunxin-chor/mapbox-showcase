/* global mapboxgl */

let places = [
    {
        'name':'Singapore Bird Park',
        'position':[103.7064, 1.3187]
    },
    {
        'name':'Singapore Zoo',
        'position': [103.7930, 1.4043 ]
    },
    {
        'name':'Changi Village',
        'position': [103.983208, 1.345010]
    },
    {
        'name': "Raffles Hotel",
        'position': [103.8545, 1.2949]
    }
];

mapboxgl.accessToken = "pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZqbG03MTMyNjNibHd6ZGZtZ2h4ZyJ9.3lNlfchk5P2BV4Zcr-bAsg";

let map = new mapboxgl.Map({
    container: 'map',
    center: [103.8198, 1.3521],
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 11
})

for (let each_place of places)
{
    console.log(each_place);
    // creates a marker for the current place of interest
    let m = new mapboxgl.Marker();
    
    // create a pop-up    
    let p = new mapboxgl.Popup({
        offset: 25
    });
    p.setHTML(`<h3>${each_place.name}</h3>`);
    
    // set position for the marker
    m.setLngLat(each_place.position);
    
    // add pop-up to the marker
    m.setPopup(p);
    
    // add the marker to the map so that it will show up on the map
    m.addTo(map);
    
    
    /*
      Alternatively...
      m.setPopup(p).addTo(map)
    */
    
}