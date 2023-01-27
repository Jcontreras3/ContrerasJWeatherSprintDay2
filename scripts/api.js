import { WeatherColElements, ForecastElements } from "./app.js"
import { prod, dev } from "./environment.js"

let apiKey = '&units=imperial&APPID=';
if(prod.isLive){
    apiKey += prod.apiKey;
}else{
    apiKey += dev.apiKey;
}

function WeatherURL(city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey)
    .then(response => response.json()
    ).then(data => {let weatherData = data
    WeatherColElements(weatherData)})
}
function ForeCastURL(city){
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey)
    .then(response => response.json()
    ).then(data => {let forecastData = data 
        ForecastElements(forecastData)})
        
}

export {WeatherURL, ForeCastURL}