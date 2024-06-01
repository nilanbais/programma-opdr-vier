

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