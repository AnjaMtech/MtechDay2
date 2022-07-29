let char = [
  {
    name: "Raven",
    class: "ops",
    level: 1,
    rank: "ensign",
    xp: 0,
    abilityScores: {}
  }
]

function buildSheet(num, place){
  $(place).append(`<div class="character-sheet outer"><div class="inner temp"></div></div>`)
  $(".temp").append(
    `<div class="top"><h2>${char[num].name}</h2></div>`
  );
  $(".temp").removeClass("temp");
}

window.onload = function(){
  buildSheet(0, "main");
}
