//console.log("JS file is connected to HTML! Woo!")

//if (cardTwo === cardFour) {
//	alert("You found a match!");
//} else if (cardOne === cardThree) {
//	alert("You found a match!");
//} else {
	//alert("Sorry, try again.");
//} (Use for later)

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');
function createCards() {
for (var i=0; i < cards.length; i++) {
var cardElement = document.createElement('div');
	cardElement.className = 'card';
	board.appendChild(cardElement);
	cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
	
 }

} 


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="king-28252_1280.png" height="200px" width= "150px">'; // king
	} else {
		this.innerHTML = '<img src="queen-28253_1280.png" height="200px" width= "150px">'; //queen
	}
	 if (cardsInPlay.length === 2) {
	 isMatch(cardsInPlay);
	 cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else if (cards[2] === cards[3]) {
		alert("You've found a match!");
	}else {
		alert("Sorry, try again.");
	}
}


createCards();