//console.log("JS file is connected to HTML! Woo!")
//var cardOne = "king";
//var cardTwo = "queen";
//var cardFour = "queen";

//if (cardTwo === cardFour) {
//	alert("You found a match!");
//} else if (cardOne === cardThree) {
//	alert("You found a match!");
//} else {
	//alert("Sorry, try again.");
//}

var cards = ['queen', 'king', 'queen', 'king'];

var board = document.getElementById('game-board');
function createCards() {
for (var i=0; i < cards.length; i++) {
var cardSeries = document.createElement('div');
	cardSeries.className = 'card';
	board.appendChild(cardSeries);
	
 }

} 

createCards();
