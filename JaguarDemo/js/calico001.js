//Does a more compliated yet concise way of console.log
function purr(input, type){
  if(input == undefined && type === undefined){
    console.log("Code is running");
    return;
  }

  if(type == undefined){
    console.log(`${input}`)
  }else if(type == "title"){
    console.log(`-----${input}-----`);
  }else if(type == "object"){
    console.log(input);
  }else if(type == "table"){
    console.table(input);
  }else if(type == "string"){
    input = JSON.stringify(input)
    input = input.substring(1);
    input = input.substring(0, input.length - 1);
    console.log(input);
  }
}

//Will eventually make a class so I can maybe do purr.table instead
/*
class Purr {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

}

let purr = new Purr;
*/
