const horses = new AnimalList();

window.onload = function(){
  // horses.addRandom();
  horses.add("Daisy", "polished gold");
  horses.add("Daisy", "brown");
  displayList(horses.list);
  // displayAnimal("info-image", "horse", horses.list[0]);
  // purr(horses.list, "o");

  $(".clickable").click(function(e){
    let myID = $(e.target).attr("id").charAt(1) +$(e.target).attr("id").charAt(2);
    myID = parseInt(myID)
    displayAnimal("info-image", "horse", horses.list[myID]);
  });
}
