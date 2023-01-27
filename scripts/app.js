import { WeatherURL, ForeCastURL } from './api.js';
import { GetLocation } from './geoLocation.js';
import {
  saveToLocalStorage,
  GettingLocalStorage,
  RemoveLocalItems,
} from './localStorage.js';
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
searchSubBtn.addEventListener('click', function () {
  WeatherURL(searchBarI.value);
  ForeCastURL(searchBarI.value);

  weatherCol1.removeChild(cityText);
  weatherCol2.removeChild(currentWTxt);
  weatherCol2.removeChild(timeTxt1);
  weatherCol4.removeChild(degreeLgTxt);

});

searchBarI.addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    searchSubBtn.click();
  }
});

// favorBtn.addEventListener('click', function(){
//     let localStorageData = GettingLocalStorage();
//     console.log(localStorageData);
//     FavoritedSavedItems();
// })

function WeatherColElements(weatherData) {
  cityText = document.createElement('p');
  cityText.textContent = weatherData.name;
  cityText.className = 'pTxtStyles1';
  currentWTxt = document.createElement('p');
  currentWTxt.textContent = 'CurrentWeather';
  currentWTxt.className = 'pTxtStyles1';
  timeTxt1 = document.createElement('p');
  timeTxt1.textContent = weatherData.time;
  timeTxt1.className = 'pTxtStyles2';
  degreeLgTxt = document.createElement('p');
  degreeLgTxt.textContent = weatherData.main.temp + '°F';
  degreeLgTxt.className = 'pTxtStyles3';

  let weatherType = weatherData.weather[0].main;
  let iconImgDiv = document.getElementById('iconImgDiv');
  let iconImgSrc;

  if (weatherType == 'Clear') {
    iconImgSrc = './assets/sun-thin.svg';
  } else if (weatherType == 'Clouds') {
    iconImgSrc = './assets/rainy-sharp.svg';
  } else if (weatherType == 'Drizzle') {
    iconImgSrc = './assets/sun-cloudy-fill.svg';
  } else if (weatherType == 'Rain') {
    iconImgSrc = './assets/sun-foggy-fill.svg';
  } else if (weatherType == 'Thunderstorm') {
    iconImgSrc = './assets/day-storm-showers.svg';
  } else if (weatherType == 'Snow') {
    iconImgSrc = './assets/cloud-snow-fill.svg';
  } else if (weatherType == 'Mist') {
    iconImgSrc = './assets/weather-mist.svg';
  } else if (weatherType == 'Smoke') {
    iconImgSrc = './assets/tornado-warning.svg';
  } else {
    iconImgSrc = './assets/cloud-hail.svg';
  }

  let iconImg = document.createElement('img');
  iconImg.className = 'sunIcon';
  iconImg.src = iconImgSrc;
  iconImgDiv.appendChild(iconImg);

  weatherCol1.appendChild(cityText);
  weatherCol2.appendChild(currentWTxt);
  weatherCol2.appendChild(timeTxt1);
  weatherCol4.appendChild(degreeLgTxt);
}

