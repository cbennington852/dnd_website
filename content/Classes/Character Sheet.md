
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

#current-health {
  border : none;
  width: 1.2rem;
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
#openModalBtn {
  display: flex;
  align-items: center; /* Centers vertically */
  justify-content: center;
  cursor: pointer;
  background-color : black;
  font-family: var(--fontFamily);
  width: auto;
  border : none;
  color: var(--dark);
}

.btn-form {
  font-family: var(--fontFamily);
  color: var(--dark);
  align-items: center; /* Centers vertically */
  justify-content: center;
  display: flex;
  background-color : black;
  border-radius : 15px;
  font-size : medium
}

/* Background overlay (hidden by default) */
.modal-overlay {
  display: none; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dimmed background */
  justify-content: center;
  align-items: center;
  z-index: 1000;
  
}

/* The actual popup box */
.modal-content {
  background-color: #2a2a2a;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease;
  border-radius : 15px;

}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
}

/* Smooth fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

</style>
  <div class="divider-sheet"><h3>General Skills</h3></div>
  <div class="grid-container">
    <div class="column">
      <label for="username">Agent Codename:</label>
      <input type="text"  name="agent_codename" placeholder="Example: Agent Hemlock, Agent Cotton, etc.">
    </div>
    <div class="column">
      <label for="username">Profession Rank (If applicable):</label>
    <input type="text"  name="profession_rank" placeholder="Example : N/A , Captain">
    </div>
  </div>
  <div class="grid-container">
    <div class="column">
      <label for="username">Employer:</label>
      <input type="text"  name="employer" placeholder="Example: CIA , FBI , etc.">
    </div>
    <div class="column">
      <label for="username">Nationality:</label>
    <input type="text"  name="nationality" placeholder="Example : United states of america">
    </div>
  </div>
  <div class="grid-container-3">
    <div class="column">
      <label for="username">Sex:</label>
      <input type="text"  name="sex" placeholder="Example : Male">
    </div>
    <div class="column">
      <label for="username">Age & DOB:</label>
    <input type="text"  name="age_and_dob" placeholder="Example : 19 , August 17th 2004">
    </div>
    <div class="column">
      <label for="username">Education:</label>
      <input type="text"  name="education" placeholder="Example : B.S. International Relations">
    </div>
  </div>
  <div class="grid-container">
    <div class="column">
      <div  class="chart-container">
        <svg class="radar-chart-dark"></svg>
      </div>
      <button id="openModalBtn"> <img src='./pencil.png'><span>Edit Core Stats</span></button>
    </div>
    <div class="column">
      <div id="health-bar" class="health-bar">
        <span> <input id=current-health type="number"  name="current_health" placeholder=""><span id=second-part-health> / - hp  </span></span>
        <span class="health-bar" id=pips-area>
        <!-- <div class="pip active"></div>
        <div class="pip active"></div>
        <div class="pip active"></div>
        <div class="pip active"></div>
        <div class="pip active"></div> -->
        </span>
      </div>
      <div class="grid-container-3">
        <div class="column">
          <label for="username">Armour:</label>
          <input 
            type="number" 
            id="degree" 
            name="armour" 
            placeholder="0"
            class="shield-input"
          >
        </div>
        <div class="column">
          <label for="username">Current Sanity:</label>
          <input type="number"  name="current_sanity" placeholder="">
        </div>
        <div class="column">
          <label for="username">Breaking Point:</label>
          <input type="number"  name="breaking_point" placeholder="">
        </div>
      </div>
      <label for="comments">Physical Description:</label>
      <textarea  name="physical_description" rows="4" cols="50"></textarea>
      <label for="comments">Mental Disorders:</label>
      <textarea  name="mental_disorders" rows="4" cols="50"></textarea>
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
        <td><label class="detail-label" for="search_dnd_thing">Search:</label></td>
        <td><input class="detail-input" type="number" id="search" name="search_dnd_thing" value="0" min="0" max="100"></td>
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
        <td><input class="detail-input" type="number"  name="financial_literacy" value="0" min="0" max="100"></td>
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
      <textarea  name="inventory" rows="4" cols="50"></textarea>
    </div>
    <div class="column">
      <label for="comments">Class Information:</label>
      <textarea style="width: 100%; height: 100%"  name="class_info" rows="8" cols="100"></textarea>
    </div>
    <!-- labels: ['Strength (' + coreStatsData[0] +')', 'Constitution (' + coreStatsData[1] +')', 'Dexterity (' + coreStatsData[2] +')', 'Intelligence (' + coreStatsData[3] +')', 'Willpower (' + coreStatsData[4] +')', 'Charisma (' + coreStatsData[5] +')'], -->
<div id="editModal" class="modal-overlay">
  <div class="modal-content">
    <h2>Edit Core Stats</h2>
    <form id="editForm">
      <div class="form-grid">
        <div class="input-group">
          <label for="stat-strength">Strength</label>
          <input type="number" id="stat-strength" name="strength" value="50">
        </div>
        <div class="input-group">
          <label for="stat-constitution">Constitution</label>
          <input type="number" id="stat-constitution" name="constitution" value="50">
        </div>
        <div class="input-group">
          <label for="stat-dexterity">Dexterity</label>
          <input type="number" id="stat-dexterity" name="dexterity" value="50">
        </div>
        <div class="input-group">
          <label for="stat-intelligence">Intelligence</label>
          <input type="number" id="stat-intelligence" name="intelligence" value="50">
        </div>
        <div class="input-group">
          <label for="stat-willpower">Willpower</label>
          <input type="number" id="stat-willpower" name="willpower" value="50">
        </div>
        <div class="input-group">
          <label for="stat-charisma">Charisma</label>
          <input type="number" id="stat-charisma" name="charisma" value="50">
        </div>
      </div>
      <div class="modal-actions">
        <button type="submit" id="saveBtn" class="btn-form">Save Changes</button>
      </div>
    </form>
  </div>
</div>

<button  id=clear-local-data-button style="font-size : small;" class="btn-form" type="button" onclick=export_char_sheet(); ><img  src='./export.png' >Download Character Sheet as  JSON</button>
<button  id=clear-local-data-button class="btn-form" type="button" >Erase Character Sheet</button>



<script src="https://cdn.jsdelivr.net/npm/chart.xkcd@1/dist/chart.xkcd.min.js"></script>
<script>
function export_char_sheet () {
  saveAllInputs();
  let temp_data = localStorage.getItem('characterSheetDataDONOTDELETE');
  let temp_data_parsed = JSON.parse(temp_data);
  console.log(temp_data_parsed['agent_codename']);
  saveFile(temp_data , temp_data_parsed['agent_codename']);
}
async function saveFile(obj , suggested_name) {
  const jsonString = JSON.stringify(obj, null, 2);
  const fileName =  suggested_name +'.json';
  // Check if the modern File System Access API is supported
  if ('showSaveFilePicker' in window) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: fileName,
        types: [{
          description: 'JSON Files',
          accept: { 'application/json': ['.json'] },
        }],
      });
      const writable = await handle.createWritable();
      await writable.write(jsonString);
      await writable.close();
      return; // Success! Exit the function.
    } catch (err) {
      // User rejected the picker or an actual error occurred
      if (err.name !== 'AbortError') {
        console.error("Save failed:", err);
      }
      return;
    }
  }
  console.warn("showSaveFilePicker not supported. Using secure fallback download method.");
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  // Crucial for Firefox / CSP environments: 
  // Ensure the element is hidden but technically visible in the DOM tree before clicking
  link.style.display = 'none';
  document.body.appendChild(link);
  try {
    // Method A: Standard click with an explicit MouseEvent (more trusted by browsers)
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    link.dispatchEvent(clickEvent);
  } catch (e) {
    // Method B: If dispatching fails, force a direct window location shift as a last resort
    window.location.href = url; 
  }
  // Clean up the DOM and memory
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
}
const currentURL = window.location.href;
console.log(currentURL); 
// All of this code "Contenutes to run" even after a page change!!!
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
console.log(localStorage.getItem('characterSheetDataDONOTDELETE'));
let coreStatsData = [85, 90, 75, 60, 75, 40]; // Example Values if not loading correctly
function load_core_stats_data() {
  const coreStats = [
    "strength",
    "constitution",
    "dexterity",
    "intelligence",
    "willpower",
    "charisma"
  ];
  for (let x = 0; x < coreStats.length; x++) {
    const input = document.querySelector(`[name="${coreStats[x]}"]`);
    if (input) {
      coreStatsData[x] = input.value;
    }
  }
  const svg = document.querySelector('.radar-chart-dark');
  new chartXkcd.Radar(svg, {
    title: '',
    data: {
      // The skills/attributes you are measuring
      labels: ['Strength (' + coreStatsData[0] +')', 'Constitution (' + coreStatsData[1] +')', 'Dexterity (' + coreStatsData[2] +')', 'Intelligence (' + coreStatsData[3] +')', 'Willpower (' + coreStatsData[4] +')', 'Charisma (' + coreStatsData[5] +')'],
      datasets: [{
        label: 'Melee Specialist',
        data: coreStatsData,
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
}
// Name of health info is healthInfo
let starting_max_health = localStorage.getItem("max_health");
let starting_current_health = localStorage.getItem("current_health");
if (starting_max_health == null || starting_current_health == null) {
  starting_max_health = 20;
  starting_current_health = 15; // default values so it functions
}
const healthBar = document.querySelector('#health-bar');
var pips_list = [];
function update_pips() {
  const pipsArea = document.querySelector('#pips-area');
  pipsArea.replaceChildren();
  for (let i = 0; (coreStatsData[1]/5) > i; i++) {
    const newElement = document.createElement('div');
    newElement.className = "pip";
    pips_list.push(newElement);
    pipsArea.appendChild(newElement);
  }
  for (let i = 0; starting_current_health > i; i++) {
    pips_list[i].className = 'pip active';
  }
}
let currentHealth = starting_current_health;
function updateHealth(new_health) {
  const pips = document.querySelectorAll('.pip');
  // Calculate how many pips should be active based on percentage
  const activeCount = new_health 
  pips.forEach((pip, index) => {
    if (activeCount > index ) {
      pip.classList.add('active');
    } else {
      pip.classList.remove('active');
    }
  });
  const secondHalfHealth = document.querySelector('#second-part-health');
  currentHealth = activeCount;
  secondHalfHealth.textContent = " / " + (coreStatsData[1]/5) + " hp ";
}
//update health pips on type
let currentHealthInput = document.querySelector('#current-health')
currentHealthInput.addEventListener('input', (event) => {
    // This runs on every keystroke
    console.log("typeing!!!!");
    const typedText = event.target.value; 
    if (Number.isInteger(Number(typedText))) {
      new_health = parseInt(typedText , 10);
      console.log("hello@ is int!");
      if ((0 > new_health)) { 
        updateHealth(0);
        currentHealthInput.textContent = 0;
      }
      else if (new_health > coreStatsData[1]/5) {
        updateHealth(coreStatsData[1]/5);
        currentHealthInput.textContent = coreStatsData[1]/5;
      }
      else {
        updateHealth(new_health);
      }
    }
});
// SAVING FORM TO LOCAL STORAGE:
// NOTE: We can make this a savable JSON later for sharing!
function saveAllInputs() {
  const inputs = document.querySelectorAll('input, select, textarea');
  const data = {};
  inputs.forEach(input => {
    // Only save if the element has an ID or Name to use as a key
    if (input.id || input.name) {
      const key =  input.name;
      // Handle checkboxes specifically
      data[key] = input.type === 'checkbox' ? input.checked : input.value;
    }
  });
  // Convert the object to a string and save
  localStorage.setItem('characterSheetDataDONOTDELETE', JSON.stringify(data));
}
function loadInputsFromMemory() {
  const savedData = localStorage.getItem('characterSheetDataDONOTDELETE');
  if (savedData) {
      const data = JSON.parse(savedData);
      // Loop through the keys of the saved object
      Object.keys(data).forEach(key => {
          // Find the specific input by its name attribute anywhere in the document
          const input = document.querySelector(`[name="${key}"]`);
          if (input) {
              input.value = data[key];
          }
      });
      //Handling the Health Bar
      currentHealth = data['current_health'];
      update_pips();
      updateHealth(currentHealth);
      load_core_stats_data();
  }
}
// Runs when the page is loading. 
window.addEventListener('load', () => {
  loadInputsFromMemory();
});
// Horrible way to handle those a links n'stuff
let previousURL = "";
setInterval(() => {
  const currentURL = window.location.href;
  console.log(previousURL + " -> " + currentURL);
  if (previousURL.includes("character-sheet") && currentURL.includes("character-sheet")) {
    saveAllInputs();
    update_pips();
    updateHealth(currentHealth);
  }
  else if ((!previousURL.includes("character-sheet")) && currentURL.includes("character-sheet")) {
    loadInputsFromMemory();
  }
  else {
    // do nothing
  }
  previousURL = currentURL;
}, 500); // twice per second. 
// Saves when the page is closed or when click on a link. 
window.addEventListener('beforeunload', (event) => {
  saveAllInputs();
});
const myBtn = document.getElementById('save-testing');
const myBtn2 = document.getElementById('print-local-data');
const myBtn3 = document.getElementById('clear-local-data-button');
myBtn3.addEventListener('click', function(event) {
  document.querySelectorAll('input, select, textarea').forEach(input => {
    input.value = "";
  });
});
const modal = document.getElementById('editModal');
const openModalBtn = document.getElementById('openModalBtn');
const editForm = document.getElementById('editForm');
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // Triggers flex centering layout
});
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
// 4. Handle form submission (Save Changes)
editForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop page from reloading
  modal.style.display = 'none';
  load_core_stats_data();
});
</script>


