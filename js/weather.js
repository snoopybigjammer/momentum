const API_KEY = "e0c8acc9f9f76651dfa51b04375dfbfd"

function onGeoOK(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json() )
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name
            weather.innerText = data.weather[0].main
    });
}



function onGeoError() {
    alert("where are you?")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)