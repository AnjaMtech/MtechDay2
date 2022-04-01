const horses = new AnimalList();
currentAnimal = 0;

window.onload = function(){
  // horses.addRandom();
  horses.add("Daisy", "tan", "chocolate", "black");
  horses.add("Winter", "white", "cyan", "white");
  update();


  $('input[type=radio][name=color-balance]').change(function() {
    // purr($('input[name="color-balance"]:checked').val(), "o");
    update();
    // purr(this.value, "o");
  });
}

function update(){
  displayList(horses.list);
  $(".clickable").click(function(e){
    let myID = $(e.target).attr("id").charAt(1) +$(e.target).attr("id").charAt(2);
    currentAnimal = parseInt(myID)
    displayAnimal("info-image", horses.list, currentAnimal);
  });
}
