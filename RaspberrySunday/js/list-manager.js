//-----WIP-----
// setInterval(loop, 100);
class AnimalList{
  constructor(){
    this.list = [];
    this.changeDetector = "blank";
    this.test = "one";
  }
  add(name, color){
    // this.list[this.list.length] = [name, color]
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

const horses = new AnimalList();
horses.hasChanged();

setInterval(listManagerLoop, 1000);
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
