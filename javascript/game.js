// Refresh button
refreshBtn = document.getElementById("refresh-btn")
refreshBtn.addEventListener("click", function refreshPg() {
	location.reload();
});

// Intialize variables
var winCount = 0;
var lossCount = 0;
var guessesLeft = 8;
var guessList = [];

var guessCount = document.getElementById("guess-count");
var guessHistory = document.getElementById("guess-history");
var winWrite = document.getElementById("wins");
var lossWrite = document.getElementById("losses");

function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
};
var theLetter = randLetter()
console.log("before keydown: ", theLetter)

document.onkeydown = function(event) {
	var userKey = event.key;
	console.log("after keydown: ", theLetter)
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		userKey = (event.key).toLowerCase();
		if (userKey == theLetter) {
			alert("You won!");
			winCount++;
			winWrite.innerHTML = winCount;
			guessList = [];
			theLetter = randLetter();
			console.log(theLetter);
			guessesLeft = 8;
			guessCount.innerHTML = guessesLeft;
			guessHistory.innerHTML = "-";
		} else if (guessList.length == 0) {
			guessList.push(userKey);
			guessHistory.innerHTML = guessList;
			guessesLeft = 8;
			guessCount.innerHTML = guessesLeft;
		} else if (guessList.length <= 8) {
			guessList.push(userKey);
			guessHistory.innerHTML = guessList.join(', ');
			guessesLeft--;
			guessCount.innerHTML = guessesLeft;
		} else if (guessList.Length = 9) {
			guessList = [];
			var theLetter = randLetter();
			console.log(theLetter);
			guessList.push(userKey);
			guessHistory.innerHTML = guessList;
			guessesLeft = 8;
			guessCount.innerHTML = guessesLeft;
		};
	};
};