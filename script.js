
var hero = document.querySelector('.hero');

hero.addEventListener('click', function() {
  hero.classList.add('pt-page-moveToTop');
});


var mainNav = document.querySelectorAll('li');

for (i = 0; i < mainNav.length; i++) {
	mainNav[i].addEventListener('click', function(){
		document.body.style.background = 'red'	
	})
}


var myButton = document.querySelector('button');





myButton.addEventListener('click', function() {
	document.body.style.background = 'red';
})

