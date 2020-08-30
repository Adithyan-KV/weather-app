document.addEventListener('DOMContentLoaded', () => {

    let api_key = config.API_KEY;
    let cityForm = document.querySelector('#city-input');
    let unitChanger = document.querySelectorAll('.units');
    let unit = 'c';
    let tempKelvin = 0;
    let temp = 0;

    unitChanger.forEach(item => {
        item.addEventListener('click', () => {
            if (item.id === 'celsius') {
                unitChanger[0].classList.remove('passive');
                unitChanger[1].classList.add('passive');
                unit = 'c';
                temp = getConvertedTemp(tempKelvin, 'c');
            }
            else {
                unitChanger[1].classList.remove('passive');
                unitChanger[0].classList.add('passive');
                unit = 'f';
                temp = getConvertedTemp(tempKelvin, 'f');
            }
            setTemperature(temp);
        });
    })

    cityForm.addEventListener('submit', (event) => {

        event.preventDefault();
        cityInput = document.querySelector('#city-name');
        let message = document.querySelector('.message');
        message.classList.remove('off');
        console.log(message.classList);
        getWeatherFor(cityInput.value);
        cityForm.reset();

        return false;
    })


    getWeatherFor = (city) => {
        fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                tempKelvin = data.main.temp;
                temp = getConvertedTemp(tempKelvin, unit);
                let city = data.name;
                let weather = data.weather[0].description;
                setCity(city);
                setTemperature(temp);
                setWeather(weather);
                let message = document.querySelector('.message');
                message.classList.add('off');
                console.log(message.classList);
                data = document.querySelector('.data');
                if (!data.classList.contains('active')) {
                    data.classList.add('active');
                }
            });
    };

    getConvertedTemp = (tempKelvin, unit) => {
        if (unit === 'c') {
            temp = Math.round(tempKelvin - 273)
            return (temp);
        }
        else {
            temp = Math.round((tempKelvin - 273) * (9 / 5) + 32);
            return (temp);
        }
    };

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