//-----WIP
let animalList = [];
let currentSelection;
function startup(){
  currentSelection = 0;
  if(JSON.parse(localStorage.getItem("localAnimalList")) === null){
    let test = "content"
    saveToLocal();
  }else{
    animalList = JSON.parse(localStorage.getItem("localAnimalList"));
  }
}
startup();



window.onload = function(){
  update();
}
//-----Basic funcions
function update(){
  saveToLocal();
  print();
}
function saveToLocal(){
  window.localStorage.setItem("localAnimalList", JSON.stringify(animalList));
}
