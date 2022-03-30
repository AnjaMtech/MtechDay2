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
  if(theColor === colorNames[0]){
    $(`#editing`).css("filter", `hue-rotate(${34}deg) grayscale(${50}%) brightness(${130}%)`);
  }else if(theColor === colorNames[1]){
    $(`#editing`).css("filter", `hue-rotate(${62}deg) grayscale(${0}%) brightness(${260}%)`);
  }else if(theColor === colorNames[2]){
    $(`#editing`).css("filter", `hue-rotate(${7}deg) grayscale(${45}%) brightness(${120}%)`);
  }else if(theColor === colorNames[3]){
    $(`#editing`).css("filter", `hue-rotate(${190}deg) grayscale(${35}%) brightness(${170}%)`);
  }else if(theColor === colorNames[4]){
    $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${100}%) brightness(${300}%)`);
  }else if(theColor === colorNames[5]){
    $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${100}%) brightness(${60}%) saturate(800%)`);
  }else if(theColor === colorNames[0]){
    $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${000}%) brightness(${100}%)`);
  }

  if(theColor === coatColors[0]){
    $(`#editing`).css("filter", `hue-rotate(${28}deg) grayscale(${60}%) brightness(${130}%)`);
  }else if(theColor === coatColors[1]){
    $(`#editing`).css("filter", `hue-rotate(${5}deg) grayscale(${50}%) brightness(${110}%)`);
  }else if(theColor === coatColors[2]){
    $(`#editing`).css("filter", `hue-rotate(${15}deg) grayscale(${75}%) brightness(${160}%)`);
  }else if(theColor === coatColors[3]){
    $(`#editing`).css("filter", `hue-rotate(${15}deg) grayscale(${75}%) brightness(${90}%)`);
  }else if(theColor === coatColors[4]){
    $(`#editing`).css("filter", `hue-rotate(${55}deg) grayscale(${40}%) brightness(${230}%)`);
  }
  $(`#editing`).removeAttr('id');

}

function displayAnimal(destination, type, array){
  if(array == undefined){
    // purr("array given to displayAnimal is not defined. Actual array is:");
    // purr(array, "o")
    return;
  }
  $(`#${destination}`).empty();
  printImage(destination, "body", array.coatColor);
  printImage(destination, "eyes", array.eyeColor);
  printImage(destination, "mane", array.maneColor);
}


function displayList(list){
  if(list === undefined){
    purr(`"ERROR", cannot read undefined in displaylist`);
    return;
  }
  for(let i=0; i<list.length; i++){
    $("#animal-list").append(`<div class="clickable" id="a${i}">${list[i].name}</div>`);
  }

}
