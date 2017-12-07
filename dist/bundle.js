/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {




/*

RANDOM BACKGROUND COLOR FOR MODULS

*/ 

//document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(-90deg," + randomColors() + ", " + randomColors() +") fixed, transparent";

function randomColors () {
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256); 
	return "rgba(" + r + ", " + g + ", " + b + ",0.4 " + ")"
}


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


var cv1 = document.querySelector('#cv_1');
var cv2 = document.querySelector('#cv_2');
var cv3 = document.querySelector('#cv_3');

var cvContext = document.querySelector('#cv_context');
var cvSeperator = document.querySelectorAll('.cv_seperator');
var allCvList = document.querySelectorAll('.cvs');


// Content Object for CV's

var cvContent = {
    text: {
        FrontEnd : 'Full stack developer studying full time on JavaScript devlopment with Python',
        Paypal:    'Working as a Account Manager in Dublin',
        Symantec:  'Account Manager in Norway, working towards small to medium sized businesses in Norway Working in close partnership with Symantec\'s partner and Distributier\'s '
    }
}

cv1.addEventListener('mouseover', function () {
    cvContext.innerHTML = cvContent.text.FrontEnd;
});

cv2.addEventListener('mouseover', function () {
    cvContext.innerHTML = cvContent.text.Paypal;
});

cv3.addEventListener('mouseover', function () {
    cvContext.innerHTML = cvContent.text.Symantec;
});


function sep () {

        for (let i = 0; i < cvSeperator.length; i++) {
        cvSeperator[i].addEventListener('mouseover', function() {
            this.classList.add('cv_sepGrow')
        })
    }
}




for (let i = 0; i < allCvList.length; i++) {
    allCvList[i].addEventListener('mouseover', function () {
        // Change background color on hover
        this.classList.add('cv_highlight')
        
        // add color style on seperators
        
        sep()
        // add styling to cvContext

    })
}

for (let i = 0; i < allCvList.length; i++) {
    allCvList[i].addEventListener('mouseout', function () {
        this.classList.remove('cv_highlight')
       

    })
}

/*

I stede for look so vil dette fungere ? 

allCvList.addEventListener('mouseout', function(e) {
    e.target.style.color= 'blue';
})


*/

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


/***/ })
/******/ ]);