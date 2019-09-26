// define frequently used constants
const API_URL = 'https://api.foursquare.com/v2';
const CLIENT_ID = 'OWM4RWDVI1IXUTU0PGYXUBKQ0BDVLGV1VWP2N35XIJ4TYXEF';
const CLIENT_SECRET = "EIIORYOHQZDTH540G4W54A0ZMNLDSAC5XYNDOFGIYOPNVGJ5";

/* global axios */
/* global $ */

/* global variables */
let map;
let all_markers = [];

function testGetFourSquare()
{
    axios.get(API_URL + "/venues/explore", {
        params: {
            "client_id":CLIENT_ID,  
            "client_secret":CLIENT_SECRET,
            "v":'20192609', // v for is the version
            "limit":10, // limit is how many results returned
            "ll":'1.2933,103.7831', // latitude/longtitude
            "query":'coffee' // what we are searching for
       }
    }).then(function(response){
      console.log(response.data.response.groups[0].items);  
    })
}

function setupMap()
{
    mapboxgl.accessToken = "pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZqbG03MTMyNjNibHd6ZGZtZ2h4ZyJ9.3lNlfchk5P2BV4Zcr-bAsg";
    
    map = new mapboxgl.Map({
    container: 'map', // which html element it should be
    style:'mapbox://styles/mapbox/streets-v11', // how it should look like
    center:[103.7831, 1.2933], // where should be the map be centered at
    zoom:13 // how zoomed we are 
    });
}

$(function(){
   
   setupMap();
   
   $('#search-button').click(function(){
       
        let search_terms = $('#search-terms').val();
        let center = map.getCenter();
        console.log(center);

        axios.get(API_URL + "/venues/explore", {
        params: {
            "client_id":CLIENT_ID,  
            "client_secret":CLIENT_SECRET,
            "v":'20192609', // v for is the version
            "limit":50, // limit is how many results returned
            "ll":center.lat + "," + center.lng, // latitude/longtitude
            "query":search_terms // what we are searching for
       }
    }).then(function(response){
        $("#results").empty();
        
       
        for (let each_marker of all_markers)
        {
            each_marker.remove();
        }
        
        all_markers = [];
        
        let results = response.data.response.groups[0].items;
        for (let each_result of results)
        {
          let marker = new mapboxgl.Marker();
          marker.setLngLat([each_result.venue.location.lng, each_result.venue.location.lat]);
          marker.addTo(map); // <-- map is a global variable holding the mapboxgl Map object
        
          let popup = new mapboxgl.Popup({
              offset: 25
          });
          
          popup.setHTML(each_result.venue.name);
          
          marker.setPopup(popup);
            
          all_markers.push(marker);
            
        }
    })
   })
    
});