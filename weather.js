const onSuccessGeoLocation = (position) => {
    latitude = String(position.coords.latitude);
    longitude = String(position.coords.longitude);
    
    let local = document.querySelector(".name-local");
    let temperature = document.querySelector(".display-degree");
    let windSpeed = document.querySelector(".wind-speed");
    let iconIcon = document.querySelector(".icon");


    api = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=10c6f77cf897640bc0ff29d7ecb3f516`;
    fetch(api).then((response) => { return response.json() }).then(
        (data) => {
            console.log(data);
            const {name} = data;
            const {temp} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            console.log(name,temp,speed,icon);

            local.textContent = name;
            temperature.textContent = farenheitToCelsius(temp) +" C";
            windSpeed.textContent = velocity(speed) + " km/h";
    
        }
        
    )
};

function farenheitToCelsius(temp){
    celsius = temp- 273.15;
    return Math.floor(celsius);
}

function velocity(windSpeed){
    return windSpeed*3.6;
}

window.addEventListener("load", () => {
    let latitude;
    let longitude;
    let api;
    let proxy = "https://cors-anywhere.herokuapp.com/";


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccessGeoLocation,
            (positionError) => { console.log(positionError) });

    }
}

);






