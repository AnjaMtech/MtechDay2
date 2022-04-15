window.onload = function(){
  decode();

  document.getElementById("code").addEventListener("change", myFunction);


}

let engWords = ["red"];
let kaiWords = ["po;"];
let alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]

function myFunction() {
  decode();
}
//&#658;


function copyText() {
  console.log("copy text running")
  var copyText = "Hi";

  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  alert("Copied the text: " + copyText);
}
function decode(){
  //TESTING
  // console.log(document.getElementById("input").value)
  //TESTING
  let input = document.getElementById('input');
  let output = "";

  if(document.getElementById('code').value == "Kai-ro"){
    for(let i = 0; i < input.value.length; i++){
      if(input.value.charAt(i) == "q"){
        output += "ah";
      }else if(input.value.charAt(i) == "w"){
        output += "&#658;"; //Dj
      }else if(input.value.charAt(i) == "e"){
        output += "h";
      }else if(input.value.charAt(i) == "r"){
        output += "z";
      }else if(input.value.charAt(i) == "t"){
        output += "g";
      }else if(input.value.charAt(i) == "y"){
        output += "j";
      }else if(input.value.charAt(i) == "u"){
        output += "ch";
      }else if(input.value.charAt(i) == "i"){
        output += "ih";
      }else if(input.value.charAt(i) == "o"){
        output += "eh";
      }else if(input.value.charAt(i) == "p"){
        output += "r";
      }else if(input.value.charAt(i) == "["){
        output += "b";
      }else if(input.value.charAt(i) == "]"){
        output += "&#651;"
      }else if(input.value.charAt(i) == "a"){
        output += "m";
      }else if(input.value.charAt(i) == "s"){
        output += "ktl";
      }else if(input.value.charAt(i) == "d"){
        output += "s";
      }else if(input.value.charAt(i) == "f"){
        output += "o";
      }else if(input.value.charAt(i) == "g"){
        output += "aa";
      }else if(input.value.charAt(i) == "h"){
        output += "k";
      }else if(input.value.charAt(i) == "j"){
        output += "t";
      }else if(input.value.charAt(i) == "k"){
        output += "v";
      }else if(input.value.charAt(i) == "l"){
        output += "n";
      }else if(input.value.charAt(i) == ";"){
        output += "d";
      }else if(input.value.charAt(i) == "'"){
        output += "f";
      }else if(input.value.charAt(i) == "z"){
        output += "oo";
      }else if(input.value.charAt(i) == "x"){
        output += "ee";
      }else if(input.value.charAt(i) == "c"){
        output += "l";
      }else if(input.value.charAt(i) == "v"){
        output += "p";
      }else if(input.value.charAt(i) == "b"){
        output += "y";
      }else if(input.value.charAt(i) == "n"){
        output += "th";
      }else if(input.value.charAt(i) == "m"){
        output += "w";
      }else if(input.value.charAt(i) == ","){
        output += "sh";
      }else if(input.value.charAt(i) == "."){
        output += "uh";
      }else if(input.value.charAt(i) == "/"){
        output += ".";
      }else{
        output += input.value.charAt(i);
      }
    }
  }
  if(document.getElementById('code').value == "Kai-pho"){
    for(let i = 0; i < input.value.length; i++){
      if(input.value.charAt(i) == "q"){
        output += "ɑ:";
      }else if(input.value.charAt(i) == "w"){
        output += "j";
      }else if(input.value.charAt(i) == "e"){
        output += "k";
      }else if(input.value.charAt(i) == "r"){
        output += "z";
      }else if(input.value.charAt(i) == "t"){
        output += "g";
      }else if(input.value.charAt(i) == "y"){
        output += "cʎ̝̊";
      }else if(input.value.charAt(i) == "u"){
        output += "h";
      }else if(input.value.charAt(i) == "i"){
        output += "ɪ";
      }else if(input.value.charAt(i) == "o"){
        output += "e";
      }else if(input.value.charAt(i) == "p"){
        output += "r";
      }else if(input.value.charAt(i) == "["){
        output += "tʃ";
      }else if(input.value.charAt(i) == "]"){
        output += "b";
      }else if(input.value.charAt(i) == "a"){
        output += "m";
      }else if(input.value.charAt(i) == "s"){
        output += "ʒ";
      }else if(input.value.charAt(i) == "d"){
        output += "s";
      }else if(input.value.charAt(i) == "f"){
        output += "oʊ";
      }else if(input.value.charAt(i) == "g"){
        output += "æ";
      }else if(input.value.charAt(i) == "h"){
        output += "w";
      }else if(input.value.charAt(i) == "j"){
        output += "t";
      }else if(input.value.charAt(i) == "k"){
        output += "v";
      }else if(input.value.charAt(i) == "l"){
        output += "n";
      }else if(input.value.charAt(i) == ";"){
        output += "d";
      }else if(input.value.charAt(i) == "'"){
        output += "f";
      }else if(input.value.charAt(i) == "z"){
        output += "u:";
      }else if(input.value.charAt(i) == "x"){
        output += "i:";
      }else if(input.value.charAt(i) == "c"){
        output += "l";
      }else if(input.value.charAt(i) == "v"){
        output += "p";
      }else if(input.value.charAt(i) == "b"){
        output += "ʋ";
      }else if(input.value.charAt(i) == "n"){
        output += "θ";
      }else if(input.value.charAt(i) == "m"){
        output += "dʒ";
      }else if(input.value.charAt(i) == ","){
        output += "ʃ";
      }else if(input.value.charAt(i) == "."){
        output += "^";
      }else if(input.value.charAt(i) == "/"){
        output += ".";
      }else{
        output += input.value.charAt(i);
      }
    }
  }
  if(document.getElementById('code').value == "opt"){
    for(let i = 0; i < input.value.length; i++){
      if(input.value.charAt(i) == "q"){
        output += "a";
      }else if(input.value.charAt(i) == "w"){
        output += "j";
      }else if(input.value.charAt(i) == "e"){
        output += "k";
      }else if(input.value.charAt(i) == "r"){
        output += "z";
      }else if(input.value.charAt(i) == "t"){
        output += "g";
      }else if(input.value.charAt(i) == "y"){
        output += "cʎ̝̊";
      }else if(input.value.charAt(i) == "u"){
        output += "h";
      }else if(input.value.charAt(i) == "i"){
        output += "ɪ";
      }else if(input.value.charAt(i) == "o"){
        output += "e";
      }else if(input.value.charAt(i) == "p"){
        output += "r";
      }else if(input.value.charAt(i) == "["){
        output += "ch";
      }else if(input.value.charAt(i) == "]"){
        output += "b";
      }else if(input.value.charAt(i) == "a"){
        output += "m";
      }else if(input.value.charAt(i) == "s"){
        output += "ʒ";
      }else if(input.value.charAt(i) == "d"){
        output += "s";
      }else if(input.value.charAt(i) == "f"){
        output += "o";
      }else if(input.value.charAt(i) == "g"){
        output += "æ";
      }else if(input.value.charAt(i) == "h"){
        output += "w";
      }else if(input.value.charAt(i) == "j"){
        output += "t";
      }else if(input.value.charAt(i) == "k"){
        output += "v";
      }else if(input.value.charAt(i) == "l"){
        output += "n";
      }else if(input.value.charAt(i) == ";"){
        output += "d";
      }else if(input.value.charAt(i) == "'"){
        output += "f";
      }else if(input.value.charAt(i) == "z"){
        output += "u:";
      }else if(input.value.charAt(i) == "x"){
        output += "ee";
      }else if(input.value.charAt(i) == "c"){
        output += "l";
      }else if(input.value.charAt(i) == "v"){
        output += "p";
      }else if(input.value.charAt(i) == "b"){
        output += "ʋ";
      }else if(input.value.charAt(i) == "n"){
        output += "θ";
      }else if(input.value.charAt(i) == "m"){
        output += "dʒ";
      }else if(input.value.charAt(i) == ","){
        output += "ʃ";
      }else if(input.value.charAt(i) == "."){
        output += "a";
      }else if(input.value.charAt(i) == "/"){
        output += ".";
      }else{
        output += input.value.charAt(i);
      }
    }
  }
  if(document.getElementById('code').value == "full"){
    //WORK IN PROGRESS

    console.log("---------")
    let sentence = [];
    let word = 0;
    let currentWord = "";
    let isLetter = false;
    for(let i = 0; i<input.value.length; i++){
      console.log(i + ": current letter is '" + input.value.charAt(i) + "'")
      for(let j = 0; j<alphabet.length; j++){
        isLetter = false;
        if(input.value.charAt(i) == alphabet[j]){
          currentWord += input.value.charAt(i);
          sentence[word] += currentWord;
          isLetter = true;
        }else{
          word++;
          //translate word and send to output
          output+= currentWord;
          currentWord = ""
        }
      }
      console.log(i + ": Current word is: " + currentWord)

    }

    console.log("input is: " + input.value)
    output = sentence[0]
    //WORK IN PROGRESS
  }

  // document.getElementById('input').value = output;
  document.getElementById('output').innerHTML = output;
}

function debug(){
  let test = "sh"
  test += "ʌ"
  document.getElementById('output').innerHTML = "^";

  console.log("INPUT:");
  console.log(input.value);
  console.log("OUTPUT:");
  console.log(output);
}

document.onkeyup = function(e){
  decode();
}
