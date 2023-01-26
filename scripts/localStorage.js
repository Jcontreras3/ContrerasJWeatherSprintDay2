function saveToLocalStorage(cityName){
    let fav = GettingLocalStorage();

    fav.push(cityName);

    localStorage.setItem('Fav', JSON.stringify(fav))
}


function GettingLocalStorage(){
    let localStoragData = localStorage.getItem('Fav');
    if(localStoragData == null){
        return [];
    }

    return JSON.parse(localStoragData);
}

function RemoveLocalItems(cityName){
    let fav = GettingLocalStorage();


    let nameI = fav.indexOf(cityName);

    fav,splice(nameI, 1);


    localStorage.setItem('fav', JSON.stringify(fav));
}

export {saveToLocalStorage, GettingLocalStorage, RemoveLocalItems}