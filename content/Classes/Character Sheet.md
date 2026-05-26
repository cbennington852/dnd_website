
  <style>
    .health-bar {
  display: flex;
  gap: 4px; /* Space between pips */
  background-color: #333; /* Border/background color */
  padding: 5px;
  border-radius: 5px;
  width: 200px;
}

.pip {
  flex-grow: 1;
  height: 20px;
  background-color: #555; /* Inactive/empty color */
  border-radius: 2px;
  transition: background-color 0.3s ease;
}

.pip.active {
  background-color: #ff4757; /* Active/filled health color */
}

.grid-container {
  display: grid;
  /* Creates two equal columns using 'fr' units */
  grid-template-columns: 1fr 1fr; 
  gap: 20px; /* Optional: adds space between the two columns */
}
.grid-container-3 {
  display: grid;
  /* Creates two equal columns using 'fr' units */
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 20px; /* Optional: adds space between the two columns */
}

.detailed-skill {
  padding: 2px;
  display: flex;
}

.column {
  padding: 2px;
  display: flex;
  flex-direction: column; /* This forces the items to stack vertically */
}

input , textarea {
  background: black;
  font-family: var(--fontFamily);
  color: var(--dark);
  font-size : medium;
  min-height : 5vh;
  width: 100%; /* Ensures the input fills the width of the column */
}

input:focus,textarea:focus {
  background: black;
  outline: 2px solid red;
}

label {
  display: block;
  font-size : small;
  margin-bottom: 5px; /* Adds space between label and input */
}

.detail-column {
  padding: 2px;
  display: flex;
  align-items: center;
}

.detail-label {
  font-size : large;
  margin-bottom: 5px;
}

table {
  width: 100%;
  border-collapse: collapse; 
}

th {
  font-size : small;
}

th, td {
  padding: 0; 
  margin: 0;
}

.weapon-box {

}

/* Container for the health bar */
.health-bar {
  display: flex;
  gap: 4px; /* Space between pixel blocks */
  padding: 4px;
  background-color: #000000; /* Dark background to pop the pixels */
  border: 4px solid #000000;  /* Thick pixel-style border */
  width: max-content;
  
  /* Optional: Adds a retro chunkiness to the outer border */
  box-shadow: 
    -4px 0 #000000, 
    4px 0 #000000, 
    0 -4px #000000, 
    0 4px #000000;
}

/* Individual health pips */
.pip {
  width: 0.5vw;
  height: 24px;
  box-sizing: border-box;
}

/* Active/Filled health pips (Red Retro Palette) */
.pip.active {
  background-color: #ff0043; /* Bright 8-bit red */
  
  /* Internal pixel shading for a pseudo-3D look */
  box-shadow: 
    inset -2px -2px 0px #a30022, /* Dark red bottom/right shadow */
    inset 2px 2px 0px #ff6687;   /* Light red top/left highlight */
}

/* Inactive/Empty health pips (Dimmed/Drained look) */
.pip:not(.active) {
  background-color: #681a2c; /* Deep, muted burgundy */
  
  /* Internal pixel shading for an empty slot */
  box-shadow: 
    inset -2px -2px 0px #140307, 
    inset 2px 2px 0px #421720;
}

.health-button {
  background-color : red;
  border-radius : 0;
  border-color : black;
  font-size : large;
  border-width: 4px;
  border-style: solid;
  font-family: 'Press Start 2P', monospace;
  color: white;
  image-rendering: pixelated;
  filter: blur(1px) contrast(150%);

}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.divider-sheet {
  background-color : grey;
  min-height : 1vh;
  width : 100%;
}


table {
  width: 95%;
  border-collapse: collapse;
}


.detail-row {
  padding: 8px;
  vertical-align: middle; /* Centers label and input vertically inside the cell */
}

/* Optional: Gives your inputs a uniform width */
.detail-input {
  width: 3vw;
  padding : 0;
}

