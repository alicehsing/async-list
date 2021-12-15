// import functions and grab DOM elements
import { getCandies, getPlants, getShows, getFoods } from './fetch-utils.js';
import { renderCandy, renderPlant, renderShows, renderFoods } from './render.utils.js';

const candyListContainer = document.querySelector('#candy-list-container');
const plantListContainer = document.querySelector('#plant-list-container');
const showListContainer = document.querySelector('#show-list-container')
;
const foodListContainer = document.querySelector('#food-list-container');
// set event listeners 
window.addEventListener('load', async() => {
  // fetch all candies from the supabase
    const candies = await getCandies();
  //loop through the candies array, render and append all candies to the container
    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyListContainer.append(candyEl);
    }
});

window.addEventListener('load', async() => {
    const plants = await getPlants();
    for (let plant of plants) {
        const plantEl = renderPlant(plant);
        plantListContainer.append(plantEl);
    }
});

window.addEventListener('load', async() => {
    const shows = await getShows();
    for (let show of shows) {
        const showEl = renderShows(show);
        showListContainer.append(showEl);
    }
});

window.addEventListener('load', async() => {
    const foods = await getFoods();
    for (let food of foods) {
        const foodEl = renderFoods(food);
        foodListContainer.append(foodEl);
    }
});