var list = document.querySelector('.list_loader').getElementsByTagName('button');
var jsButton = list[0];
var reactButton = list[1];
var otherButton = list[2];

var listContent = document.querySelector('#list_content');



var js_Prosjects = [
  'JavaScript one',
  'JavaScript Two',
  'JavaScript Three'
]


var react_Projects = [
  'React one',
  'Ract Two',
  'React Thre',
]

function popListContent (list) {
  
  for (var i = 0; i < list.length; i++) {
    listContent.innerHTML += '<div class="projects">' + list[i] + '</div>';

  }
  

}

jsButton.addEventListener('click', function () {
  popListContent(js_Prosjects)
})

reactButton.addEventListener('click', function () {
  popListContent(react_Projects)
})

