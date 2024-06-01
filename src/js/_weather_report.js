// Weer API docs: https://rapidapi.com/worldapi/api/open-weather13

import { getUserLocation } from "./_user_location.js";


const api_env = {
    latlon_url: `https://open-weather13.p.rapidapi.com/city/latlon`,
    cityname_url: `https://open-weather13.p.rapidapi.com/city`,
    //excuus voor het volgende
    request_headers: {
        'X-RapidAPI-Key': '01760723f2msh9ad74e49c3fa409p14af2fjsn481f178a56b5',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
}

async function getResponse(url) {
    
    const options = {
        method: 'GET',
        headers: api_env.request_headers
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result
    } catch (error) {
        console.log(error)
    }
}

export async function getWeatherByLatLon() {
    let user_location = await getUserLocation();

    const url = api_env.latlon_url + '/' + `${user_location.latitude}` + '/' + `${user_location.longitude}`;
    const result = await getResponse(url, options);
    return result

}


export async function getWeatherByCity(cityName) {
    const url = api_env.cityname_url + '/' + cityName + '/EN'; // + '/EN' voor taal spec
    const result = await getResponse(url);
    return result
}