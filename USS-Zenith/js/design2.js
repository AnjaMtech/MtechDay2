let char = [
  {
    name: "Josiah Malone",
    playerName: "Anja",
    class: "command",
    skills: [["Melee combat", 19], ["Horse riding", 7], ["negotiation", 8]],
    rank: "captain",
    xp: 0,
    abilityScores: {},
    inventory: [],
  }
]

function buildSheet(num, place){
  const thisChar = char[num];
  $(place).append(`<div class="character-sheet"><div class="inner temp"></div></div>`)
  $(".temp").append(`<div class="top"><h2>${thisChar.name}</h2></div>`);
  $(".temp").append(`<div class="top"><h2>${thisChar.class}</h2></div>`);
  $(".temp").append(`
    <h2>${thisChar}</h2>
  `);

  $(".temp").removeClass("temp");
}

window.onload = function(){
  buildSheet(0, "main");
}
