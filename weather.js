document.addEventListener('DOMContentLoaded', () => {

    let api_key = config.API_KEY;
    fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`).then(response => response.json())
        .then(data => console.log(data));
});