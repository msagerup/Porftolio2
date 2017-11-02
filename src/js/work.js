
// document.getElementById('work_websites_right');
// document.getElementById('code_bottom');

function player() {
  var growDownAni = anime({
  targets: '#work_projects_top',
  translateX: 250,
  duration: 2000,
  delay: function(el, i, l) { return i * 200; }
});
}



document.getElementById('work_projects_top').onclick = function() {
  player();
  growDownAni.play();
  growDownAni.reverse();
}



To make a variable calculated in function A visible in function B, you have three choices:

make it a global,
make it an object property, or
pass it as a parameter when calling B from A.
If your program is fairly small then globals are not so bad. Otherwise I would consider using the third method:

function A()
{
    var rand_num = calculate_random_number();
    B(rand_num);
}

function B(r)
{
    use_rand_num(r);
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

