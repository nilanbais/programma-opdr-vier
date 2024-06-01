
let result_card_section = document.getElementById("result-card-section")

export function addWeatherResult(weather_report) {  // object komt binnen als lange string. input moet opgesplitst worden
    var innerDiv = document.createElement('div');
    innerDiv.className = 'block-2';
    innerDiv.textContent = weather_report;
    console.log(typeof(weather_report))

    result_card_section.appendChild(innerDiv);
}