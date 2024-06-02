import { getWeatherByLatLon, getWeatherByCity } from "./_weather_report.js";
import { addWeatherResultCard } from "./_result_card.js";

// location from input
const add_location_btn = document.getElementById("add_location_btn");
const location_input = document.getElementById("location__input");
// location from user location
const user_location_btn = document.getElementById("user_location_btn");





add_location_btn.addEventListener('click', async(e) => {
    e.preventDefault();

    const city = location_input.value;
    const weatherReport = await getWeatherByCity(city);
    console.log(weatherReport);

    addWeatherResultCard(weatherReport);
})

user_location_btn.addEventListener('click', async(e) => {
    e.preventDefault()
    const weatherReport = await getWeatherByLatLon()
    console.log(weatherReport)
})