document.addEventListener('DOMContentLoaded', () => {

    let api_key = config.API_KEY;
    fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            tempKelvin = data.main.temp;
            tempCelsius = Math.round(tempKelvin - 273)
            city = data.name;
            weather = data.weather[0].description;
            setCity(city);
            setTemperature(tempCelsius);
            setWeather(weather);
        });

    setTemperature = (temp) => {
        let tempDisplay = document.querySelector('.magnitude');
        tempDisplay.innerHTML = `${temp}&deg;`;
    }

    setCity = (city) => {
        let cityName = document.querySelector('.city');
        cityName.innerHTML = city;
    }

    setWeather = (weather) => {
        let description = document.querySelector('.description');
        description.innerHTML = weather;
    }
});