
var hero = document.querySelector('.hero');
var intro = document.querySelector('.site_content');


var mainLinksOne = document.querySelector('.work_link');
var mainLinksTwo = document.querySelector('.project_link');
var mainLinksThree = document.querySelector('.contact_link');

hero.addEventListener('click', function() {
  hero.classList.add('pt-page-moveToTop');
  setTimeout(function() {
  	hero.style.visibility = 'hidden'
  },1000)
});


mainLinksOne.addEventListener('click', function(){
	intro.style.visibility = 'hidden';
})




var myButton = document.querySelector('button');





myButton.addEventListener('click', function() {
	document.body.style.background = 'red';
})

