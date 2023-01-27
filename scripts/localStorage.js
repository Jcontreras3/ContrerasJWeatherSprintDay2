function saveToLocalStorage(cityName){
    let fav = GettingLocalStorage();

    fav.push(cityName);

    localStorage.setItem('Fav', JSON.stringify(fav))
}


function GettingLocalStorage(){
    let localStorageData = localStorage.getItem('Fav');
    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

function RemoveLocalItems(cityName){
    let fav = GettingLocalStorage();


    let nameI = fav.indexOf(cityName);

    fav,splice(nameI, 1);


    localStorage.setItem('fav', JSON.stringify(fav));
}

export {saveToLocalStorage, GettingLocalStorage, RemoveLocalItems}