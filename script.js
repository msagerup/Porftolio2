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
    if(e.originalEvent.wheelDelta / 120 < 0) {
        $('#cv').hide();
        $('#about').show();
        setBackgroundColor()
      
    
    }

});

$('#about').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta / 120 < 0) {
        $('#about').hide();
        $('#work').show();
        setBackgroundColor()
        
    
    } else {
    	$('#about').hide();
    	$('#cv').show();
    	setBackgroundColor()
    }
    
});

$('#work').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta / 120 > 0) {
        $('#work').hide();
        $('#about').show();
        setBackgroundColor()
    }
    
});

function setBackgroundColor () {
	document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(-90deg," + randomColors() + ", " + randomColors() +") fixed, transparent";
}