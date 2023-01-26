function success(position){
    console.log(position);
}

function error(error){
    console.warn(error);
}

let options = {
    enableHighAccuracy:true,
    timeout:5000,
    maximumAge:0
}

function GetLocation(){
    navigator.geolocation.getCurrentPosition(success, error, options)
}

export {GetLocation}