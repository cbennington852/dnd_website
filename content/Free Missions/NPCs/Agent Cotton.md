
<style>
img {
  /* Forces blocky, pixelated scaling instead of blurring */
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  
  /* Creates the wavy distortion effect */
  filter: url('#wavy-distortion');
}
</style>
<svg width="0" height="0">
  <filter id="wavy-distortion">
    <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="2" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
  </filter>
</svg>





<!-- ![[cotton.png]] -->
<img src="./cotton.png" width=300px;>
<!--Inspiration image : https://www.fbi.gov/image-repository/female-special-agents-denise-biehn.jpg/@@images/image/high-->

A young blonde woman. She wears an FBI vest, and and an automatic UZI in her right gun holster. She sounds a little bit insane. Also a tiny bit forgetful. She is a Redline friendly who occasionally accompanies players on missions.

### Special Skills and Abilities

> **Curse of the grimwalker:**
> Agent Cotton was cursed a long time ago on a previous mission. If Agent Cotton perishes, she will come back to life the next day with little to no memory how how she died. Each time she dies, her sanity goes down by 1d20. 

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

input[type="file"] {
  background-color : black;
  color : grey;
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
/*PHONE ONLY*/
  @media only screen and (max-width: 767px) {
    .grid-container {
      /* background-color: pink; */
      font-size : small;
      max-width : 100%;
    }
    .grid-container {
      display: grid;
      grid-template-columns: 1fr ; 
      gap: 20px; /* Optional: adds space between the two columns */
    }
    .grid-container-3 {
      display: grid;
      grid-template-columns: 1fr  ; 
      gap: 20px; /* Optional: adds space between the two columns */
    }
  }

</style>
<section>
  <div class="divider-sheet"><h3>General Skills</h3></div>
  <div class="grid-container-3">
    <div class="column">
      <label for="username">Sex:</label>
      <input type="text"  name="sex" placeholder="Example : Male" value="Female" disabled>
    </div>
    <div class="column">
      <label for="username">Age & DOB:</label>
    <input type="text"  name="age_and_dob" placeholder="Example : 19 , August 17th 2004" value="26 , January 7th 2000" disabled>
    </div>
    <div class="column">
      <label for="username">Education:</label>
      <input type="text"  name="education" placeholder="Example : B.S. International Relations" value="B.S. International Relations" disabled>
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
        <span> <input id=current-health type="number" class="current-health"   name="current_health" placeholder="12"><span id=second-part-health>  / 12 hp  </span></span>
        <span class="health-bar" id=pips-area>
        </span>
      </div>
      <div id="willpower-bar" class="health-bar">
        <span> <input id=current-willpower class="current-health"  type="number"  name="current_willpower" placeholder="12"><span id=second-part-willpower> / 12 wp  </span></span>
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
          <input type="number"  name="current_sanity" value="60">
        </div>
        <div class="column">
          <label for="username">Breaking Point:</label>
          <input type="number"  name="breaking_point" value="48">
        </div>
      </div>
      <label for="comments">Mental Disorders:</label>
      <textarea  name="mental_disorders" rows="4" cols="50">
      </textarea>
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
        <td><p>15</p></td>
        <td><label class="detail-label" for="drive">Drive:</label></td>
        <td><p>60</p></td>
        <td><label class="detail-label" for="pilot">Pilot:</label></td>
        <td><p>50</p></td>
      </tr>
      <!-- Row 2 -->
      <tr class="detail-row">
        <td><label class="detail-label" for="law">Law:</label></td>
        <td><p>30</p></td>
        <td><label class="detail-label" for="search_dnd_thing">Search:</label></td>
        <td><p>50</p></td>
        <td><label class="detail-label" for="demolitions">Demolitions:</label></td>
        <td><p>30</p></td>
      </tr>
      <!-- Row 3 -->
      <tr class="detail-row">
        <td><label class="detail-label" for="computer-science">Computer Science:</label></td>
        <td><p>15</p></td>
        <td><label class="detail-label" for="stealth">Stealth:</label></td>
        <td><p>30</p></td>
        <td><label class="detail-label" for="heavy_weapons">Heavy Weapons:</label></td>
        <td><p>15</p></td>
      </tr>
      <!-- Row 4 -->
      <tr class="detail-row">
        <td><label class="detail-label" for="science">Science:</label></td>
        <td><p>30</p></td>
        <td><label class="detail-label" for="alertness">Alertness:</label></td>
        <td><p>50</p></td>
        <td><label class="detail-label" for="bureaucracy">Bureaucracy:</label></td>
        <td><p>30</p></td>
      </tr>
      <!-- Row 5 -->
      <tr class="detail-row">
        <td><label class="detail-label" for="engineering">Engineering:</label></td>
        <td><p>15</p></td>
        <td><label class="detail-label" for="firearms">Firearms:</label></td>
        <td><p>50</p></td>
        <td><label class="detail-label" for="criminology">Criminology:</label></td>
        <td><p>15</p></td>
      </tr>
      <!-- Row 6 -->
      <tr class="detail-row">
        <td><label class="detail-label" for="forensics">Forensics:</label></td>
        <td><p>15</p></td>
        <td><label class="detail-label" for="first-aid">First Aid:</label></td>
        <td><p>80</p></td>
        <td><label class="detail-label" for="psychotherapy">Psychotherapy:</label></td>
        <td><p>30</p></td>
      </tr>
      <!-- Row 7 -->
      <tr class="detail-row">
        <td><label class="detail-label" for="unnatural">Unnatural:</label></td>
        <td><p>45</p></td>
        <td><label class="detail-label" for="melee">Melee:</label></td>
        <td><p>50</p></td>
        <td><label class="detail-label" for="financial-literacy">Finance:</label></td>
        <td><p>15</p></td>
      </tr>
    </tbody>
  </table>
  </section>
  <section>
  <div class="divider-sheet"><h3>Possessions</h3></div>
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
            <th>HIT CHANCE BONUS</th>
          </tr>
        </thead>
        <tbody>
          <tr class="weapon-row">
            <td class="weapon-box" ><input class="table-input text-input" type="text" name="weapon_1" value="Uzi"></td>
            <td><input class="table-input" type="text" name="weapon_1_range" value="15m"></td>
            <td><input class="table-input" type="text" name="weapon_1_damage" value="1D10"></td>
            <td><input class="table-input" type="number" name="weapon_1_ap" value="0" min="0"></td>
            <td><input class="table-input" type="number" name="weapon_1_lethal" value="20" min="0" max="100"></td>
            <td><input class="table-input" type="number" name="weapon_1_hit_c" value="20" min="0" max="100"></td>
          </tr>
          <tr class="weapon-row">
            <td><input class="table-input text-input" type="text" name="weapon_2" ></td>
            <td><input class="table-input" type="text" name="weapon_2_range" ></td>
            <td><input class="table-input" type="text" name="weapon_2_damage" ></td>
            <td><input class="table-input" type="number" name="weapon_2_ap" min="0"></td>
            <td><input class="table-input" type="number" name="weapon_2_lethal"  min="0" max="100"></td>
            <td><input class="table-input" type="number" name="weapon_2_hit_c"  min="0" max="100"></td>
          </tr>
          <tr class="weapon-row">
            <td><input class="table-input text-input" type="text" name="weapon_3" ></td>
            <td><input class="table-input" type="text" name="weapon_3_range" ></td>
            <td><input class="table-input" type="text" name="weapon_3_damage" ></td>
            <td><input class="table-input" type="number" name="weapon_3_ap"  min="0"></td>
            <td><input class="table-input" type="number" name="weapon_3_lethal"  min="0" max="100"></td>
            <td><input class="table-input" type="number" name="weapon_3_hit_c"  min="0" max="100"></td>
          </tr>
        </tbody>
      </table>
<script data-position=0  class="on-load-run-script-charlesbennington" src="https://cdn.jsdelivr.net/npm/chart.xkcd@1/dist/chart.xkcd.min.js"></script>
<script data-position=1 class="on-load-run-script-charlesbennington">
let coreStatsData = [45, 55, 85, 40, 55, 60]; // Example Values if not loading correctly
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
load_core_stats_data();
</script>

<!-- 


HP: 12 ... Regens at 2hp per hour unless damage is from burning.
Sanity = 50
Level 10 Luck class.
- Firearms (85%)  1d12 + 10% Lethality (UZI )
- Intelligence (37%)
- Medicine ( 70% )
- Alertness (60%)
* Science  ( 80% )
* Forensic ( 70% )
- Charisma (60%)
- Unnatural (50%)
- All other stats 50% -->