function ForecastElements(forecastData) {
  day1.textContent = forecastData.list[0].main.temp + '°F';
  day2.textContent = forecastData.list[2].main.temp + '°F';
  day3.textContent = forecastData.list[3].main.temp + '°F';
  day4.textContent = forecastData.list[4].main.temp + '°F';
  day5.textContent = forecastData.list[5].main.temp + '°F';


  let forecastType = forecastData.list[0].weather[0].main;
  let prpIcon1 = document.getElementById('prpIcon1');
  let prpIcon2 = document.getElementById('prpIcon2');
  let prpIcon3 = document.getElementById('prpIcon3');
  let prpIcon4 = document.getElementById('prpIcon4');
  let prpIcon5 = document.getElementById('prpIcon5');
  let iconImgSrc2;
  let iconImgSrc3;
  let iconImgSrc4;
  let iconImgSrc5;
  let iconImgSrc6;

  if (forecastType == 'Clear') {
    iconImgSrc2 = './assets/sun-thin.svg';
  } else if (forecastType == 'Clouds') {
    iconImgSrc2 = './assets/rainy-sharp.svg';
  } else if (forecastType == 'Drizzle') {
    iconImgSrc2 = './assets/sun-cloudy-fill.svg';
  } else if (forecastType == 'Rain') {
    iconImgSrc2 = './assets/sun-foggy-fill.svg';
  } else if (forecastType == 'Thunderstorm') {
    iconImgSrc2 = './assets/day-storm-showers.svg';
  } else if (forecastType == 'Snow') {
    iconImgSrc2 = './assets/cloud-snow-fill.svg';
  } else if (forecastType == 'Mist') {
    iconImgSrc2 = './assets/weather-mist.svg';
  } else if (forecastType == 'Smoke') {
    iconImgSrc2 = './assets/tornado-warning.svg';
  } else {
    iconImgSrc2 = './assets/cloud-hail.svg';
  }

  let iconImg2 = document.createElement('img');
  iconImg2.className = 'fiveIconClss';
  iconImg2.src = iconImgSrc2;

  console.log(iconImgSrc3);
  if (forecastType == 'Clear') {
    iconImgSrc3 = './assets/sun-thin.svg';
  } else if (forecastType == 'Clouds') {
    iconImgSrc3 = './assets/rainy-sharp.svg';
  } else if (forecastType == 'Drizzle') {
    iconImgSrc3 = './assets/sun-cloudy-fill.svg';
  } else if (forecastType == 'Rain') {
    iconImgSrc3 = './assets/sun-foggy-fill.svg';
  } else if (forecastType == 'Thunderstorm') {
    iconImgSrc3 = './assets/day-storm-showers.svg';
  } else if (forecastType == 'Snow') {
    iconImgSrc3 = './assets/cloud-snow-fill.svg';
  } else if (forecastType == 'Mist') {
    iconImgSrc3 = './assets/weather-mist.svg';
  } else if (forecastType == 'Smoke') {
    iconImgSrc3 = './assets/tornado-warning.svg';
  } else {
    iconImgSrc3 = './assets/cloud-hail.svg';
  }

  let iconImg3 = document.createElement('img');
  iconImg3.className = 'fiveIconClss';
  iconImg3.src = iconImgSrc3;


  if (forecastType == 'Clear') {
    iconImgSrc4 = './assets/sun-thin.svg';
  } else if (forecastType == 'Clouds') {
    iconImgSrc4 = './assets/rainy-sharp.svg';
  } else if (forecastType == 'Drizzle') {
    iconImgSrc4 = './assets/sun-cloudy-fill.svg';
  } else if (forecastType == 'Rain') {
    iconImgSrc4 = './assets/sun-foggy-fill.svg';
  } else if (forecastType == 'Thunderstorm') {
    iconImgSrc4 = './assets/day-storm-showers.svg';
  } else if (forecastType == 'Snow') {
    iconImgSrc4 = './assets/cloud-snow-fill.svg';
  } else if (forecastType == 'Mist') {
    iconImgSrc4 = './assets/weather-mist.svg';
  } else if (forecastType == 'Smoke') {
    iconImgSrc4 = './assets/tornado-warning.svg';
  } else {
    iconImgSrc4 = './assets/cloud-hail.svg';
  }

  let iconImg4 = document.createElement('img');
  iconImg4.className = 'fiveIconClss';
  iconImg4.src = iconImgSrc4;


  if (forecastType == 'Clear') {
    iconImgSrc5 = './assets/sun-thin.svg';
  } else if (forecastType == 'Clouds') {
    iconImgSrc5 = './assets/rainy-sharp.svg';
  } else if (forecastType == 'Drizzle') {
    iconImgSrc5 = './assets/sun-cloudy-fill.svg';
  } else if (forecastType == 'Rain') {
    iconImgSrc5 = './assets/sun-foggy-fill.svg';
  } else if (forecastType == 'Thunderstorm') {
    iconImgSrc5 = './assets/day-storm-showers.svg';
  } else if (forecastType == 'Snow') {
    iconImgSrc5 = './assets/cloud-snow-fill.svg';
  } else if (forecastType == 'Mist') {
    iconImgSrc5 = './assets/weather-mist.svg';
  } else if (forecastType == 'Smoke') {
    iconImgSrc5 = './assets/tornado-warning.svg';
  } else {
    iconImgSrc5 = './assets/cloud-hail.svg';
  }

  let iconImg5 = document.createElement('img');
  iconImg5.className = 'fiveIconClss';
  iconImg5.src = iconImgSrc5;


  if (forecastType == 'Clear') {
    iconImgSrc6 = './assets/sun-thin.svg';
  } else if (forecastType == 'Clouds') {
    iconImgSrc6 = './assets/rainy-sharp.svg';
  } else if (forecastType == 'Drizzle') {
    iconImgSrc6 = './assets/sun-cloudy-fill.svg';
  } else if (forecastType == 'Rain') {
    iconImgSrc6 = './assets/sun-foggy-fill.svg';
  } else if (forecastType == 'Thunderstorm') {
    iconImgSrc6 = './assets/day-storm-showers.svg';
  } else if (forecastType == 'Snow') {
    iconImgSrc6 = './assets/cloud-snow-fill.svg';
  } else if (forecastType == 'Mist') {
    iconImgSrc6 = './assets/weather-mist.svg';
  } else if (forecastType == 'Smoke') {
    iconImgSrc6 = './assets/tornado-warning.svg';
  } else {
    iconImgSrc6 = './assets/cloud-hail.svg';
  }

  let iconImg6 = document.createElement('img');
  iconImg6.className = 'fiveIconClss';
  iconImg6.src = iconImgSrc6;







  prpIcon1.appendChild(iconImg2);
  prpIcon2.appendChild(iconImg3);
  prpIcon3.appendChild(iconImg4);
  prpIcon4.appendChild(iconImg5);
  prpIcon5.appendChild(iconImg6);
}

// function FavoritedSavedItems(){
//     let fav = GettingLocalStorage();

//     fav.map((nameCity) => {
//        let storageBtn = document.createElement('button')
//         storageBtn.className = 'list-group-item list-group-item-action';
//         storageBtn.textContent = 'placehoder'
//     })

// }

export { WeatherColElements, ForecastElements };