.table-input {
  padding : 0;
}

</style>

<div class="divider-sheet"><h3>General Skills</h3></div>
<div class="grid-container">
  <div class="column">
    <label for="username">Agent Codename:</label>
    <br>
    <input type="text" id="username" name="username" placeholder="Example: Agent Hemlock, Agent Cotton, etc.">
  </div>
  <div class="column">
    <label for="username">Profession Rank (If applicable):</label>
  <input type="text" id="username" name="username" placeholder="Example : N/A , Captain">
  </div>
</div>
<div class="grid-container">
  <div class="column">
    <label for="username">Employer:</label>
    <br>
    <input type="text" id="username" name="username" placeholder="Example: CIA , FBI , etc.">
  </div>
  <div class="column">
    <label for="username">Nationality:</label>
  <input type="text" id="username" name="username" placeholder="Example : United states of america">
  </div>
</div>
<div class="grid-container-3">
  <div class="column">
    <label for="username">Sex:</label>
    <br>
    <input type="text" id="username" name="username" placeholder="Example : Male">
  </div>
  <div class="column">
    <label for="username">Age & DOB:</label>
  <input type="text" id="username" name="username" placeholder="Example : 19 , August 17th 2004">
  </div>
  <div class="column">
    <label for="username">Education:</label>
    <input type="text" id="username" name="username" placeholder="Example : B.S. International Relations">
  </div>
</div>
<div class="grid-container">
  <div class="column">
    <div  class="chart-container">
      <svg class="radar-chart-dark"></svg>
    </div>
  </div>
  <div class="column">
    <div id="health-bar" class="health-bar">
      <span id="health-indicator" > - / - hp  </span>
      <!-- <div class="pip active"></div>
      <div class="pip active"></div>
      <div class="pip active"></div>
      <div class="pip active"></div>
      <div class="pip active"></div> -->
      <button class="health-button" onclick="takeDamage()" id="take-damage">-</button>
      <button class="health-button" onclick="restoreHealth()" >+</button>
    </div>
    <div class="grid-container-3">
      <div class="column">
        <label for="username">Armour:</label>
        <input 
          type="number" 
          id="degree" 
          name="degree" 
          placeholder="0"
          class="shield-input"
        >
      </div>
      <div class="column">
        <label for="username">Current Sanity:</label>
        <input type="number" id="username" name="username" placeholder="">
      </div>
      <div class="column">
        <label for="username">Breaking Point:</label>
        <input type="number" id="username" name="username" placeholder="">
      </div>
    </div>
    <label for="comments">Physical Description:</label>
    <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
    <label for="comments">Mental Disorders:</label>
    <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
  </div>
