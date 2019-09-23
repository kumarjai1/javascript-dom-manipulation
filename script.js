let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();



  // Do all of your work below in the following functions
  // DON'T FORGET TO CALL THE FUNCTIONS TO SEE YOUR WORK!


// Accessing DOM Elements (Querying)

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Change the text of the title to something shorter.
  function shortenPageTitle() {
    document.getElementById('main-title').innerText = "Welcome to Dom's Adventures"
  }
  shortenPageTitle();


  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  function changeBodyBgColor() {
    document.querySelector('body').style.backgroundColor = "#B2DFDB";
  }
  changeBodyBgColor();


  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  function removeLastFavoriteThing() {
    let favList = document.getElementById('favorite-things');
    //console.log(favList.lastElementChild);
    favList.removeChild(favList.lastElementChild)
  }
  removeLastFavoriteThing();


  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem.
  // Remember you might have to iterate through the list of elements
  function makeSpecialTitlesBigger() {
    let specialTitles = document.querySelectorAll('.special-title');
    //console.log(specialTitles.length);
    for (let i = 0; i < specialTitles.length; i++) {
      specialTitles[i].style.fontSize = '2rem';
    }
  }
  makeSpecialTitlesBigger();


  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  function RemoveChicagoRace() {
    let pastRaces = document.getElementById('past-races');
    let pastRacesList = pastRaces.children;
    //console.log(pastRaces);
    
    for (let i = 0; i < pastRacesList.length; i++) {
      if (pastRacesList[i].innerText == 'Chicago') {
        //console.log(pastRacesList[i])
        pastRaces.removeChild(pastRacesList[i]);
      }
    }
  }
  RemoveChicagoRace();



// Creating New DOM Elements

  // Part 6
  // Let's add to DOM's  Past Races  list.
  // Create a new <li> element, change the new <li> text to the name of a city, and append it to the  Past Races  list.
  function addPastRace() {
    let newRaceCity = document.createElement('li');
    newRaceCity.innerText = "New York City";
    document.getElementById('past-races').appendChild(newRaceCity);
  }

  addPastRace();


  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text.
  // Think about what order you want to create the elements, and what order you want to append them in.
  function createNewBlogPost() {
    let newPost = document.createElement('div');
    let newH = document.createElement('h1');
    let newP = document.createElement('p');

    newH.innerText = "New York City";
    newP.innerText = "I DROVE THROUGH A BUSY TIMES SQUARE AND WON FROM A NASCAR CHAMPION!"

    document.querySelector('.main').appendChild(newPost);
    document.querySelector('.main').lastElementChild.appendChild(newH);
    document.querySelector('.main').lastElementChild.appendChild(newP);
    document.querySelector('.main').lastElementChild.classList.add('blog-post', 'purple');
    //document.querySelector('.main').lastElementChild.classList.add('purple');
  }

createNewBlogPost();




});
