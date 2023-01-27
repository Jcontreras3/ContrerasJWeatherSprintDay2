import { WeatherURL, ForeCastURL } from "./api.js";
import { GetLocation } from "./geoLocation.js";
import { saveToLocalStorage, GettingLocalStorage, RemoveLocalItems } from "./localStorage.js";
let weatherCol1 = document.getElementById('weatherCol1');
let weatherCol2 = document.getElementById('weatherCol2');
let weatherCol3 = document.getElementById('weatherCol3');
let weatherCol4 = document.getElementById('weatherCol4');
let searchBarI = document.getElementById('searchBarI');
let searchSubBtn = document.getElementById('searchSubBtn');
let injectHereCanvas = document.getElementById('injectHereCanvas');
let favorBtn = document.getElementById('favorBtn');
let cityText;
let currentWTxt;
let timeTxt1;
let degreeLgTxt;

let day1 = document.getElementById('day1');
let day2 = document.getElementById('day2');
let day3 = document.getElementById('day3');
let day4 = document.getElementById('day4');
let day5 = document.getElementById('day5');
ForeCastURL();
searchSubBtn.addEventListener('click', function(){
    WeatherURL(searchBarI.value);
    ForeCastURL(searchBarI.value);
    
    weatherCol1.removeChild(cityText)
    weatherCol2.removeChild(currentWTxt);
    weatherCol2.removeChild(timeTxt1);
    weatherCol4.removeChild(degreeLgTxt);
})

searchBarI.addEventListener('keypress', function(event){
    if(event.key == "Enter"){searchSubBtn.click();}
})

// favorBtn.addEventListener('click', function(){
//     let localStorageData = GettingLocalStorage();
//     console.log(localStorageData);
//     FavoritedSavedItems();
// })



function WeatherColElements(weatherData){
   cityText = document.createElement('p');
    cityText.textContent = weatherData.name;
    cityText.className = "pTxtStyles1"
     currentWTxt = document.createElement('p')
    currentWTxt.textContent = "CurrentWeather";
    currentWTxt.className = "pTxtStyles1";
     timeTxt1 = document.createElement('p')
    timeTxt1.textContent = weatherData.time;
    timeTxt1.className = "pTxtStyles2";
     degreeLgTxt = document.createElement('p')
    degreeLgTxt.textContent = weatherData.main.temp + "°F";
    degreeLgTxt.className = "pTxtStyles3";


    weatherCol1.appendChild(cityText);
    weatherCol2.appendChild(currentWTxt);
    weatherCol2.appendChild(timeTxt1);
    weatherCol4.appendChild(degreeLgTxt);
}

function ForecastElements(forecastData){
    day1.textContent = forecastData.list[0].main.temp + "°F";
    day2.textContent = forecastData.list[2].main.temp + "°F";
    day3.textContent = forecastData.list[3].main.temp + "°F";
    day4.textContent = forecastData.list[4].main.temp + "°F";
    day5.textContent = forecastData.list[5].main.temp + "°F";
}




function FavoritedSavedItems(){
    let fav = GettingLocalStorage();

    fav.map((nameCity) => {
       let storageBtn = document.createElement('button')
        storageBtn.className = 'list-group-item list-group-item-action';
        storageBtn.textContent = 'placehoder'
    })

}




export {WeatherColElements, ForecastElements}