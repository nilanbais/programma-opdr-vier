// list of weather types + given ID codes: https://openweathermap.org/weather-conditions

let result_card_section = document.getElementById("result-card-section")


let addedLocations = [];  // max 3 items


function inAddedLocations(new_location) {
    if (addedLocations.includes(new_location)) {
        return true;
    }
    return false;
}

function hasMaxLength(input_list, max_length = 3) {
    if (input_list.length === max_length) {
        return true;
    }
    return false;
}

function registerLocation(new_location) {
    if (inAddedLocations(new_location)) {
        return;
    } else {
        addedLocations.push(new_location);
    }
}

function deleteLocation(location) {
    if (inAddedLocations(location)) {
        addedLocations.pop(location);
    };
}


export function addWeatherResultCard(card_location, weather_code, temp, feel_temp, potent_rain) { 
    if (inAddedLocations(card_location) || hasMaxLength(addedLocations)) {
        return;
    } else {
        // create card -> update info -> add del btn eventlistener
        const card_dom_obj = createCard(card_location, weather_code, temp, feel_temp, potent_rain)
        result_card_section.appendChild(card_dom_obj)
        registerLocation(card_location)
        addDeleteCardEventListener(card_location)
    }
}


function createCard(card_location, weather_code, temp, feel_temp, potent_rain) {


    let card_body = document.createElement('div');
    card_body.className = "card result-card";
    card_body.id = `result-card-${card_location}`;
    let html_card = `
        <img class="card-img-top" src=${getImageSrc(weather_code)}>
        <div class="card-body">
            <h3 class="card-title">${card_location}</h3>
            <table class="table">
                <tbody>
                    <tr>
                        <td>Temperatuur</td>
                        <td>${temp}</td>
                        <td>°C</td>
                    </tr>
                    <tr>
                        <td>Voelt als</td>
                        <td>${feel_temp}</td>
                        <td>°C</td>
                    </tr>
                    <tr>
                        <td>Kans op regen</td>
                        <td>${potent_rain}</td>
                        <td>%</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-secondary" type="button" id="delete-btn-${card_location}">Delete Card</button> 
        </div>
    `;
    card_body.innerHTML = html_card;


    return card_body
    
}


function addDeleteCardEventListener(card_location) {
    const delete_btn = document.getElementById(`delete-btn-${card_location}`);
    delete_btn.addEventListener('click', (e) => {
        e.preventDefault()
        deleteCard(card_location)
    })
}


function deleteCard(card_location) {
    const target_dom_object = document.getElementById(`result-card-${card_location}`)
    target_dom_object.remove();
    deleteLocation(card_location);
}



function getImageSrc(weather_code) {
    const folder = './img'
    let  src = `${weather_code}.jpg`;
    return folder + '/' + src;
}


