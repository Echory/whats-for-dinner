var sides = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Mashed Potatoes',
'Summer Rolls',
'Garlic Mushrooms',
'Broccoli'
];

var mains = [
'Vegetable Lasagna',
'Pineapple Fried Rice',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'3 Bean Chili',
'Butternut Squash Soup',
'Chickpea Noodle Soup',
'Ramen',
'Empanadas',
'Pesto Pasta',
'Sheet Pan Fajitas',
'Margarita Pizza'
];

var desserts = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Funfetti Cake',
'Baklava',
'Apple Crumble',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Chocolate Croissants',
'Eclairs'
];

var foodResponse;
var favorites = [];

// QUERY SELECTORS
var letsCookBtn = document.querySelector('#lets-cook');
var cookpot = document.querySelector('#cookpot');
var viewFavoritesBtn = document.querySelector('#viewFav');
var favoritesPage = document.querySelector('.favorites-page');
var mainPage = document.querySelector('.main-body');
var homeBtn = document.querySelector('.home-btn');

//EVENT LISTENERS
letsCookBtn.addEventListener('click', showRecipe);
viewFavoritesBtn.addEventListener('click', viewFavorites);
homeBtn.addEventListener('click', goHome);

//FUNCTIONS
function showRecipe(event) {
  event.preventDefault();
  generateRecipe()
  document.getElementById("recipeResult").innerHTML = `<p class="should-make">You should make: <span class="food-response">${foodResponse}</span><button class="favorite-btn id="favoriteBtn" >Favorite &#128155</button></p>`;

  var favoriteBtn = document.querySelector('.favorite-btn');
  favoriteBtn.addEventListener('click', favoriteFood);
}

function generateRecipe() {
  var foodOption = document.querySelector('input[name="food"]:checked').value;
  if(foodOption === 'side') {
    foodResponse = sides[Math.floor(Math.random()*sides.length)];
  } else if(foodOption === 'main') {
    foodResponse = mains[Math.floor(Math.random()*mains.length)]
  } else if(foodOption === 'dessert') {
    foodResponse = desserts[Math.floor(Math.random()*desserts.length)]
  }
}

function favoriteFood() {
  favorites.push(foodResponse);
  renderData();
}

function renderData() {
  favoritesPage.innerHTML = ``
  for(var i = 0; i < favorites.length; i++) {
  document.querySelector('.favorites-page').innerHTML += `<p class="list-item">${favorites[i]}</p>`;

  var deleteSelector = document.querySelector('.list-item');
  deleteSelector.addEventListener('dblclick', deleteFav);
  }
}

function viewFavorites() {
  favoritesPage.classList.remove('hidden');
  mainPage.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  viewFavoritesBtn.classList.add('hidden');
}

function goHome() {
  favoritesPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
  homeBtn.classList.add('hidden');
  viewFavoritesBtn.classList.remove('hidden');
}

function deleteFav(event) {
  var foodToDelete = event.currentTarget.innerText
  for(var i = 0; i < favorites.length; i++) {
    if(favorites[i] === foodToDelete){
      favorites.splice(i, 1);
    }
  }
  renderData();
}

