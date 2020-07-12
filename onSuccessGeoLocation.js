export let onSuccessGeoLocation = (position) => {
    latitude = String(position.coords.latitude);
    longitude = String(position.coords.longitude);
    
    api =`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=10c6f77cf897640bc0ff29d7ecb3f516`;
    fetch(api).then((data) => {console.log(data)})
};