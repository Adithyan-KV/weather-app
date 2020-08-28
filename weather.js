document.addEventListener('DOMContentLoaded', () => {
    fetch('https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London&appid=apikeygoeshere').then(response => response.json())
        .then(data => console.log(data));
});