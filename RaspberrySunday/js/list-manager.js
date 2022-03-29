// setInterval(loop, 100);
class AnimalList{
  constructor(){
    this.list = [];
    this.changeDetector = this.list;
  }
  add(name, color){
    this.list[this.list.length] = [name, color]
    purr(`adding ${name} to the list`);
  }
  content(){
    return this.list;
  }
  hasChanged(){
    if(this.changeDetector != this.list){
      purr(`true`);
      return true;
    }else{
      purr('false');
      return false;
    }
  }

}

const horses = new AnimalList();
horses.hasChanged();
horses.add("daisy", "brown");
horses.content();
horses.hasChanged();
