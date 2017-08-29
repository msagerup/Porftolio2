/*

RANDOM BACKGROUND COLOR

*/ 

//document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(-90deg," + randomColors() + ", " + randomColors() +") fixed, transparent";

function randomColors () {
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256); 
	return "rgba(" + r + ", " + g + ", " + b + ",0.4 " + ")"
}





$('#cv').bind('mousewheel', function(e){
    setTimeout(function() { 
        if(e.originalEvent.wheelDelta / 120 < 0) {
        $('#cv').hide();
        $('#about').show();
        checkSideBar();
        };
    }, 200);
});

$('#about').bind('mousewheel', function(e){
    setTimeout(function () {
        if(e.originalEvent.wheelDelta / 120 < 0) {
            $('#about').hide();
            $('#work').show();
            checkSideBar();
        
        } else {
            $('#about').hide();
            $('#cv').show();
            checkSideBar();
        };
    }, 200);
});


$('#work').bind('mousewheel', function(e){
    setTimeout(function () {
        if(e.originalEvent.wheelDelta / 120 < 0) {
            $('#work').hide();
            $('#contact').show();
            checkSideBar();
         
    
        } else {
            $('#work').hide();
            $('#about').show();
            checkSideBar();

        };
    }, 200);
});

$('#contact').bind('mousewheel', function(e){
    setTimeout(function () {
        if(e.originalEvent.wheelDelta / 120 > 0) {
            $('#contact').hide();
            $('#work').show();
           
        };
    
    }, 200);
        
});


function setBackgroundColor () {
	document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(-90deg," + randomColors() + ", " + randomColors() +") fixed, transparent";
}

// ----------------------------------------------------
// WORK SLIDER
// -----------------------------------------------------

$( "#left" ).click(function() {
  $( ".project_work:first" ).animate({
    'left': '-=680'
  }, {
    duration: 800,
    step: function( now, fx ){
      $( ".project_work:gt(0)" ).css( "left", now );
    }
  });
});

$( "#right" ).click(function() {
  $( ".project_work:first" ).animate({
    'left': '+=680'
  }, {
    duration: 800,
    step: function( now, fx ){
      $( ".project_work:gt(0)" ).css( "left", now );
    }
  });
});


 // MODALS 

 const modal = document.querySelector('.modal');
 const fb_clone = document.getElementById('fb_clone');
 const container = document.querySelector('.container-fluid');


 fb_clone.onclick = function () {
     modal.style.display = 'block'
     modal.style.background = randomColors()
     container.style.webkitFilter = "blur(5px)";
 }

 // Click outside Modal, closes it.

 window.onclick = function (e) {
     if (e.target === modal) {
        modal.style.display = 'none';
        container.style.webkitFilter = "blur(0px)";
     }
 }


var sideTab = document.querySelector('#side_writing');
var home = document.querySelector('#cv');
var about = document.querySelector('#about');
var work = document.querySelector('#work');
var contact = document.querySelector('#contact');

// CHANGE SIDE WRITING TAB

function checkSideBar () {
    if(about.style.display === 'block') {
        sideTab.innerHTML = 'About';
    } else if (work.style.display === 'block') {
        sideTab.innerHTML = 'Work';
    } else if (contact.style.display === 'block') {
        sideTab.innerHTML = 'Contact';
    } else if (home.syle.display === 'block') {
        sideTab.innerHTML = 'Home';
    }
} 


/*

const project_box = document.getElementsByClassName('project_work');
const project_box_slider = document.getElementsByClassName('description');


for (let i = 0; i < project_box.length; i++ ) {
    project_box[i].addEventListener('click', function () {
        console.log(this);
        return project_box_slider;

        
    });
}

*/