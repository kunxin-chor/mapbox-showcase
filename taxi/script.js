/* global axios */
function getTaxi()
{
    axios.get("https://api.data.gov.sg/v1/transport/taxi-availability")
        .then(function(response){
            console.log(response.data.features[0].geometry.coordinates);
            let taxis = response.data.features[0].geometry.coordinates;
            for (let t of taxis )
            {
                let m = new mapboxgl.Marker();
                m.setLngLat(t);
                m.addTo(map);
            }
        })
}

/* global mapboxgl */
mapboxgl.accessToken = "pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZqbG03MTMyNjNibHd6ZGZtZ2h4ZyJ9.3lNlfchk5P2BV4Zcr-bAsg";

let mapOptions = {
    container: 'map', // which html element it should be
    style:'mapbox://styles/mapbox/streets-v11', // how it should look like
    center:[103.8198, 1.3521], // where should be the map be centered at
    zoom:11 // how zoomed we are 
};
let map = new mapboxgl.Map(mapOptions);

// 