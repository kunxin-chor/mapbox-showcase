/* global mapboxgl */
/* global $ */

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
        'name':'Changi Airport',
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

// creating the markers
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

// create the text links
for (let i=0; i < places.length; i++)
{
    // // using closures to show the place name when we clicked on it
    // let list_item = $(`<li>${each_place.name}</li>`)
    //                 .click(function(){
    //                     map.flyTo({
    //                         "center": each_place.position,
    //                         "zoom":13
    //                     })
    //                 });
    

    // extract out the current place
    let current_place = places[i];
                    
    // create a list item for the current place and attach its index as a data so
    // that we can retrieve its index when the user clicked on it
    $("#location-list").append(
        $(`<li data-index='${i}'>${current_place.name}</li>`)
    );
    
}

// using delegates and jquery data to fly to the user's selected place
$("#location-list").on('click', 'li', function(){
    let index = $(this).data('index');
    let clicked_place = places[index];
    map.flyTo({
        "center" : clicked_place.position,
        "zoom":13
    })
} )