
var el = document.querySelector('#page_scroller');
var moveValue = 0;

function moveInc () {
	moveValue += 100;
	return;
}


function move () {
	moveInc();
	var domNode = anime({
  targets: el,
  translateY: moveValue,
  easing: 'easeOutElastic',
  dalay: 1000
  
});
}



function stepMoves (){
	switch (pageViewer) {
		case 'homePage':
		
			move();
			break;
		case 'aboutPage':
			
			move();
			break;
		case 'workPage':
			
			move();
			break;
		case 'contactPage':

			move();
			break;
		default:
			// statements_def
			break;
	}
}


var pageViewer;


$('#cv').bind('mousewheel', function(e){
    setTimeout(function() { 
        if(e.originalEvent.wheelDelta / 120 < 0) {
        $('#cv').hide();
        $('#about').show();
        pageViewer = 'aboutPage';
        console.log(pageViewer);
        stepMoves();
        };
    }, 200);
});

$('#about').bind('mousewheel', function(e){
    setTimeout(function () {
        if(e.originalEvent.wheelDelta / 120 < 0) {
            $('#about').hide();
            $('#work').show();
            pageViewer = 'workPage';
            console.log(pageViewer);
            stepMoves();
           
        } else {
            $('#about').hide();
            $('#cv').show();
            pageViewer = 'homePage';
            console.log(pageViewer);
        };
    }, 200);
});


$('#work').bind('mousewheel', function(e){
    setTimeout(function () {
        if(e.originalEvent.wheelDelta / 120 < 0) {
            $('#work').hide();
            $('#contact').show();
            pageViewer = 'contactPage';
            console.log(pageViewer);
            stepMoves();
    
        } else {
            $('#work').hide();
            $('#about').show();
            pageViewer = 'aboutPage';
            console.log(pageViewer);
        };
    }, 200);
});

$('#contact').bind('mousewheel', function(e){
    setTimeout(function () {
        if(e.originalEvent.wheelDelta / 120 > 0) {
            $('#contact').hide();
            $('#work').show();
            pageViewer = 'workPage';
            console.log(pageViewer);
           
        };
    
    }, 200);
        
});