</div>
<div class="divider-sheet"><h3>Detailed Skills</h3></div>
<table>
  <tbody>
    <!-- Row 1 -->
    <tr class="detail-row">
      <td><label class="detail-label" for="history">History:</label></td>
      <td><input class="detail-input" type="number" id="history" name="history" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="drive">Drive:</label></td>
      <td><input class="detail-input" type="number" id="drive" name="drive" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="pilot">Pilot:</label></td>
      <td><input class="detail-input" type="number" id="pilot" name="pilot" value="0" min="0" max="100"></td>
    </tr>
    <!-- Row 2 -->
    <tr class="detail-row">
      <td><label class="detail-label" for="law">Law:</label></td>
      <td><input class="detail-input" type="number" id="law" name="law" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="search">Search:</label></td>
      <td><input class="detail-input" type="number" id="search" name="search" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="demolitions">Demolitions:</label></td>
      <td><input class="detail-input" type="number" id="demolitions" name="demolitions" value="0" min="0" max="100"></td>
    </tr>
    <!-- Row 3 -->
    <tr class="detail-row">
      <td><label class="detail-label" for="computer-science">Computer Science:</label></td>
      <td><input class="detail-input" type="number" id="computer-science" name="computer_science" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="stealth">Stealth:</label></td>
      <td><input class="detail-input" type="number" id="stealth" name="stealth" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="dodge">Dodge:</label></td>
      <td><input class="detail-input" type="number" id="dodge" name="dodge" value="0" min="0" max="100"></td>
    </tr>
    <!-- Row 4 -->
    <tr class="detail-row">
      <td><label class="detail-label" for="science">Science:</label></td>
      <td><input class="detail-input" type="number" id="science" name="science" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="alertness">Alertness:</label></td>
      <td><input class="detail-input" type="number" id="alertness" name="alertness" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="bureaucracy">Bureaucracy:</label></td>
      <td><input class="detail-input" type="number" id="bureaucracy" name="bureaucracy" value="0" min="0" max="100"></td>
    </tr>
    <!-- Row 5 -->
    <tr class="detail-row">
      <td><label class="detail-label" for="engineering">Engineering:</label></td>
      <td><input class="detail-input" type="number" id="engineering" name="engineering" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="firearms">Firearms:</label></td>
      <td><input class="detail-input" type="number" id="firearms" name="firearms" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="criminology">Criminology:</label></td>
      <td><input class="detail-input" type="number" id="criminology" name="criminology" value="0" min="0" max="100"></td>
    </tr>
    <!-- Row 6 -->
    <tr class="detail-row">
      <td><label class="detail-label" for="forensics">Forensics:</label></td>
      <td><input class="detail-input" type="number" id="forensics" name="forensics" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="first-aid">First Aid:</label></td>
      <td><input class="detail-input" type="number" id="first-aid" name="first_aid" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="psychotherapy">Psychotherapy:</label></td>
      <td><input class="detail-input" type="number" id="psychotherapy" name="psychotherapy" value="0" min="0" max="100"></td>
    </tr>
    <!-- Row 7 -->
    <tr class="detail-row">
      <td><label class="detail-label" for="unnatural">Unnatural:</label></td>
      <td><input class="detail-input" type="number" id="unnatural" name="unnatural" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="melee">Melee:</label></td>
      <td><input class="detail-input" type="number" id="melee" name="melee" value="0" min="0" max="100"></td>
      <td><label class="detail-label" for="financial-literacy">Financial Literacy:</label></td>
      <td><input class="detail-input" type="number" id="financial-literacy" name="financial_literacy" value="0" min="0" max="100"></td>
    </tr>
  </tbody>
</table>
<div class="divider-sheet"><h3>Possessions & Class</h3></div>
<div class="grid-container">
  <div class="column">
    <table style="width: 95%;">
      <thead>
        <tr>
          <th>Weapon</th>
          <th>RANGE</th>
          <th>DAMAGE</th>
          <th>ARMOUR PIERCING</th>
          <th>LETHALITY</th>
          <th>KILL RADIUS</th>
        </tr>
      </thead>
      <tbody>
        <tr class="weapon-row">
          <td class="weapon-box" ><input class="table-input text-input" type="text" name="weapon_1" value="Pistol"></td>
          <td><input class="table-input" type="text" name="weapon_1_range" value="15m"></td>
          <td><input class="table-input" type="text" name="weapon_1_damage" value="1D10"></td>
          <td><input class="table-input" type="number" name="weapon_1_ap" value="0" min="0"></td>
          <td><input class="table-input" type="number" name="weapon_1_lethal" value="0" min="0" max="100"></td>
          <td><input class="table-input" type="text" name="weapon_1_radius" value="-"></td>
        </tr>
        <tr class="weapon-row">
          <td><input class="table-input text-input" type="text" name="weapon_2" value="Rifle"></td>
          <td><input class="table-input" type="text" name="weapon_2_range" value="100m"></td>
          <td><input class="table-input" type="text" name="weapon_2_damage" value="2D8"></td>
          <td><input class="table-input" type="number" name="weapon_2_ap" value="1" min="0"></td>
          <td><input class="table-input" type="number" name="weapon_2_lethal" value="10" min="0" max="100"></td>
          <td><input class="table-input" type="text" name="weapon_2_radius" value="-"></td>
        </tr>
        <tr class="weapon-row">
          <td><input class="table-input text-input" type="text" name="weapon_3" value="Grenade"></td>
          <td><input class="table-input" type="text" name="weapon_3_range" value="Throw"></td>
          <td><input class="table-input" type="text" name="weapon_3_damage" value="3D6"></td>
          <td><input class="table-input" type="number" name="weapon_3_ap" value="0" min="0"></td>
          <td><input class="table-input" type="number" name="weapon_3_lethal" value="15" min="0" max="100"></td>
          <td><input class="table-input" type="text" name="weapon_3_radius" value="5m"></td>
        </tr>
      </tbody>
    </table>
    <label for="comments">Inventory:</label>
    <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
  </div>
  <div class="column">
    <label for="comments">Class Information:</label>
    <textarea style="width: 100%; height: 100%" id="comments" name="comments" rows="8" cols="100"></textarea>
  </div>





