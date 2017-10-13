const list = document.querySelector('.list_loader').getElementsByTagName('button');
let projectsContent;
const jsButton = list[0];
const reactButton = list[1];
const otherButton = list[2];

const listContent = document.querySelector('#list_content');


jsButton.addEventListener('click', function () {
  popListContent(js_Prosjects)
})

reactButton.addEventListener('click', function () {
  popListContent(react_Projects)
})





const js_Prosjects = [
  {
    name:         "Sea Food Resturant",
    description:  "Sea Food resturant Application with React.Js, it keeps track of the resturant stock, and has the ability to easaly add new fish dishes to the menu",
    GitHubUrl:    "www.github.com/sagerup",
    live:         "www.sagerup.com/seafood",
    imageURL:     "https://placeimg.com/300/200/any"
  },
  {
    name:         "YouTube Clone",
    description:  "Buildt a clone of Youtube, using React.Js",
    GitHubUrl:    "www.github.com/sagerup/youtube",
    live:         "www.sagerup.com/youtube",
    imageURL:     "https://placeimg.com/300/200/any"
  },
  {
    name:         "Color Guessing Game",
    description:  "Built a Color guessing came with JavaScript Native",
    GitHubUrl:    "www.github.com/sagerup/color",
    live:         "www.sagerup.com/color",
    imageURL:     "https://placeimg.com/300/200/any"
  },
  {
    name:         "Color Guessing Game",
    description:  "Built a Color guessing came with JavaScript Native",
    GitHubUrl:    "www.github.com/sagerup/color",
    live:         "www.sagerup.com/color",
    imageURL:     "https://placeimg.com/300/200/any"
  },
  {
    name:         "Color Guessing Game",
    description:  "Built a Color guessing came with JavaScript Native",
    GitHubUrl:    "www.github.com/sagerup/color",
    live:         "www.sagerup.com/color",
    imageURL:     "https://placeimg.com/300/200/any"
  },
  {
    name:         "Color Guessing Game",
    description:  "Built a Color guessing came with JavaScript Native",
    GitHubUrl:    "www.github.com/sagerup/color",
    live:         "www.sagerup.com/color",
    imageURL:     "https://placeimg.com/300/200/any"
  }
  


  
]


const react_Projects = [
  'React one',
  'Ract Two',
  'React Thre',
]




function popListContent (list) {
  listContent.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
      // Populate and create Projects class
    listContent.innerHTML += '<div class="projects">' + 
                                '<div class="projects_name">' + list[i].name + '</div>' +
                                '<div class="projects_description">' + list[i].description + '</div>' +
                                '<div class ="project_image">' + 
                                  '<img src="' + list[i].imageURL + '"< />'





                              '</div>';
      // Define Projects class


  }
  

}

