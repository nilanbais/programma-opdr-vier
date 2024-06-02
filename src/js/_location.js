// Geocoding API Docs: https://rapidapi.com/trueway/api/trueway-geocoding
import { getResponse } from "./_api.js";

const api_env = {
    url_base: 'https://trueway-geocoding.p.rapidapi.com/Geocode',
    //excuus voor het volgende
    request_headers: {
        'X-RapidAPI-Key': '01760723f2msh9ad74e49c3fa409p14af2fjsn481f178a56b5',
        'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
    }
}


export async function getUserLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(geoPosition) {
            console.log(`geo lat: ${geoPosition.coords.latitude}`)
            let resultArray = {
                latitude: geoPosition.coords.latitude,
                longitude: geoPosition.coords.longitude
            };
            return resultArray
        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}



export async function geocodeCity(cityName) {
    // Returns lat, long of the parsed city
    const url = api_env.url_base + '?address=' + cityName
    const result = await getResponse(url, api_env.request_headers);
     // extract the {lat,lng} part from the result object
    const geolocationArray = await result.results[0].location
    return geolocationArray
}