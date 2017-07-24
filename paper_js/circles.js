var randomRotate = Math.floor((Math.random() * 10) +1);

function randomSize () {
	var random = Math.floor((Math.random() * 200) +50);
	return random 
}

var square = [];


function onMouseDown(event) {
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var rectanglePath = new Path.Rectangle(point, randomSize(), randomSize());
	rectanglePath.strokeColor = 'white';
	square.push(rectanglePath);
		if (randomSize() < 60 ) {
			rectanglePath.fillColor = 'yellow';
		} 
		
	}

function onFrame(e) {
		for (var i = 0; i < square.length; i++) {
			square[i].rotate(3);
			circles[i].shear(.9);
			fillColor.hue += 1;
			}

		
		}	
		
	


/*function onFrame(event) {
	rectanglePath.rotate(randomRotate);
	
	
}
*/

	/*var sound = new Howl({
  	urls: ['assets/sounds/bubbles.mp3']
	}).play();


	var circles = [];

	var path = new Path.Rectangle({
		point: [75, 75],
		size: [75, 75],
		strokeColor: 'black';
		fillColor: 'red'
	})

	function onKeyDown(event) {
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random();
		var point = maxPoint * randomPoint;
		var newCircle = new Path.Circle(point, 200);
		newCircle.fillColor = 'yellow';
		circles.push(newCircle);
		}
		
	

	function onFrame(e) {
		for (var i = 0; i < circles.length; i++) {
			circles[i].fillColor.hue += 1;
			circles[i].scale(.9);
		}

		var 
		
		
	}

	*/