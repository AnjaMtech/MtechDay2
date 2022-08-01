let char = [
  {
    name: "Josiah Malone",
    playerName: "Anja",
    class: "command",
    skills: [["Melee combat", 19], ["Horse riding", 7], ["negotiation", 8]],
    rank: "captain",
    race: "human",
    xp: 0,
    abilityScores: {},
    inventory: [],
  },
  {
    name: "Rene Anderson"
  }
]

function buildSheet(num, place){
  const thisChar = char[num];
  $(place).append(`
    <div class="character-sheet temp">
      <div class="top">
        <div class="top-left">
          <span class="char-name"></span>
        </div>
        <div class="top-right">
          <div class="category"><div class="category-name">Class: </div><span class="char-class output"></span></div>
          <div class="category"><div class="category-name">Rank: </div><span class="char-rank output"></span></div>
          <div class="category"><div class="category-name">Race: </div><span class="char-race output"></span></div>
          <div class="category"><div class="category-name">Alignment: </div><span class="char-alignment output"></span></div>
          <div class="category"><div class="category-name">Player Name: </div><span class="char-player-name output"></span></div>
        </div>
      </div>
      <div class="sheet-body">
        <div class="ability-scores">
          <div class="ability-score">
            <span>Strength</span>
            <span>5</span>
          </div>
          <div class="ability-score">
            <span>Dexterity</span>
            <span>5</span>
          </div>
          <div class="ability-score">
            <span>Constitution</span>
            <span>5</span>
          </div>
          <div class="ability-score">
            <span>Intelligence</span>
            <span>5</span>
          </div>
          <div class="ability-score">
            <span>Wisdom</span>
            <span>5</span>
          </div>
          <div class="ability-score">
            <span>Charisma</span>
            <span>5</span>
          </div>
        </div>
      </div>
      <div class="personality">
        <div class="">
          
        </div>
        <div class="appearance">
          appearance
          <p>Sex/Gender:Male/Male. Species:Human(Maybe). Age: 59-Born19 thofOctober. Height/Weight:6'0"172lbs. Appearance: Wide with dark skin, he has absent-minded feelabouthim. He has grey eyes, and shoulder-length, black dreadlocks. Personality:Jealous, chivalrous, remorseless, unfocused, individualistic and requires positivefeedback.</p>
        </div>
        <div class="values">
          values
          <p>Believes in the spirit of the law, not the letter of the law</p>
        </div>
      </div>
      <div class="progression">
        <div class="inventory">
          <ul>
            <li>Comm badge</li>
            <li>Phaser</li>
          </ul>
        </div>
        <div class="skills">
          <ul>
            <li><span>Melee combat</span><span>19</span></li>
            <li><span>Horse riding</span><span>7</span></li>
            <li><span>Negotiation</span><span>8</span></li>
          </ul>
        </div>
      </div>
    </div>
  `)
  printToSheet(thisChar.name, "name");
  printToSheet(thisChar.class, "class");
  printToSheet(thisChar.rank, "rank");
  printToSheet(thisChar.race, "race");
  printToSheet(thisChar.alignment, "alignment");
  printToSheet(thisChar.playerName, "player-name");
  $(".temp").removeClass("temp");
}

function printToSheet(text, dest){
  $(".temp").find(`.char-${dest}`).empty();
  if(text === undefined){
    $(".temp").find(`.char-${dest}`).addClass("error")
    text = `undefined`;
  }
  text = text.toUpperCase();
  $(".temp").find(`.char-${dest}`).append(text);
}

window.onload = function(){
  buildSheet(0, "main");
  buildSheet(1, "main");
}
