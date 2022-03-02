// let checklist = [{checklist1:[{title: "clean",completed: false}]}
let myChecklists = {
  c1: [
    {
      title: "Clean room",
      completed: false
    },
    {
      title: "Feed dog"
    }
  ],
  c2: []
};
let screenMode = "checklist";

//Puts checklist on screen
function printChecklist(){
  const currentChecklist = myChecklists.c1;
  //Clears so it can be appended
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
  //Setup checklist box for checklist screenMode


}

if(JSON.parse(localStorage.getItem("myChecklist")) === null){
  window.localStorage.setItem("myChecklist", JSON.stringify(checklist));
}

window.onload = function(){
  checklist = JSON.parse(localStorage.getItem("myChecklist"));
  printChecklist();
  // floatAlert("Task Completed");

}
function update(){
  window.localStorage.setItem("myChecklist", JSON.stringify(checklist));
  printChecklist();
}

function addItem(title){
  checklist.push({title: title, completed: false});
  update();
}
function removeItem(num){
   checklist.splice(num, 1);
   update();
}
function itemCompleted(num){
  // checklist.splice(num, 1);
  // $(`#item-num-${num}`).children("span").addClass("underline");
  // $(`#item-num-${num}`).children("span").css("background-color", "red");
  // $(`#item-num-${num}`).css("background-color", "red");
  checklist[num].completed = !checklist[num].completed;
  // (checklist[num].completed) ? checklist[num].completed = false : "You are not eligible to vote yet";
  update()
  // floatAlert();
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
  printChecklist();
  $("#item-title").focus();
  // addItem("mytitle");
}
function pressedAddButton(){
  addItem($("#item-title").val());
  screenMode = "checklist";
  printChecklist();
}
function testFunc(){
  alert("triggered")
}
// object.onload = function(){myScript};
