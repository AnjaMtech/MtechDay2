function purr(input, type){
  if(input == undefined){
    console.log("Code is running");
  }

  if(type == undefined){
    console.log(`${input}`)
  }else if(type == "t"){
    console.log(`-----${input}-----`);
  }else if(type == "o"){
    console.log(input);
  }else if(type == "a"){
    console.table(input);
  }
}
