
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

/* Individual health pips */
.wip {
  width: 0.5vw;
  height: 24px;
  box-sizing: border-box;
}

/* Active/Filled health pips (Red Retro Palette) */
.wip.active {
  background-color: #f06237; /* Bright 8-bit red */
  
  /* Internal pixel shading for a pseudo-3D look */
  box-shadow: 
    inset -2px -2px 0px #a30022, /* Dark red bottom/right shadow */
    inset 2px 2px 0px #ff6687;   /* Light red top/left highlight */
}

/* Inactive/Empty health pips (Dimmed/Drained look) */
.wip:not(.active) {
  background-color: #82341c; /* Deep, muted burgundy */
  
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
  background-color : #4f4f4f;
  min-height : 1vh;
  width : 100%;
}

.current-health {
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

select {
  background-color : black;
    font-family: var(--fontFamily);
  color: var(--dark);
}


::-webkit-scrollbar {
  width: 10px;  /* Width of the vertical scrollbar */
  height: 10px; /* Height of the horizontal scrollbar */
}

/* 2. Remove the background track */
::-webkit-scrollbar-track {
  background: transparent; 
}

/* 3. Style the draggable thumb so it stays visible */
::-webkit-scrollbar-thumb {
  background: #303030; 
  border-radius: 5px; /* Rounds the corners of the thumb */
}

.borderless-button-charsheet {
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

.char-sheet-card {
  background-color : black;
  min-height : 20px;
  width: 100%;

}

.char-sheet-card:hover {
  background-color : #3c3c3c;
  border: red 1px solid;
  min-height : 20px;

  width: 100%;


}

.selector-container {
  list-style-type: none; /* Removes the dots */
  padding: 0;            /* Optional: Removes indentation */
  margin: 0;  
  width: 100%;
}

.char-sheet-card-selected {
  background-color : #535454;
  width: 100%;

}

/* Target the specific scrollable element or use html/body for global scrollbars */
.scrollable-container {
  /* 1. Modern Standard (Firefox and modern Safari) */
  /* Syntax: scrollbar-color: <thumb-color> <track-color>; */
  scrollbar-color: #888888 transparent; 

  /* Define scrollbar width for modern standard engines */
  scrollbar-width: thin; 
}

/* 2. WebKit Engines (Chrome, Edge, older Safari, Opera) */
/* You must explicitly set a width or height for WebKit custom scrollbars to render */
.scrollable-container::-webkit-scrollbar {
  width: 8px;          /* Width of vertical scrollbar */
  height: 8px;         /* Height of horizontal scrollbar */
}

/* This targets the scrollbar background */
.scrollable-container::-webkit-scrollbar-track {
  background: transparent; 
}

/* This targets the draggable handle */
.scrollable-container::-webkit-scrollbar-thumb {
  background-color: #888888;    /* Color of the handle */
  border-radius: 4px;           /* Round the corners of the handle */
}

/* Optional: Darken the thumb on hover */
.scrollable-container::-webkit-scrollbar-thumb:hover {
  background-color: #555555; 
}


.class-level-container {
    gap: 20px;
    max-width: 1000px;
    margin: 20px auto;
   overflow: scroll;
  min-height: auto

}

/* Base card styling */
.class-level {
    box-shadow: 0 4px 6px rgba(87, 87, 87, 0.1);
    transition: transform 0.2s, border-color 0.2s;
}

/* Hover effect */
.class-level:hover {
    transform: translateY(-5px);
}


@media print {
  html, body, section {
    -webkit-print-color-adjust: exact !important; /* Safari and Chrome/Edge */
    print-color-adjust: exact !important;         /* Modern standard Firefox/Spec */
  }
  /* 1. Force each section onto its own page */
  section {
    display: block;
    clear: both;
    
    /* Modern standard */
    break-before: page; 
    
    /* Legacy fallbacks for older browsers/renderers */
    page-break-before: always; 
  }
  /* 2. Optional: Prevent a blank page at the very beginning */
  section:first-of-type {
    break-before: auto;
    page-break-before: auto;
  }

  /* 3. Keep your rule to prevent awkward splits inside the section if it's small */
  section {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* Hide interactive or unnecessary web elements */
  .left.sidebar, .right.sidebar, div.popover-hint, button, nav, footer {
    display: none !important;
  }
}

/* Smooth fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

</style>
  <div style="display: flex" >
    <button class="borderless-button-charsheet" id="switchSheetsBtn"> <img width=20px; src='../red_icon.png'> Switch Character Sheet</button>
    <button class="borderless-button-charsheet" onclick="window.print()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"/></svg>Print Sheet</button>
  </div>
  <section>
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
      <button class="borderless-button-charsheet" id="openModalBtn"> <img src='./pencil.png'><span>Edit Core Stats</span></button>
    </div>
    <div class="column">
      <div id="health-bar" class="health-bar">
        <span> <input id=current-health type="number" class="current-health"   name="current_health" placeholder=""><span id=second-part-health> / - hp  </span></span>
        <span class="health-bar" id=pips-area>
        <!-- <div class="pip active"></div>
        <div class="pip active"></div>
        <div class="pip active"></div>
        <div class="pip active"></div>
        <div class="pip active"></div> -->
        </span>
      </div>
      <div id="willpower-bar" class="health-bar">
        <span> <input id=current-willpower class="current-health"  type="number"  name="current_willpower" placeholder=""><span id=second-part-willpower> / - wp  </span></span>
        <span  class="health-bar" id=pips-area-willpower>
        <div class="wip active"></div>
        <div  class="wip active"></div>
        <div class="wip active"></div>
        <div  class="wip active"></div>
        <div  class="wip active"></div>
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
  </section>
  <section>
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
        <td><input class="detail-input" type="number" id="computer-science" name="computer science" value="0" min="0" max="100"></td>
        <td><label class="detail-label" for="stealth">Stealth:</label></td>
        <td><input class="detail-input" type="number" id="stealth" name="stealth" value="0" min="0" max="100"></td>
        <td><label class="detail-label" for="heavy_weapons">Heavy Weapons:</label></td>
        <td><input class="detail-input" type="number" id="heavy_weapons" name="heavy_weapons" value="0" min="0" max="100"></td>
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
        <td><label class="detail-label" for="financial-literacy">Finance:</label></td>
        <td><input class="detail-input" type="number"  name="finance" value="0" min="0" max="100"></td>
      </tr>
    </tbody>
  </table>
  </section>
  <section>
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
            <td><input class="table-input text-input" type="text" name="weapon_2" ></td>
            <td><input class="table-input" type="text" name="weapon_2_range" ></td>
            <td><input class="table-input" type="text" name="weapon_2_damage" ></td>
            <td><input class="table-input" type="number" name="weapon_2_ap" min="0"></td>
            <td><input class="table-input" type="number" name="weapon_2_lethal"  min="0" max="100"></td>
            <td><input class="table-input" type="text" name="weapon_2_radius" ></td>
          </tr>
          <tr class="weapon-row">
            <td><input class="table-input text-input" type="text" name="weapon_3" ></td>
            <td><input class="table-input" type="text" name="weapon_3_range" ></td>
            <td><input class="table-input" type="text" name="weapon_3_damage" ></td>
            <td><input class="table-input" type="number" name="weapon_3_ap"  min="0"></td>
            <td><input class="table-input" type="number" name="weapon_3_lethal"  min="0" max="100"></td>
            <td><input class="table-input" type="text" name="weapon_3_radius" ></td>
          </tr>
        </tbody>
      </table>
      <label for="comments">Inventory:</label>
      <textarea  name="inventory" rows="4" cols="50"></textarea>
      <table>
        <thead>
          <tr>
            <th>Spell Name</th>
            <th>Description</th>
            <th>Willpower Cost</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          <!-- Row 1 -->
          <tr>
            <td><input class="table-input" type="text" name="ability_1_name" ></td>
            <td><input class="table-input" type="text" name="ability_1_desc" ></td>
            <td><input class="table-input" type="text" name="ability_1_wp" ></td>
            <td><input class="table-input" type="text" name="ability_1_diff" ></td>
          </tr>
          <!-- Row 2 -->
          <tr>
            <td><input class="table-input" type="text" name="ability_2_name" ></td>
            <td><input class="table-input" type="text" name="ability_2_desc" ></td>
            <td><input class="table-input" type="text" name="ability_2_wp" ></td>
            <td><input class="table-input" type="text" name="ability_2_diff" ></td>
          </tr>
          <!-- Row 3 -->
          <tr>
            <td><input class="table-input" type="text" name="ability_3_name" ></td>
            <td><input class="table-input" type="text" name="ability_3_desc" ></td>
            <td><input class="table-input" type="text" name="ability_3_wp" ></td>
            <td><input class="table-input" type="text" name="ability_3_diff" ></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="column">
      <!--We have a class name + a list of class attributes + link to full page. Also, an edit class modal button-->
      <h2 style="display: inline-flex; align-items: center; gap: 8px;" ><span><img class="borderless-button-charsheet" id="openClassEditor" src='./pencil.png'></span><span id="currClassLabel" >Gunslinger</span></h2>
      <div>
            <div id="currClassCards" style="max-height : 400px;" class="class-level-container">
              <div class="class-level">
                  <h3>Card One</h3>
                  <p>This is some minimal description text for the first card.</p>
              </div>
              <div class="class-level">
                  <h3>Card Two</h3>
                  <p>This is some minimal description text for the second card.</p>
              </div>
              <div class="class-level">
                  <h3>Card Three</h3>
                  <p>This is some minimal description text for the third card.</p>
              </div>
              <div class="class-level">
                  <h3>Card Four</h3>
                  <p>This is some minimal description text for the third card.</p>
              </div>
          </div>
      </div>
      <!-- <label for="comments">Class Information:</label>
      <textarea style="width: 100%; height: 100%"  name="class_info" rows="8" cols="100"></textarea> -->
    </div>
  </section>
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
          <label for="stat-willpower">Power</label>
          <input type="number" id="stat-willpower" name="power" value="50">
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



<div id="switchSheetsOverlay" class="modal-overlay">
  <div class="modal-content">
    <h2>Switch Character Sheet</h2>
    <form id="editForm">
      <div style="display: flex; justify-content: center;" class="form-grid">
        <!--Other sheets here-->
        <ul class="selector-container">
          <li class="char-sheet-card" data-value="TTRPGCharSheet0"></li>
          <li class="char-sheet-card" data-value="TTRPGCharSheet1"></li>
          <li class="char-sheet-card" data-value="TTRPGCharSheet2"></li>
          <li class="char-sheet-card" data-value="TTRPGCharSheet3"></li>
          <li class="char-sheet-card" data-value="TTRPGCharSheet4"></li>
          <li class="char-sheet-card" data-value="TTRPGCharSheet5"></li>
          <li class="char-sheet-card" data-value="TTRPGCharSheet6"></li>
          <li class="char-sheet-card" data-value="TTRPGCharSheet7"></li>
          <li class="char-sheet-card" data-value="TTRPGCharSheet8"></li>
          <li class="char-sheet-card" data-value="TTRPGCharSheet9"></li>
        </ul>
      </div>
    </form>
  </div>
</div>

<div id="editClassModel" class="modal-overlay">
  <div class="modal-content">
    <h2>Edit Class</h2>
    <form id="editClassForm">
      <div >
       <label for="class_name">Class:</label>
        <select id="class_name" name="class_name">
          <option value="Close Combat Specialist">Close Combat Specialist</option>
          <option value="Gunslinger">Gunslinger</option>
          <option value="Prepper">Prepper</option>
          <option value="Scholar of mushroom">Scholar of mushroom</option>
          <option value="Scholar of The Great Machine">Scholar of the great machine</option>
        </select>
        <label for="class_level">Level:</label>
        <select id="class_level" name="class_level">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <div class="modal-actions">
      </div>
    </form>
  </div>
</div>



<script data-position=0  class="on-load-run-script-charlesbennington" src="https://cdn.jsdelivr.net/npm/chart.xkcd@1/dist/chart.xkcd.min.js"></script>
<script data-position=1 class="on-load-run-script-charlesbennington">
/*
MULTIPLE SHEETS PLAN:
- 1. Have 10 preset keys pointing to sheet json.
- 2. Have a localStorage key "characterSheetData", which points to those preset keys.
- 3. Button to open and manage character sheets. 
*/
const classLevel = document.querySelector("#class_level");
const className = document.querySelector("#class_name");
let currentCharSheetKey = localStorage.getItem("currentCharSheetKey");
if (!currentCharSheetKey) {
  currentCharSheetKey = "TTRPGCharSheet0";
}
const cards = document.querySelectorAll('.char-sheet-card');
let tempCharSheetKey = currentCharSheetKey;
function updateCardDisplay() {
  cards.forEach(card => {
    const keyName = card.getAttribute('data-value');
    let displayText = "---";
    if (localStorage.getItem(keyName)) {
      const cardCharSheet = JSON.parse(localStorage.getItem(keyName));
      if (cardCharSheet.hasOwnProperty("agent_codename")) {
        displayText = cardCharSheet["agent_codename"];
      }
      else {
        displayText = "Unnamed Agent";
      }
    }
    else {
      displayText = "Empty Slot";
    }
    card.textContent = displayText;
  });
}
updateCardDisplay();
cards.forEach(card => {
    card.addEventListener('click', () => {
        console.log("Clicked!");
        saveCharSheet();
        updateCardDisplay();
        cards.forEach(c => {
          // render the text in form of sheet agent name.
          c.className = 'char-sheet-card';
        });
        card.className = 'char-sheet-card-selected';
        tempCharSheetKey = card.getAttribute('data-value');
        saveCharSheet();
        currentCharSheetKey = tempCharSheetKey;
        localStorage.setItem("currentCharSheetKey" , tempCharSheetKey);
        clearCharSheet();
        loadInputsFromMemory();
        document.getElementById("switchSheetsOverlay").style.display = 'none';
        load_core_stats_data();
    });
});
function export_char_sheet () {
  let temp_data = localStorage.getItem(currentCharSheetKey);
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
console.log(localStorage.getItem(currentCharSheetKey));
let coreStatsData = [85, 90, 75, 60, 75, 40]; // Example Values if not loading correctly
function load_core_stats_data() {
  const coreStats = [
    "strength",
    "constitution",
    "dexterity",
    "intelligence",
    "power",
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
      labels: ['Strength (' + coreStatsData[0] +')', 'Constitution (' + coreStatsData[1] +')', 'Dexterity (' + coreStatsData[2] +')', 'Intelligence (' + coreStatsData[3] +')', 'Power (' + coreStatsData[4] +')', 'Charisma (' + coreStatsData[5] +')'],
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
let starting_current_willpower = localStorage.getItem("current_willpower");
if (starting_max_health == null || starting_current_health == null) {
  starting_max_health = 20;
  starting_current_health = 15; // default values so it functions
  starting_current_willpower = 10;
}
const healthBar = document.querySelector('#health-bar');
var pips_list = [];
var wips_list = [];
function update_pips() {
  // Handle the health things
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
  // Willpower.
  const wipsArea = document.querySelector('#pips-area-willpower');
  wipsArea.replaceChildren();
  for (let i = 0; (coreStatsData[4]/5) > i; i++) {
    const newElement = document.createElement('div');
    newElement.className = "wip";
    wips_list.push(newElement);
    wipsArea.appendChild(newElement);
  }
  for (let i = 0; starting_current_willpower > i; i++) {
    wips_list[i].className = 'wip active';
  }
}
let currentWillpower = starting_current_willpower;
let currentHealth= starting_current_health;
function updateHealth(new_health) {
  const pips = document.querySelectorAll('.pip');
  // Calculate how many pips should be active based on percentage
  const activeCount = new_health;
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
function updateWillpower(new_willpower) {
  const pips = document.querySelectorAll('.wip');
  // Calculate how many pips should be active based on percentage
  pips.forEach((pip, index) => {
    if (new_willpower > index ) {
      pip.classList.add('active');
    } else {
      pip.classList.remove('active');
    }
  });
  const secondHalfHealth = document.querySelector('#second-part-willpower');
  currentWillpower = new_willpower;
  secondHalfHealth.textContent = " / " + (coreStatsData[4]/5) + " wp ";
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
let currentWillpowerInput = document.querySelector('#current-willpower');
currentWillpowerInput.addEventListener('input', (event) => {
    // This runs on every keystroke
    const typedText = event.target.value; 
    if (Number.isInteger(Number(typedText))) {
      new_health = parseInt(typedText , 10);
      updateWillpower(new_health);
    }
});
// SAVING FORM TO LOCAL STORAGE:
// NOTE: We can make this a savable JSON later for sharing!
/*
if (input.id || input.name) {
      const key =  input.name;
      // Handle checkboxes specifically
      data[key] = input.type === 'checkbox' ? input.checked : input.value;
    }
*/
function saveAllInputs() {
  const inputs = document.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    // Only save if the element has an ID or Name to use as a key
    input.addEventListener("change" , () => {
      // Thing!
      const data = {};
      inputs.forEach(curr_input => {
        if (curr_input.id || curr_input.name) {
          const key =  curr_input.name;
          // Handle checkboxes specifically
          data[key] = curr_input.type === 'checkbox' ? curr_input.checked : curr_input.value;
        }
      });
      localStorage.setItem(currentCharSheetKey, JSON.stringify(data));
    });
  });
  // Convert the object to a string and save
}
function loadInputsFromMemory() {
  const savedData = localStorage.getItem(currentCharSheetKey);
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
      currentWillpower = data['current_willpower'];
      className.text = data['class_name'];
      classLevel.text = data['class_level'];
      className.dispatchEvent(new Event('change'));
      classLevel.dispatchEvent(new Event('change'));
      console.log("Hello!!!!" + classLevel.value + " : " +   data['class_level'] + " Node : " + className);
      update_pips();
      updateHealth(currentHealth);
      updateWillpower(currentWillpower);
      load_core_stats_data();
      update_class_information();
  }
}
function saveCharSheet() {
  update_pips();
  updateHealth(currentHealth);
  updateWillpower(currentWillpower);
}
// Runs when the page is loading. 
window.addEventListener('load', () => {
  loadInputsFromMemory();
  saveAllInputs();
});
// Horrible way to handle those a links n'stuff
let previousURL = "";
setInterval(() => {
  const currentURL = window.location.href;
  console.log(previousURL + " -> " + currentURL);
  if (previousURL.includes("character-sheet") && currentURL.includes("character-sheet")) {
    saveCharSheet();
    updateCardDisplay();
  }
  else if ((!previousURL.includes("character-sheet")) && currentURL.includes("character-sheet")) {
    loadInputsFromMemory();
    registerPopupModal('editModal' , 'openModalBtn', 'editForm');
    registerPopupModal('switchSheetsOverlay' , 'switchSheetsBtn', 'saveBtn');
    registerPopupModal('editClassModel' , 'openClassEditor', 'saveBtn');
    updateCardDisplay();
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
function clearCharSheet() {
document.querySelectorAll('input, select, textarea').forEach(input => {
    input.value = "";
  });
} 
function registerPopupModal(modalId , openModelButtonId , modalSubmissionButtonId) {
  const modal = document.getElementById(modalId);
  const openModalBtn = document.getElementById(openModelButtonId);
  const editForm = document.getElementById(modalSubmissionButtonId);
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Triggers flex centering layout
  });
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  editForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page from reloading
    modal.style.display = 'none';
    load_core_stats_data();
  });
}
const CLASS_INFO = {
  "Gunslinger" : [
      {
        "name": "Quick Draw",
        "body": "Add half your firearms stat to your dexterity when rolling a contested quickdraw."
      },
      {
        "name": "Base Level up",
        "body": "+10% (2 pts) to any base stat (e.g., STR, CON, DEX)."
      },
      {
        "name": "Lethal Burst",
        "body": "Add +10% lethality to all firearms rolls."
      },
      {
        "name": "Killer Instincts",
        "body": "Killing monsters results in a 1d6 sanity gain. Monsters surviving a fight with your character results in a 1d6 sanity loss."
      },
      {
        "name": "Trained Shooter",
        "body": "Aiming bonus is now +40% (was +20% previously)."
      },
      {
        "name": "Burst fire",
        "body": "Once per session, shoot twice on a single turn."
      }
    ],
    "Close Combat Specialist" : [
    {
      "name": "Mean right hook",
      "body": "Unarmed combat rolls and melee weapons can be replaced by strength rolls."
    },
    {
      "name": "Base Level up",
      "body": "+10% (2 pts) to any base stat (e.g., STR, CON, DEX)."
    },
    {
      "name": "Killer Instincts",
      "body": "Killing monsters results in a 1d6 sanity gain. Monsters surviving a fight with your character results in a 1d6 sanity loss."
    },
    {
      "name": "Tough it out",
      "body": "Once per session, when taking damage greater than a d4, reduce that damage to a d4."
    },
    {
      "name": "Lethal blow",
      "body": "On a successful critical strike, roll again."
    },
    {
      "name": "Adrenaline Burst",
      "body": "Once per session, upon being downed, your character can get back up for two turns, during which they can attack, run, or do any action they please. Once those turns are expended, they will go down again."
    }
  ],
"Prepper" : [
    {
      "name": "Tinker",
      "body": "Engineering, Demolitions, and Heavy Weapons rolls can be replaced with INT rolls."
    },
    {
      "name": "Stat Buff",
      "body": "+10% (2 pts) to any base stat (e.g., STR, CON, DEX)."
    },
    {
      "name": "Inside buyers",
      "body": "Weapons purchases are processed at one level cheaper (e.g., Unusual → Standard)."
    },
    {
      "name": "Ghost Guns",
      "body": "Military Restricted weapons are no longer restricted and can be manufactured at home."
    },
    {
      "name": "My baby",
      "body": "Creation of a custom weapon, Major Expense or below. This has the following buffs: 30% more accurate OR 1d6 more damaging."
    },
    {
      "name": "Improvements",
      "body": "Upgrade your custom weapon once again. Add 10% lethality to the weapon OR add a 1d6 per turn (poison, fire, or radiation) effect. OR Add a once per session detonator which destroys your weapon (you can spend a home scene to make a new one) which deals 2d20 to anyone in a 30m radius."
    }
  ],
"Scholar of mushroom" : [
    {
      "name": "Dive into madness",
      "body": "50% to unnatural. Your willpower can be reduced to 1 before you feel any effects. Note: If you already have unnatural this does not go above 65% Note: this will reduce your sanity capacity to your unnatural.."
    },
    {
      "name": "Arcane Spells I",
      "body": "Choose 1 level 1 spell from the class list."
    },
    {
      "name": "Feel Good Fuzziness",
      "body": "Weapons purchases are processed at one level cheaper (e.g., Unusual → Standard)."
    },
    {
      "name": "Arcane Spells II",
      "body": "Choose 2 level 1 spells and 1 level 2 spell."
    },
    {
      "name": "Delve into madness",
      "body": "As a bonus home scene you can now do the “staying on the case” action, in addition to a normal home scene."
    },
    {
      "name": "Arcane Spells III",
      "body": "Upgrade your custom weapon once again. Add 10% lethality to the weapon OR add a 1d6 per turn (poison, fire, or radiation) effect. OR Add a once per session detonator which destroys your weapon (you can spend a home scene to make a new one) which deals 2d20 to anyone in a 30m radius."
    }
  ],
 "Scholar of The Great Machine" : [
    {
      "name": "Dive into madness",
      "body": "50% to unnatural. Your willpower can be reduced to 1 before you feel any effects. Note: If you already have unnatural this does not go above 65% Note: this will reduce your sanity capacity to your unnatural.."
    },
    {
      "name": "Arcane Spells I",
      "body": "Choose 1 level 1 spell from the class list."
    },
    {
      "name": "Feel Good Fuzziness",
      "body": "Weapons purchases are processed at one level cheaper (e.g., Unusual → Standard)."
    },
    {
      "name": "Arcane Spells II",
      "body": "Choose 2 level 1 spells and 1 level 2 spell."
    },
    {
      "name": "The machine beckons",
      "body": "As a bonus home scene you can now do the “staying on the case” action, in addition to a normal home scene."
    },
    {
      "name": "Arcane Spells III",
      "body": "Upgrade your custom weapon once again. Add 10% lethality to the weapon OR add a 1d6 per turn (poison, fire, or radiation) effect. OR Add a once per session detonator which destroys your weapon (you can spend a home scene to make a new one) which deals 2d20 to anyone in a 30m radius."
    }
  ]
}
function update_class_information() {
  const curr_class = className.value;
  const curr_level = parseInt(classLevel.value , 10);
  const currClassLabel = document.querySelector("#currClassLabel");
  const currClassCards = document.querySelector("#currClassCards");
  const selected_class = CLASS_INFO[curr_class];
  let new_cards = "";
  for (let i = 0; i < curr_level; i++) {
    new_cards += `
              <div class="class-level">
                  <h3>${selected_class[i].name}</h3>
                  <p>${selected_class[i].body}</p>
              </div>
    `;
  }
  currClassCards.innerHTML = new_cards;
  currClassLabel.innerHTML = curr_class;
}
classLevel.addEventListener('change' , () => {
  update_class_information();
});
className.addEventListener('change' , () => {
  update_class_information();
});
</script>


