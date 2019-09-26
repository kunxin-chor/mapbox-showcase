// define frequently used constants
const API_URL = 'https://api.foursquare.com/v2';
const CLIENT_ID = 'OWM4RWDVI1IXUTU0PGYXUBKQ0BDVLGV1VWP2N35XIJ4TYXEF';
const CLIENT_SECRET = "EIIORYOHQZDTH540G4W54A0ZMNLDSAC5XYNDOFGIYOPNVGJ5";

/* global axios */
/* global $ */

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

$(function(){
   
   $('#search-button').click(function(){
       
        let search_terms = $('#search-terms').val();
       
        axios.get(API_URL + "/venues/explore", {
        params: {
            "client_id":CLIENT_ID,  
            "client_secret":CLIENT_SECRET,
            "v":'20192609', // v for is the version
            "limit":10, // limit is how many results returned
            "ll":'1.2933,103.7831', // latitude/longtitude
            "query":search_terms // what we are searching for
       }
    }).then(function(response){
        $("#results").empty();
        let results = response.data.response.groups[0].items;
        for (let each_result of results)
        {
            let html = `<li>${each_result.venue.name}</li>`;
            let result_item = $(html);
            $("#results").append(result_item);
        }
    })
   })
    
});