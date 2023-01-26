import { WeatherColElements, ForecastElements } from "./app.js"

function WeatherURL(city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=8583ce53372dd01d973d6770d5ebcad9&units=imperial")
    .then(response => response.json()
    ).then(data => {let weatherData = data
    WeatherColElements(weatherData)})
}
function ForeCastURL(city){
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=8583ce53372dd01d973d6770d5ebcad9&units=imperial")
    .then(response => response.json()
    ).then(data => {let forecastData = data 
        ForecastElements(forecastData)})
        
}

export {WeatherURL, ForeCastURL}