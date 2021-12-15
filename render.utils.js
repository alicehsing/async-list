export function renderCandy(candyData) {
    const div = document.createElement('div');
    const pName = document.createElement('p');
    const pTexture = document.createElement('p');
    const pSugarLevel = document.createElement('p');

    div.classList.add('candy-item');
    pName.textContent = candyData.name;
    pTexture.textContent = candyData.texture;
    pSugarLevel.textContent = candyData.sugar_level;

    div.append(pName, pTexture, pSugarLevel);
    return div;
}

export function renderPlant(plantData) {
    const div = document.createElement('div');
    const pName = document.createElement('p');
    const pSun = document.createElement('p');
    const pSoil = document.createElement('p');
    const pPH = document.createElement('p');
    const img = document.createElement('img');

    div.classList.add('plant-item');
    img.classList.add('plant-img');
    pName.textContent = `name: ${plantData.name}`;
    pSun.textContent = `🔆 : ${plantData.sun_exposure}`;
    pSoil.textContent = `soil type: ${plantData.soil_type}`;
    pPH.textContent = `pH Level: ${plantData.soil_PH}`;
    img.src = plantData.image;

    div.append(pName, pSun, pSoil, pPH, img);
    return div;
}

export function renderShows(showData) {
    const div = document.createElement('div');
    const pName = document.createElement('p');
    const pType = document.createElement('p');
    const pHour = document.createElement('p');
    const pDate = document.createElement('p');
    const pSeason = document.createElement('p');

    div.classList.add('show-item');
    pName.textContent = `name: ${showData.name}`;
    pType.textContent = `Type: ${showData.type}`;
    pHour.textContent = `watched hours: ${showData.watched_hours}`;
    pDate.textContent = `Launch Date: ${showData.launch_date}`;
    pSeason.textContent = `No. of Seasons: ${showData.number_of_season}`;

    div.append(pName, pType, pHour, pDate, pSeason);
    return div;
}

export function renderFoods(foodData) {
    const div = document.createElement('div');
    const pName = document.createElement('p');
    const pType = document.createElement('p');
    const pSpicy = document.createElement('p');
    const img = document.createElement('img');


    div.classList.add('food-item');
    img.classList.add('food-img');
    pName.textContent = `name: ${foodData.name}`;
    pType.textContent = `Type: ${foodData.cuisine_type}`;
    pSpicy.textContent = `spicy level: ${foodData.spicy_level}`;
    img.src = foodData.image;

    div.append(pName, pType, pSpicy, img);
    return div;
}