//-----WIP-----
const coatColors = [
  "brown",
  "red brown",
  "tan",
  "chocolate",
  "polished gold",
  "white"
];
const eyeColors = [
  "cyan",
  "chocolate"
];
const wordBank = [
  "flour",
  "recession",
  "tune",
  "provide",
  "contradiction",
  "twist",
  "give",
  "injury",
  "agony",
  "beat",
  "provision",
  "franchise",
  "post",
  "public",
  "biography",
  "remember",
  "conspiracy",
  "constituency",
  "term",
  "pie",
  "slam",
  "lazy",
  "promotion",
  "estimate",
  "court",
  "lie",
  "fast",
  "snow",
  "evening",
  "steak",
  "contact",
  "clinic",
  "vessel",
  "difficulty",
  "improvement",
  "justify",
  "sign",
  "struggle",
  "couple",
  "pigeon",
  "distant",
  "shareholder",
  "butterfly",
  "inflation",
  "helicopter",
  "debate",
  "card",
  "pleasure",
  "opposed",
  "mainstream",
];
// setInterval(loop, 100);
class AnimalList{
  constructor(){
    this.list = [];
    this.changeDetector = "blank";
    this.test = "one";
  }
  add(name, coatColor, eyeColor, maneColor){
    if(name === undefined){
      name = "testHorse";
    }
    if(coatColor === undefined){
      coatColor = "brown";
    }
    if(eyeColor === undefined){
      eyeColor = "chocolate";
    }
    if(maneColor === undefined){
      maneColor = "black";
    }
    this.list[this.list.length] = {name: name, coatColor: coatColor, eyeColor: eyeColor, maneColor: maneColor};
  }
  addRandom(){
    let name = `${wordBank[Math.floor(Math.random()*wordBank.length)]} ${wordBank[Math.floor(Math.random()*wordBank.length)]}`;
    let coatColor = coatColors[Math.floor(Math.random()*coatColors.length)];
    let eyeColor = eyeColors[Math.floor(Math.random()*eyeColors.length)];
    let maneColor = coatColors[Math.floor(Math.random()*coatColors.length)];
    this.list[this.list.length] = {name: name, coatColor: coatColor, eyeColor: eyeColor, maneColor: maneColor};
    update();
  }
  breed(a, b){
    purr(`Breeding ${a} and ${b}`);
    this.addRandom();
    purr(this.list, "o")
  }
  content(){
    return this.list;
  }

  hasChanged(){
    // purr(`${this.changeDetector} != ${this.list}`)
    if(this.changeDetector != this.list){
      purr(`has changed`);
      this.changeDetector = this.list;
      return true;
    }else{
      purr(`has not changed`)
      // return false;
    }
  }


}


// horses.hasChanged();

// setInterval(listManagerLoop, 1000);
function listManagerLoop(){
  // purr(horses.hasChanged());
  if(horses.hasChanged()){
    // purr();
  }
}

function saveToLocal(){
  // window.localStorage.setItem("localAnimalList", JSON.stringify(animalList));
}
if(JSON.parse(localStorage.getItem("localAnimalList")) === null){
  // saveToLocal();
}else{
  // animalList = JSON.parse(localStorage.getItem("localAnimalList"));
}
//-----WIP-----
