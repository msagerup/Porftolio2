
var hero = document.querySelector('.hero');
var intro = document.querySelector('.site_content');


var mainLinksOne = document.querySelectorAll('li')[0];
var mainLinksTwo = document.querySelectorAll('li')[1];
var mainLinksThree = document.querySelectorAll('li')[2];

hero.addEventListener('click', function() {
  hero.classList.add('pt-page-moveToTop');
  setTimeout(function() {
  	hero.style.visibility = 'hidden'
  },1000)
});


mainLinksOne.addEventListener('click', function(){
	intro.style.visibility = 'hidden';
})


mainLinksOne.addEventListener('click', function(){
	document.body.style.background = 'green'
});

mainLinksTwo.addEventListener('click', function(){
	document.body.style.background = 'yellow'
});

mainLinksThree.addEventListener('click', function(){
	document.body.style.background = 'red'
});


var myButton = document.querySelector('button');





myButton.addEventListener('click', function() {
	document.body.style.background = 'red';
})

