let colorNames = [
  "brown",
  "yellow",
  "rose",
  "cyan",
  "white",
  "black"
];

function printImage(destination, type, theColor){
  if(type == "body"){
    $(`#${destination}`).append(`<img src="images/default-horse.png" alt="" id="editing">`);
  }else if(type=="eyes"){
    $(`#${destination}`).append(`<img src="images/horse-eyes.png" alt="" class="top-image" id="editing">`);
  }else if(type == "mane"){
    $(`#${destination}`).append(`<img src="images/horse-mane.png" alt="" class="top-image" id="editing">`);

  }

  //fixes any potential monitor issues
  let briFix;
  if($('input[name="color-balance"]:checked').val() === "balance1"){
    briFix = 1;
  }else if($('input[name="color-balance"]:checked').val() == "balance2"){
    briFix = 1.4;
  }

  if(theColor === colorNames[0]){
    $(`#editing`).css("filter", `hue-rotate(${34}deg) grayscale(${50}%) brightness(${130}%)`);
  }else if(theColor === colorNames[1]){
    $(`#editing`).css("filter", `hue-rotate(${62}deg) grayscale(${0}%) brightness(${260}%)`);
  }else if(theColor === colorNames[2]){
    $(`#editing`).css("filter", `hue-rotate(${7}deg) grayscale(${45}%) brightness(${120}%)`);
  }else if(theColor === colorNames[3]){
    $(`#editing`).css("filter", `hue-rotate(${190}deg) grayscale(${35}%) brightness(${170}%)`);
  }else if(theColor === colorNames[4]){
    // $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${100}%) brightness(${420}%)`);
  }else if(theColor === colorNames[5]){
    $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${100}%) brightness(${60}%) saturate(800%)`);
  }else if(theColor === colorNames[0]){
    $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${000}%) brightness(${100}%)`);
  }

  if(theColor === coatColors[0]){
    $(`#editing`).css("filter", `hue-rotate(${28}deg) grayscale(${60}%) brightness(${130*briFix}%)`);//Brown
  }else if(theColor === coatColors[1]){
    $(`#editing`).css("filter", `hue-rotate(${5}deg) grayscale(${50}%) brightness(${110*briFix}%)`);//Red brown
  }else if(theColor === coatColors[2]){
    $(`#editing`).css("filter", `hue-rotate(${15}deg) grayscale(${75}%) brightness(${160*briFix}%)`);//Tan
  }else if(theColor === coatColors[3]){
    $(`#editing`).css("filter", `hue-rotate(${15}deg) grayscale(${75}%) brightness(${90*briFix}%)`);//Chocolate
  }else if(theColor === coatColors[4]){
    $(`#editing`).css("filter", `hue-rotate(${60}deg) grayscale(${40}%) brightness(${300*briFix}%)`);//polished gold
  }else if(theColor === coatColors[5]){
    $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${100}%) brightness(${300*briFix}%)`);//white
  }
  $(`#editing`).removeAttr('id');

}

function displayAnimal(destination, list, index){
  // if(array == undefined){
  //   // purr("array given to displayAnimal is not defined. Actual array is:");
  //   // purr(array, "o")
  //   return;
  // }
  // purr(list[index], "o")
  $(`#${destination}`).empty();
  printImage(destination, "body", list[index].coatColor);
  printImage(destination, "eyes", list[index].eyeColor);
  printImage(destination, "mane", list[index].maneColor);
}


function displayList(list){
  if(list === undefined){
    purr(`"ERROR", cannot read undefined in displaylist`);
    return;
  }
  $("#animal-list").empty();
  $("#animal-list").append(`<div id="animal-list-inner"></div>`)
  for(let i=0; i<list.length; i++){
    $("#animal-list-inner").append(`<div class="clickable" id="a${i}">${list[i].name}</div>`);
  }
  displayAnimal("info-image", list, currentAnimal);
}