<script>
const healthIndicator = document.querySelector('#health-indicator');
const starting_max_health = 20;
const starting_current_health = 15;
const healthBar = document.querySelector('#health-bar')
var pips_list = [];
for (let i = 0; starting_max_health > i; i++) {
  const newElement = document.createElement('div');
  newElement.className = "pip";
  pips_list.push(newElement);
  healthBar.appendChild(newElement);
}
for (let i = 0; starting_current_health > i; i++) {
  pips_list[i].className = 'pip active';
}
const pips = document.querySelectorAll('.pip');
const maxHealth = pips.length;
let currentHealth = starting_current_health;
healthIndicator.textContent = currentHealth + " / " + maxHealth + " hp";


function updateHealth(healthPercentage) {
  const pips = document.querySelectorAll('.pip');
  // Calculate how many pips should be active based on percentage
  const activeCount = Math.ceil((healthPercentage / 100) * maxHealth);
  
  pips.forEach((pip, index) => {
    if (activeCount > index ) {
      pip.classList.add('active');
    } else {
      pip.classList.remove('active');
    }
  });

  currentHealth = activeCount;

  if (10 > currentHealth)  {
  healthIndicator.textContent = "\u00A0" + currentHealth + " / " + maxHealth + " hp";

  }
  else {
  healthIndicator.textContent = "" + currentHealth + " / " + maxHealth + " hp";
  }
}




// Example: Taking damage
function takeDamage() {
  if (currentHealth > 0) {
    currentHealth -= 1;
    updateHealth((currentHealth / maxHealth) * 100);
  }
}

function restoreHealth() {
  if (maxHealth > currentHealth) {
    currentHealth += 1;
    updateHealth((currentHealth / maxHealth) * 100);
  }
}
</script>
<script src="https://cdn.jsdelivr.net/npm/chart.xkcd@1/dist/chart.xkcd.min.js"></script>
<script>
  const svg = document.querySelector('.radar-chart-dark');

  new chartXkcd.Radar(svg, {
    title: '',
    data: {
      // The skills/attributes you are measuring
      labels: ['Strength (85)', 'Durability (90)', 'Dexterity (75)', 'Intelligence (60)', 'WillPower (75)', 'Charisma (40)'],
      datasets: [{
        label: 'Melee Specialist',
        data: [85, 90, 75, 60, 75, 40],
      },
      {
          label: 'Maximum Possible',
          // Set every value to your desired max value (e.g., 100)
          data: [100, 100, 100, 100, 100, 100], 
        }]
    },
    options: {
      showLabels: true,
      // You can customize the color palette if you want to spice things up
      dataColors: ['#ff0000', '#000000'], 
      strokeColor: 'white',
      backgroundColor: 'black',
    }
  });
</script>


