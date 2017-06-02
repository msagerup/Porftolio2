var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var reset = document.querySelector('#reset');
var p1Display = document.querySelector('#p1_display');
var p2Display = document.querySelector('#p2_display');
var numInput = document.querySelector('input');
var p = document.querySelector('p');
var playingTo = document.querySelector('#playing_to');


var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener('click', function(){
	if (!gameOver) {
		p1Score ++;
		if (p1Score === winningScore) {
			gameOver = true;

		}
		if (p1Score === 5 ) {
		p1Display.classList.add('winner');
	}
	
	p1Display.textContent = p1Score;
	
	}
	
});

p2Button.addEventListener('click', function(){
	if (!gameOver) {
		p2Score ++;
		if (p2Score === winningScore) {
			gameOver = true;
		}
	}
	if (p2Score === 5 ) {
		p2Display.classList.add('winner');
	}


	p2Display.textContent = p2Score;
})

// Reset

reset.addEventListener('click', function() {
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Display.innerHTML  = 0;
	p2Display.innerHTML = 0;
	p2Display.classList.remove('winner');
	p1Display.classList.remove('winner');
});

numInput.addEventListener('change', function() {
	playingTo.textContent = numInput.value;
});