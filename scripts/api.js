

function WeatherURL(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8583ce53372dd01d973d6770d5ebcad9&units=imperial")
    .then(response => response.json()
    ).then(data => console.log(data))
}
function ForeCastURL(){
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=8583ce53372dd01d973d6770d5ebcad9&units=imperial")
    .then(response => response.json()
    ).then(data => console.log(data))
}

export {WeatherURL, ForeCastURL}