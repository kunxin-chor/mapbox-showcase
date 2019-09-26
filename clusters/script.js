/* global mapboxgl */
/* global L */

mapboxgl.accessToken = "pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZqbG03MTMyNjNibHd6ZGZtZ2h4ZyJ9.3lNlfchk5P2BV4Zcr-bAsg";

let mapOptions = {
    container: 'map', // which html element it should be
    style:'mapbox://styles/mapbox/streets-v11', // how it should look like
    center:[103.8198, 1.3521], // where should be the map be centered at
    zoom:11 // how zoomed we are 
};
let map = new mapboxgl.Map(mapOptions);

// points
let taxis = [[103.64341,1.33379],[103.66275,1.31463],[103.68984,1.34436],[103.69099,1.34125],[103.69525,1.34135],[103.69805,1.33964],[103.70652,1.33747],[103.7068,1.33818],[103.7072,1.34398],[103.70766,1.36531],[103.70943,1.36636],[103.7105,1.34279],[103.71191,1.34634],[103.7123,1.34821],[103.71357,1.34466],[103.71616,1.33667],[103.7171,1.35041],[103.71755,1.34961],[103.7186,1.3485],[103.71921,1.35063],[103.7194,1.35092],[103.71958,1.32404],[103.72019,1.35159],[103.72028,1.35103],[103.722,1.34127],[103.7235,1.35114],[103.7242,1.34656],[103.72525,1.34964],[103.72569,1.34936],[103.7257,1.35004],[103.72981,1.34924],[103.73688,1.3825],[103.738,1.32317],[103.7384,1.3581],[103.73895,1.37482],[103.73899,1.34252],[103.74025,1.35614],[103.74031,1.38631],[103.74042,1.33728],[103.74148,1.37309],[103.74237,1.3364],[103.74238,1.33959]];

let cluster =  new L.MarkerClusterGroup();

for (let t of taxis)
{
    let marker = new mapboxgl.Marker({
        offset: 25
    });
    marker.setLngLat(t);
    cluster.addLayer(marker);
}

map.addLayer(cluster);
