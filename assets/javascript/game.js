//naming variables
	//array for letter to be chosen by computer and guessed by user
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	//variable for chances remaining
	var chances = 10;
	//variable for wins
	var wins = 0;
	//variable for losses 
	var losses = 0;
	//variable for guesses thus far
	var guesses = [];

	//create function for onKeyUp
	document.onkeyup = function() {
		//names userGuess and sets to a string and sets to lower case
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);
		//names computerGuess and uses random math to select one index of letters array
		var computerGuess = letters[Math.floor(Math.random() * letters.length)];
		console.log(computerGuess);
		
	}


