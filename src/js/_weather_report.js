// Weer API docs: https://openweathermap.org/
// Keuze gemaakt om weerbericht enkel via latitute, longitude op te vragen
// _location.js is verantwoordelijk voor geocoding
import { getResponse } from "./_api.js";


const api_env = {
    latlon_url: `https://open-weather13.p.rapidapi.com/city/latlon`,
    cityname_url: `https://open-weather13.p.rapidapi.com/city`,

    request_headers: {
        'X-RapidAPI-Key': '01760723f2msh9ad74e49c3fa409p14af2fjsn481f178a56b5',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
}

const open_weather_api_env = {
    current_weather_url: 'https://api.openweathermap.org/data/2.5/weather',
    forecast_url: 'https://api.openweathermap.org/data/2.5/forecast',
    //excuus voor het volgende
    api_key: 'ed8236766e0fb4f107cb2540ca122564'
}

export async function getWeatherByLatLon(latitude, longitude) {
    const url = api_env.latlon_url + '/' + `${latitude}` + '/' + `${longitude}`;
    const result = await getResponse(url, api_env.request_headers);
    return result
}

export async function getWeatherByCity(cityName) {
    const url = api_env.cityname_url + '/' + cityName + '/EN'; // + '/EN' voor taal spec
    const result = await getResponse(url, api_env.request_headers);
    return result
}

export async function getCurrentWeather(latitude, longitude) {
    const url = open_weather_api_env.current_weather_url + '?' + `lat=${latitude}`+ '&' +  `lon=${longitude}` + '&' + `appid=${open_weather_api_env.api_key}`
    const result = await getResponse(url);
    return result
}

export async function getForecast(latitude, longitude) {
    const url = open_weather_api_env.forecast_url + '?' + `lat=${latitude}`+ '&' +  `lon=${longitude}` + '&' + `appid=${open_weather_api_env.api_key}`
    const result = await getResponse(url);
    return result
}

export function filterCityName(weather_report) {
    return weather_report.city.name
}

export function filterDescription(weather_report) {
    return weather_report.list[0].weather[0].description
}

export function filterWeatherCode(weather_report) {
    return weather_report.list[0].weather[0].id
}

export function filterTemp(weather_report) {
    return weather_report.list[0].main.temp
}

export function filterFeelTemp(weather_report) {
    return weather_report.list[0].main.feels_like
}

export function filterPOP(weather_report) {
    //poptential rain
    return weather_report.list[0].pop
}