import { WeatherURL, ForeCastURL } from "./api.js";

let weatherCol1 = document.getElementById('weatherCol1');
let weatherCol2 = document.getElementById('weatherCol2');
let weatherCol3 = document.getElementById('weatherCol3');
let weatherCol4 = document.getElementById('weatherCol4');

function WeatherColElements(){
    let cityText = document.createElement('p');
    cityText.textContent = "Modesto, CA";
    cityText.className = "pTxtStyles1"
    let currentWTxt = document.createElement('p')
    currentWTxt.textContent = "CurrentWeather";
    currentWTxt.className = "pTxtStyles1";
    let timeTxt1 = document.createElement('p')
    timeTxt1.textContent = "2:20PM";
    timeTxt1.className = "pTxtStyles2";
    let degreeLgTxt = document.createElement('p')
    degreeLgTxt.textContent = "53";
    degreeLgTxt.className = "pTxtStyles3";


    weatherCol1.appendChild(cityText);
    weatherCol2.appendChild(currentWTxt);
    weatherCol2.appendChild(timeTxt1);
    weatherCol4.appendChild(degreeLgTxt);
}

WeatherURL();
ForeCastURL();
WeatherColElements();