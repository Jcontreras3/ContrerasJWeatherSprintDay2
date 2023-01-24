import { WeatherURL, ForeCastURL } from "./api.js";

let weatherCol1 = document.getElementById('weatherCol1');
let weatherCol2 = document.getElementById('weatherCol2');

function WeatherColElements(){
    let cityText = document.createElement('p');
    cityText.textContent = "Modesto, CA";
    cityText.className = "pTxtStyles1"
    let currentWTxt = document.createElement('p')
    currentWTxt.textContent = "CurrentWeathers";
    currentWTxt.className = "pTxtStyles1";


    weatherCol1.appendChild(cityText);
    weatherCol2.appendChild(currentWTxt);
}

WeatherURL();
ForeCastURL();
WeatherColElements();