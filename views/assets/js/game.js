var images = [
    '00.jpg','01.jpg','02.jpg','03.jpg','04.jpg',
    '10.jpg','11.jpg','12.jpg','13.jpg','14.jpg',
    '20.jpg','21.jpg','22.jpg','23.jpg','24.jpg',
    // '30.jpg','31.jpg','32.jpg',
    // '33.jpg','34.jpg','40.jpg',
    // '40.jpg','41.jpg','42.jpg','43.jpg','44.jpg',
    // '50.jpg','51.jpg','52.jpg','53.jpg','54.jpg',
];

// Corresponding names for each image in the same order
var names = [
    'Goku', 'Vegeta', 'Broly', 'FRIEZA', 'Gohan', 'Naruto', 
    'Sasuke', 'Kakashi', 'Itachi', 'Boruto', 'Luffy', 'Zoro', 
    'Sanji', 'Sabo', 'Kaido', 'Deku', 'Todoroki', 'All might', 
    'ochaco', 'Bakugo', 'Gojo'
];

// Select the container elements
var cards = document.querySelector('.cards');
var yourCard = document.querySelector('.yourCard');

// Loop through the images and names to create the cards
images.forEach((img, index) => {
    var person = document.createElement('div');
    person.innerHTML = `<img src="./assets/imgs/people/${img}"></img><br><h2>${names[index]}</h2>`;
    person.classList.add('card');
    cards.appendChild(person);
});

// Pick a random person to guess
var randomNumber = Math.floor(Math.random() * images.length);
var personToGuess = document.createElement('div');
personToGuess.innerHTML = `<img src="./assets/imgs/people/${images[randomNumber]}"></img><br><h1>${names[randomNumber]}</h1>`;
yourCard.appendChild(personToGuess);

// Add hover and click events to the cards
document.querySelectorAll('.card').forEach((element) => {
    element.onmouseenter = function () {
        element.classList.add('hover');
    }
    element.onmouseleave = function () {
        element.classList.remove('hover');
    }
    element.onclick = function () {
        element.style.transition = 'all 0s';
        element.style.visibility = 'hidden';
    }
});
