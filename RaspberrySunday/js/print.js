let colorNames = [
  "rustic brown",
  "polished gold",
  "rose",
  "summer sky",
  "albino",
  "black"
]

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
    $(`#editing`).css("filter", `hue-rotate(${62}deg) grayscale(${0}%) brightness(${380}%)`);
  }else if(theColor === colorNames[2]){
    $(`#editing`).css("filter", `hue-rotate(${7}deg) grayscale(${45}%) brightness(${120}%)`);
  }else if(theColor === colorNames[3]){
    $(`#editing`).css("filter", `hue-rotate(${190}deg) grayscale(${35}%) brightness(${150}%)`);
  }else if(theColor === colorNames[4]){
    $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${100}%) brightness(${500}%)`);
  }else if(theColor === colorNames[5]){
    $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${100}%) brightness(${60}%) saturate(800%)`);
  }else if(theColor === colorNames[0]){
    $(`#editing`).css("filter", `hue-rotate(${000}deg) grayscale(${000}%) brightness(${100}%)`);
  }
  $(`#editing`).removeAttr('id');

}
