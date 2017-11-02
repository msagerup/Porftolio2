
// document.getElementById('work_websites_right');
// document.getElementById('code_bottom');


const growDownAni = anime({
  targets: '#work_projects_top',
  height: {
    value: '*=22.1',
    duration: 500,
    easing: 'easeInOutSine'
  },
  direction: 'alternate',
  autoplay: false,
  loop: false
});

const growUpAni = anime({
  targets: '#code_bottom',
  height: {
    value: '*=22.1',
    duration: 500,
    easing: 'easeInOutSine'
  },
  direction: 'alternate',
  autoplay: false,
  loop: false
});

const growSideAni = anime({
  targets: '#work_websites_right',
  width: {
    value: '*=35',
    duration: 500,
    easing: 'easeInOutSine'
  },
  direction: 'alternate',
  autoplay: false,
  loop: false
});



const menuTop = document.getElementById('work_projects_top');
const menuBottom = document.getElementById('code_bottom');
const menuRight = document.getElementById('work_websites_right');

menuTop.onclick = function(e) {
  if(menuBottom.style.height === "884px") {
    growUpAni.play();
    growUpAni.reverse();
  } else if (menuRight.style.width === "1400px") {
    growSideAni.play();
    growSideAni.reverse()
  }
  growDownAni.play();
  growDownAni.reverse();
}

menuBottom.onclick = function(e) { 
// Trigger retraction if top menu is down
  if(menuTop.style.height === "884px") {
    growDownAni.play();
    growDownAni.reverse();
  } else if (menuRight.style.width === "1400px") { 
    growSideAni.play();
    growSideAni.reverse();
  } 
  growUpAni.play();
  growUpAni.reverse()
}

menuRight.onclick = function(e) {
  if(menuBottom.style.height === "884px") {
    growUpAni.play();
    growUpAni.reverse(); 
  } else if (menuTop.style.height === "884px") {
    growDownAni.play();
    growDownAni.reverse()
  }
  growSideAni.play();
  growSideAni.reverse();
}




//const list = document.querySelector('.list_loader').getElementsByTagName('button');
//let projectsContent;
// const jsButton = list[0];
// const reactButton = list[1];
// const otherButton = list[2];



// const listContent = document.querySelector('#list_content');


// jsButton.addEventListener('click', function () {
//   popListContent(js_Prosjects)
// })

// reactButton.addEventListener('click', function () {
//   popListContent(react_Projects)
// })











// const js_Prosjects = [
//   {
//     name:         "Sea Food Resturant",
//     description:  "Sea Food resturant Application with React.Js, it keeps track of the resturant stock, and has the ability to easaly add new fish dishes to the menu",
//     GitHubUrl:    "www.github.com/sagerup",
//     live:         "www.sagerup.com/seafood",
//     imageURL:     "https://placeimg.com/300/200/any"
//   },
//   {
//     name:         "YouTube Clone",
//     description:  "Buildt a clone of Youtube, using React.Js",
//     GitHubUrl:    "www.github.com/sagerup/youtube",
//     live:         "www.sagerup.com/youtube",
//     imageURL:     "https://placeimg.com/300/200/any"
//   },
//   {
//     name:         "Color Guessing Game",
//     description:  "Built a Color guessing came with JavaScript Native",
//     GitHubUrl:    "www.github.com/sagerup/color",
//     live:         "www.sagerup.com/color",
//     imageURL:     "https://placeimg.com/300/200/any"
//   },
//   {
//     name:         "Color Guessing Game",
//     description:  "Built a Color guessing came with JavaScript Native",
//     GitHubUrl:    "www.github.com/sagerup/color",
//     live:         "www.sagerup.com/color",
//     imageURL:     "https://placeimg.com/300/200/any"
//   },
//   {
//     name:         "Color Guessing Game",
//     description:  "Built a Color guessing came with JavaScript Native",
//     GitHubUrl:    "www.github.com/sagerup/color",
//     live:         "www.sagerup.com/color",
//     imageURL:     "https://placeimg.com/300/200/any"
//   },
//   {
//     name:         "Color Guessing Game",
//     description:  "Built a Color guessing came with JavaScript Native",
//     GitHubUrl:    "www.github.com/sagerup/color",
//     live:         "www.sagerup.com/color",
//     imageURL:     "https://placeimg.com/300/200/any"
//   }
  


  
// ]


// const react_Projects = [
//   'React one',
//   'Ract Two',
//   'React Thre',
// ]




// function popListContent (list) {
//   listContent.innerHTML = "";
//   for (let i = 0; i < list.length; i++) {
//       // Populate and create Projects class
//     listContent.innerHTML += '<div class="projects">' + 
//                                 '<div class="projects_name"><p>' + list[i].name + '</p></div>' +
//                                 '<div class="projects_description"><p>' + list[i].description + '</p></div>' +
//                                 '<div class ="project_image">' + 
//                                   '<img src="' + list[i].imageURL + '"< />'





//                               '</div>';
//       // Define Projects classs


//   }
  

// }

