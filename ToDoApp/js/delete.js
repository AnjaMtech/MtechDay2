let allBids = []
// window.localStorage.setItem("myBids", JSON.stringify(allBids));

window.onload = function(){
  allBids = JSON.parse(localStorage.getItem("myBids"));
  console.log(`This is ${$("#one").value}`)
  printBids();
}
function addToArray(item){
  allBids.push(item);
  window.localStorage.setItem("myBids", JSON.stringify(allBids));
  printBids();
}
function fun1(){
  // console.log($("#one").val());
  // console.log(JSON.parse(localStorage.getItem("myBids"))[0][0]);
  addToArray(["one", $("#one").val()])
  $("#one").val("");

}
function fun2(){
  // This
  addToArray(["one", $("#two").val()])
  $("#two").val("");
}
function printBids(){
  $(".bid-results").empty();
  for(let i = 0; i < allBids.length; i++){
    // console.log(`Array item ${i}`)
    if(allBids[i][0] === "one"){
      $(".bid-results").append(`Person one bids $${allBids[i][1]}<br>`)
    }else if(allBids[i][0] === "two"){
      // console.log("does not equal one");
      $(".bid-results").append(`Person two bids $${allBids[i][1]}<br>`)
    }else{
      $(".bid-results").append(`Person ERROR bids $${allBids[i][1]}<br>`)
    }

  }

}
