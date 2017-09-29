// Refresh button
refreshBtn = document.getElementById("refresh-btn")
refreshBtn.addEventListener("click", function refreshPg() {
	location.reload();
});

// Intialize variables
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var guessList = [];

var guessCount = document.getElementById("guess-count");
var guessHistory = document.getElementById("guess-history");
var winWrite = document.getElementById("wins");
var lossWrite = document.getElementById("losses");
guessCount.innerHTML = guessesLeft;

function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
};
var theLetter = randLetter()

document.onkeydown = function(event) {
	var userKey = event.key;
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		userKey = (event.key).toLowerCase();

		//if they guess the right letter
		if (userKey == theLetter) {
			alert("You won!");
			winCount++;
			winWrite.innerHTML = winCount;
			guessList = [];
			theLetter = randLetter();
			guessesLeft = 9;
			guessCount.innerHTML = guessesLeft;
			guessHistory.innerHTML = "-";
		} 
	 	else {
	 		// On the first guess
			if (guessList.length == 0) {
				guessList.push(userKey);
				guessHistory.innerHTML = guessList;
				guessesLeft--;
				guessCount.innerHTML = guessesLeft;
			}
			// More chances
			else if (guessList.length < 8) {
				guessList.push(userKey);
				guessHistory.innerHTML = guessList.join(', ');
				guessesLeft--;
				guessCount.innerHTML = guessesLeft;
			} 
			// Player looses
			else if (guessList.length == 8) {
				guessList.push(userKey);
				guessHistory.innerHTML = guessList.join(', ');
				guessesLeft--;
				guessCount.innerHTML = guessesLeft;

				alert("You lost!");
				lossCount++;
				lossWrite.innerHTML = lossCount;
				guessList = [];
				guessHistory.innerHTML = guessList;
				theLetter = randLetter();
				guessesLeft = 9;
				guessCount.innerHTML = guessesLeft;
				guessHistory.innerHTML = "-";
			}
		}
	}
};