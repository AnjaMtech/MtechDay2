let char = [
  {
    name: "Raven",
    class: "ops",
    level: 1,
    rank: "ensign",
    xp: 0,
    abilityScores: {},
    inventory: [],
  }
]

function buildSheet(num, place){
  const thisChar = char[num];
  $(place).append(`<div class="character-sheet outer"><div class="inner temp"></div></div>`)
  $(".temp").append(
    `<div class="top"><h2>${thisChar.name}</h2></div>`
  );
  $(".temp").append(`<div class="top"><h2>${thisChar.class}</h2></div>`);
  $(".temp").append(`<div class="top"><h2>${thisChar.class}</h2></div>`);
  $(".temp").removeClass("temp");
}

window.onload = function(){
  buildSheet(0, "main");
}
