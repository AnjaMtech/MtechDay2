const myCode = [
  ["q", "ah"],
  ["w", "&#658;"],
  ["e", "h"],
  ["r", "z"],
  ["t", "g"],
  ["y", "j"],
  ["u", "ch"],
  ["i", "ih"],
  ["o", "eh"],
  ["p", "r"],
  ["[", "b"],
  ["]", "0"],
  ["a", "m"],
  ["s", "ktl"],
  ["d", "s"],
  ["f", "oh"],
  ["g", "aa"],
  ["h", "k"],
  ["j", "t"],
  ["k", "v"],
  ["l", "n"],
  [";", "d"],
  ["'", "f"],
  ["z", "oo"],
  ["x", "ee"],
  ["c", "l"],
  ["v", "p"],
  ["b", "y"],
  ["n", "th"],
  ["m", "w"],
  [".", "uh"],
  ["/", "."],
  [" ", "ERRORNOSPACESACCEPTED"]
]
let changeDetector;
let textAreaInput = "";
let currentWord;
//-----TEMP
let loopCount = 0;
function count(){
  loopCount++;
}
//-----TEMP

window.onload = function(){
  textAreaInput = $("#input").val();
  print(decode($("#input").val()));
  setInterval(loop, 200);
  function loop2(){
    //-----WIP-----
    // if(currentWord.charAt(currentWord.length) !== $("#input").val()){
    //
    // }
    //-----WIP-----
  }
  document.body.onkeypress= function(e){
    if(e.keyCode == 32){
      decode("eocf jz n. mpc;");
    }
  }
}

function loop(){
  if(textAreaInput !== $("#input").val()){
    textAreaInput = $("#input").val();
    hasChanged("textarea");
  }else if(decodeToggler !== document.getElementById("decode-toggler").checked){
    hasChanged()
    decodeToggler = document.getElementById("decode-toggler").checked;
  }

}
//-----WIP-----
function hasChanged(){
  lastChar = textAreaInput.charAt(textAreaInput.length - 1);
  if(document.getElementById("decode-toggler").checked){
    print(decode($("#input").val()));

  }
  log(`loop ${loopCount}`, "s");
}
//-----/WIP-----

function decode(input){
  // log(`decoding '${input}'`, "t")
  let words = [];
  let output = [];
  let presWord = 0;

  //-----Put words into an array
  for(let i=0; i<input.length; i++){
    count();
    if(words[presWord] == undefined){words[presWord] = ""}
    if(input.charAt(i) !== " "){
      words[presWord] += input.charAt(i);
    }else{
      presWord++
    }
  }
  // log(`Arrayed words is`, "s");
  // log(words, "s");

  //-----WIP-----
  //-----Translate words
  for(let i=0; i<words.length; i++){
    count();
    let myWord = findMatch(words[i]);
    if(myWord === null){
      //-----if there is no match in the word bank
      myWord = decodeWord(words[i]);
      output.push([words[i], myWord]);
    }else{
      output.push([words[i], myWord[1], myWord[2]]);
    }
  }


  // log(`Output is`, "t");
  // log(output, "s");
  return output;
  //-----/WIP-----

}

//-----WIP-----
function findMatch(input, type){
  if(input === undefined){input = "DEFAULT";log(`input of decodeWord is undefined`)}
  if(type == "k-e" || type == undefined){
    //if kaiyako to english
    let hasMatch = false;
    for(let i=0; i<wordCode.length; i++){
      count();
      if(input === wordCode[i][0]){
        hasMatch = true;
        return [wordCode[i][0], wordCode[i][1], wordCode[i][2], i]
      }
    }
    if(hasMatch == false){
      return null;
    }
  }
}
//-----/WIP-----

function decodeWord(input, type){
  if(input === undefined){input = "DEFAULT";log(`input of decodeWord is undefined`)}
  let output = "";
  if(type == "k-e" || type == undefined){
    for(let i=0; i<input.length; i++){
      count();
      let hasMatch = false;
      for(let j=0; j<myCode.length; j++){
        count();
        if(input.charAt(i) == myCode[j][0]){
          output += myCode[j][1];
          hasMatch = true;
          break;
        }
      }
      if(hasMatch == false){
        output += "-";
      }
    }
  }
  return output;
}
function print(input){
  log(`Tying to print`, "t")
  log(input, "s")
  let output = "";
  for(let i=0; i<input.length; i++){
    count();
    if(input[i][2] !== undefined){
      output += `<span class="${input[i][2]}">${input[i][1]}</span> `;
    }else{
      output += `${input[i][1]} `;
    }

  }
  $("#output").empty();
  log(`Output is ${output}`);
  $("#output").html(output);
}




//DEBUGGING
function log(input, type){
  if(type === "s"){
    console.log(input);
  }else if(type === "t"){
    //do this if title
    console.log(`-----${input}------`);
  }else{
    console.log("-----");
    console.log(input);
  }

}
