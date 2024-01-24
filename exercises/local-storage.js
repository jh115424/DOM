/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

localStorage.setItem('favorites', 'light');

const theme = localStorage.getItem('myFavorites');

const container = document.querySelector('cards-container');

localStorage.removeItem('myFavorites');
localStorage.clear();

localStorage.setItem('favorites', 'light');

const newItem = 'light';

let storageData = localStorage.getItem('favorites');

storageData += `,${newItem}`;

localStorage.setItem('favorites', storageData);

const itemToDelete = 'light';

const storageArr = localStorage.getItem('favorites').split(' ');

storageArr.splice(storageArr.indexOf(itemToDelete), 1).join(',');

localStorage.setItem('favorites', storageArr);


const data = {
    item: [1, 2, 3, 4, 5]
}

localStorage.setItem('favorites', JSON.stringify(data));

const storageFavData = localStorage.getItem('favorites');

const updatedData = JSON.parse(storageFavData);
console.log(updatedData);


updatedData.items = data.item.filter(item => item!== 3);
localStorage.setItem('favorites', JSON.stringify(updatedData));



document.addEventListener('click', (event) => {

  const item = event.target;

  if (item.id != 'favorite') {

    if (item.style.backgroundColor === 'white') {

      item.style.backgroundColor = 'red';

      localStorage.setItem('favorites', item.id);

    } else {

      item.style.backgroundColor = 'white';

      localStorage.removeItem('favorites', item.id);

    }

  }

})

/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...






// const container = document.querySelector('cards-container');

// function setRedBackground(id) {
//   const item = document.getElementById(id);
//   item.style.backgroundColor = 'red';
// }
// console.log('setRedBackground', container);

// function addToFavorites(id) {
//   localStorage.setItem('myFavorites', id);
// }

// function removeFromFavorites(id) {
//   localStorage.removeItem('myFavorites', id);
// }