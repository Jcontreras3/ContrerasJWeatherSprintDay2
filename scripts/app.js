import { WeatherURL, ForeCastURL } from "./api.js";

let weatherCol1 = document.getElementById('weatherCol1');

function WeatherColElements(){
    let cityText = document.createElement('p');
    cityText.textContent = "Modesto, CA";
    cityText.className = "pTxtStyles1"


    weatherCol1.appendChild(cityText);
}

WeatherURL();
ForeCastURL();
WeatherColElements();