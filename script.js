/*

RANDOM BACKGROUND COLOR

*/ 

document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(-90deg," + randomColors() + ", " + randomColors() +") fixed, transparent";

function randomColors () {
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256); 
	return "rgba(" + r + ", " + g + ", " + b + ",0.2 " + ")"
}





$('#cv').bind('mousewheel', function(e){
    setTimeout(function() { 
        if(e.originalEvent.wheelDelta / 120 < 0) {
        $('#cv').hide();
        $('#about').show();
        setBackgroundColor()
        };
    }, 200);
});

$('#about').bind('mousewheel', function(e){
    setTimeout(function () {
        if(e.originalEvent.wheelDelta / 120 < 0) {
            $('#about').hide();
            $('#work').show();
            setBackgroundColor()
        
        } else {
            $('#about').hide();
            $('#cv').show();
            setBackgroundColor()
        };
    }, 200);
});


$('#work').bind('mousewheel', function(e){
    setTimeout(function () {
        if(e.originalEvent.wheelDelta / 120 < 0) {
            $('#work').hide();
            $('#contact').show();
            setBackgroundColor()
    
        } else {
            $('#work').hide();
            $('#about').show();
        };
    }, 200);
});

$('#contact').bind('mousewheel', function(e){
    setTimeout(function () {
        if(e.originalEvent.wheelDelta / 120 > 0) {
            $('#contact').hide();
            $('#work').show();
            setBackgroundColor()
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
