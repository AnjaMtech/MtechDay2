let allChecklists;
if(JSON.parse(localStorage.getItem("localChecklist")) === null){
  console.log("creating new local storage");
  allChecklists = {
    cleaning: [
      {
        title: "Clean room",
        completed: false
      },
      {
        title: "Dishes",
        completed: false
      }
    ],
    petCare: [
      {
        title: "Clean hamster cage",
        completed: false
      },
      {
        title: "Feed dog",
        completed: false
      }
    ]
  };
  window.localStorage.setItem("localChecklist", JSON.stringify(allChecklists));
}

let currentChecklist;
let screenMode = "checklist";
//Name of current checklist;
let name;
//Number of current item when in edit or add screen
let itemNum;
allChecklists = JSON.parse(localStorage.getItem("localChecklist"));
//TEMP DEFAULT
name = "cleaning";
currentChecklist = allChecklists[name];
log();

//Setup
window.onload = function(){
  update();
  document.body.onkeypress = function(e){
    if(e.keyCode === 61){
      itemInfoScreen("add");
      console.log("plus")
    }

  }
  document.body.onkeyup = function(e){

    if(e.keyCode === 13){
      alert("enter")
    }
  }
}



function print(){
  $("#checklist-box").empty();
  if(screenMode === "checklist"){
    $("#checklist-box").append(`
      <div class="">
        <button type="button" name="button" onclick="clearCompleted()">clear</button>
        <button type="button" name="button" onclick="removeChecklist()">Delete Checklist</button>
      </div>
      <div id="items">
      </div>
      <div>
        <button type="button" name="button" id="plus-button" onclick="itemInfoScreen('add')"><span class="glyphicon glyphicon-plus"></button>
      </div>
    `);
    for(let i = 0; i < currentChecklist.length; i++){
      //Makes each list item
      $("#items").append(`
        <div class="item" id="item-num-${i}">
          <button type="button" name="button" class="remove icon-button" onclick="removeItem(${i})"><span class="glyphicon glyphicon-remove"></span></button>
          <button type="button" name="button" class="edit icon-button" onclick="itemInfoScreen('edit', ${i})"><span class="glyphicon glyphicon-edit"></span></button>
          <span>${currentChecklist[i].title}</span>
          <button type="button" name="button" class="complete" onclick="itemCompleted(${i})"><span class="glyphicon glyphicon-ok"></span></button>
        </div>
      `);
      if(currentChecklist[i].completed === true){
        $(`#item-num-${i}`).addClass("completed");
      }
    }
  }else if(screenMode === "addItem" || screenMode === "editItem"){
    $("#checklist-box").append(`
      <div id="item-info" onsubmit="infoScreenExit()">
        <input type="text" name="" value="" id="item-title">
      </div>
    `);
    if(screenMode === "editItem"){
      $("#item-info").append(
        `<button type="button" name="button" id="edit-button"">Edit</button>`
      )
    }else if(screenMode === "addItem"){
      $("#item-info").append(
        `<button type="button" name="button" id="add-button">Add</button>`
      )
    }else{
      console.log("ERROR, screenMode is not addItem or editItem");
    }
  }


  let listNames = Object.keys(allChecklists);
  $("#checklist-list").empty();
  for(let i=0; i<listNames.length; i++){
    $("#checklist-list").append(
      `<button type="button" name="button" onclick="changeChecklist('${listNames[i]}')">${listNames[i]}</button>`
    )
  }
  $("#checklist-list").append(
    `<div class="" action="" method="post" onsubmit="addChecklist()">
      <button type="button" name="button">Add checklist</button>
      <input type="text" name="" value="" id="new-checklist-input">
    </div>`
  )

}
function update(){
  allChecklists[name] = currentChecklist;
  window.localStorage.setItem("localChecklist", JSON.stringify(allChecklists));
  log();
  print();
}


function changeChecklist(input){
  name = input;
  currentChecklist = allChecklists[name];
  update();
  log();
}
function addChecklist(input){
  if(input === undefined){
    input = $("#new-checklist-input").val();
  }
  allChecklists[input] = [];
  name = input;
  changeChecklist(input);
  update();
}
function removeChecklist(){
  console.log("Work in Progress")
}

function log(){
  // console.log(`current checklists is ${name}`)
  // console.table(currentChecklist);
}

function addItem(title, num){
  if(num === undefined){
    currentChecklist.push({title: title, completed: false});
  }else if(typeof(num) === 'number'){//For editing items
    currentChecklist[num].title = title;
  }else{
    console.log(`ERROR num on addItem is not undefined or an integer`)
  }
  update();
}
function editItem(title, num){
  if(title === undefined){
    title = $("#item-title").val();
  }
  if(num === undefined){
    num = itemNum;
  }

  currentChecklist[num].title = title;
  update();
}
function removeItem(num){
   currentChecklist.splice(num, 1);
   update();
}
function itemCompleted(num){
  currentChecklist[num].completed = !currentChecklist[num].completed;
  update()
}
function clearCompleted(){
  for(let i = 0; i < currentChecklist.length; i++){
    if(currentChecklist[i].completed === true){
      currentChecklist.splice(i, 1);
      i--;
    }
  }
  update()
}

function floatAlert(message){
  $("#checklist-box").append(`${message}`)
}

function itemInfoScreen(type, num){
  if(type === "edit"){
    itemNum = num;
    screenMode = "editItem";
  }else if(type === "add"){
    screenMode = "addItem";
  }
  print();
  $("#item-title").focus();

}
function infoScreenExit(){
  if(screenMode === "addItem"){
    addItem($("#item-title").val());
  }else if (screenMode === "editItem"){
    editItem();
  }

  screenMode = "checklist";
  print();
}
