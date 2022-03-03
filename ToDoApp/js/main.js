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
let name;
allChecklists = JSON.parse(localStorage.getItem("localChecklist"));
//TEMP DEFAULT
name = "cleaning";
currentChecklist = allChecklists[name];
log();

//Setup
window.onload = function(){
  update();
  document.body.onkeypress = function(e){
    if(e.keyCode === 32){
      // changeChecklist("cleaning");
    }
    if(e.keyCode === 13){
      changeChecklist("petCare");
    }
  }
}



function print(){
  $("#checklist-box").empty();
  if(screenMode === "checklist"){
    $("#checklist-box").append(`
      <div class="">
        <button type="button" name="button" onclick="clearCompleted()">clear</button>
      </div>
      <div id="items">
      </div>
      <div>
        <button type="button" name="button" id="plus-button"><span class="glyphicon glyphicon-plus"></button>
      </div>
    `);
    for(let i = 0; i < currentChecklist.length; i++){
      //Makes each list item
      $("#items").append(`
        <div class="item" id="item-num-${i}">
          <button type="button" name="button" class="remove" onclick="removeItem(${i})"><span class="glyphicon glyphicon-remove"></span></button>
          <span>${currentChecklist[i].title}</span>
          <button type="button" name="button" class="complete" onclick="itemCompleted(${i})"><span class="glyphicon glyphicon-ok"></span></button>
        </div>
      `);
      if(currentChecklist[i].completed === true){
        $(`#item-num-${i}`).addClass("completed");
      }
    }
    document.getElementById("plus-button").addEventListener("click", pressedPlusButton);
  }else if(screenMode === "newitem"){
    $("#checklist-box").append(`
      <form class="" action="" method="post" onsubmit="pressedAddButton()">
        <input type="text" name="" value="" id="item-title">
        <button type="submit" name="button" id="add-button">Add</button>
      </form>
    `);
    // document.getElementById("add-button").addEventListener("click", pressedAddButton);
  }


  let listNames = Object.keys(allChecklists);
  // console.log(listNames.length);
  $("#checklist-list").empty();
  for(let i=0; i<listNames.length; i++){
    $("#checklist-list").append(
      `<button type="button" name="button" onclick="changeChecklist('${listNames[i]}')">${listNames[i]}</button>`
    )
  }
  $("#checklist-list").append(
    `<div class="">
      <button type="button" name="button">Add checklist</button>
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

function log(){
  console.log(`current checklists is ${name}`)
  // console.table(currentChecklist);
}
function title(code){
  console.log(`Current title is ${currentChecklist[0].title} at ---${code}`)
}

function addItem(title){
  currentChecklist.push({title: title, completed: false});
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
  for(let i = 0; i < checklist.length; i++){
    if(checklist[i].completed === true){
      checklist.splice(i, 1);
      i--;
    }
  }
  update()
}

function floatAlert(message){
  $("#checklist-box").append(`${message}`)
}

function pressedPlusButton(){
  screenMode = "newitem";
  print();
  $("#item-title").focus();
  // addItem("mytitle");
}
function pressedAddButton(){
  addItem($("#item-title").val());
  screenMode = "checklist";
  print();
}
