function getPSI()
{
    axios.get("https://api.data.gov.sg/v1/environment/psi")
        .then(function(response){
            
            let regions = response.data.region_metadata;
            let readings = response.data.items[0].readings.psi_twenty_four_hourly;
            
            for (let r of regions)
            {
                let m = new mapboxgl.Marker();
                m.setLngLat([r.label_location.longitude, r.label_location.latitude]);
                m.addTo(map);
                
                let region_name = r.name;
                let psi_reading = readings[region_name];
                
                let popup = new mapboxgl.Popup({
                    offset:25
                });
                popup.setHTML("<p>PSI:" + psi_reading + "</p>");

                m.setPopup(popup);
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

// fetch the PSI
getPSI();

