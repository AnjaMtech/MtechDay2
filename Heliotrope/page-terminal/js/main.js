let textContent;
let commands = [];
let currentIndex = 0;

window.onload = function(){
  newLine();
  // window.location.href = "http://google.com"
  document.body.onkeydown = function(e){
    if(e.keyCode == 13){
      textContent = $("#terminal").val();
      $("#top").append(`${textContent}<br>`);
      setTimeout(newLine, 10);
      let currentCommand = "";
      for(let i=24; i<textContent.length; i++){
        currentCommand+=textContent[i];
      }
      // purr(`command is ${textContent[24]}`)
      purr(currentCommand)
    }
  }
}
function separateToArray(string){
  string += " "
  const output = [];
  let currentWord = "";
  for(let i=0; i<string.length; i++){
    if(string[i] !== " "){
      currentWord += string[i];
    }else{
      output.push(currentWord);
      currentWord = "";
    }
  }
  return output;

}
function command(command1, command2){
  if(command1 === "goto"){
    if(command2 === "diffchecker"){
      // window.location.href = "https://www.diffchecker.com/";
      window.open("https://www.diffchecker.com/", '_blank');
    }

  }
}

function newLine(){
  $("#terminal").val("Heliotrope/AnjaSchmidt$ ");
}
