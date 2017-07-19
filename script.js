 

document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(-90deg," + randomColorOne() + ", " + randomColorTwo() +") fixed, transparent";

function randomColorOne () {
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256); 
	return "rgba(" + r + ", " + g + ", " + b + ",0.2 " + ")"
}

function randomColorTwo () {
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256); 
	
	return "rgba(" + r + ", " + g + ", " + b + ",0.2 " + ")"
}
