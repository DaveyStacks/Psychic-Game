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

	//names computerGuess and uses random math to select one index of letters array
	var computerGuess = letters[Math.floor(Math.random() * letters.length)];

	function newGame() {
		chances = 10;
		guesses =[];
		computerGuess = letters[Math.floor(Math.random() * letters.length)];
	}


	//create function for onKeyUp
	document.onkeyup = function() {
		//names userGuess and sets to a string and sets to lower case
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		guesses.push(userGuess);
		
		
		if(userGuess === computerGuess) {
			alert('You WIN!');
			wins++;
			newGame();
		}

		if(userGuess !== computerGuess) {
			chances--;
		}

		if(chances < 1) {
			alert('You Lose');
			losses++;
			newGame();
		}


		var html =
			"<p> Wins: " + wins + "</p>" +
			"<p> Losses: " + losses + "</p>" +
			"<p> Guesses Remaining: " + chances + "</p>"

			document.querySelector('#stats').innerHTML = html;

		var guessLog =
			"<p> Your guesses thus far...  " + guesses + " </p>"

			document.querySelector('#logger').innerHTML = guessLog;

		


	}


