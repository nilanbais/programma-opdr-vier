import * as weatherAPI from "./_weather_report.js";
import { addWeatherResultCard } from "./_result_card.js";
import { getUserLocation, geocodeCity } from "./_location.js";

// location from input
const add_location_btn = document.getElementById("add_location_btn");
const location_input = document.getElementById("location__input");
// location from user location
const user_location_btn = document.getElementById("user_location_btn");




async function addLocationBtnEvent() {
    let latlongArray = await geocodeCity(location_input.value)
    const weatherReport = await weatherAPI.getForecast(latlongArray.lat, latlongArray.lng);

    const locationName = weatherAPI.filterCityName(weatherReport)
    const weatherCode = weatherAPI.filterWeatherCode(weatherReport);
    const weatherTemp = weatherAPI.filterTemp(weatherReport);
    const weatherFeelTemp = weatherAPI.filterFeelTemp(weatherReport);
    const weatherPOP = weatherAPI.filterPOP(weatherReport);

    addWeatherResultCard(locationName, weatherCode, weatherTemp, weatherFeelTemp, weatherPOP);
}



add_location_btn.addEventListener('click', async(e) => {
    e.preventDefault();
    addLocationBtnEvent()
    // liep te kutten met de promise uit de eerste func als input voor de tweede
    // wss was het probleem dat result werd geparsed als txt -> opgelost in _api.js
})


user_location_btn.addEventListener('click', async(e) => {
    e.preventDefault()
    const user_location = await getUserLocation()
    const weatherReport = await getWeatherByLatLon(user_location.latitude, user_location.longitude)
    console.log(weatherReport)
})