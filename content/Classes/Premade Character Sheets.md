<style>
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

.select-character-button {
    font-family: var(--fontFamily);
  color: var(--dark);
  align-items: center; /* Centers vertically */
  justify-content: center;
  display: flex;
  background-color : black;
  border-radius : 15px;
  font-size : medium
}

.char-sheet-card-selected {
  background-color : #535454;
  width: 100%;

}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
}
</style>


Below are some pre-made character sheets to get you up and running quickly. You can also make a custom character with our [[Create A Character]]  

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Profession</th>
            <th>Class</th>
            <th>Choose this Character</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Battle Hardened Marine</td>
            <td>Marine</td>
            <td>Gunslinger</td>
            <td><button class="select-character-button" id=sheet1> Choose this Character </button></td>
        </tr>
        <tr>
            <td>Well rounded Agent</td>
            <td>Law Enforcement Officer</td>
            <td>Prepper</td>
            <td><button class="select-character-button" id=sheet2> Choose this Character </button></td>
        </tr>
        <tr>
            <td>Mad Scientist</td>
            <td>Scientist</td>
            <td>Abomination</td>
            <td><button class="select-character-button" id=sheet3> Choose this Character </button></td>
        </tr>
        <tr>
            <td>Hard Boiled Detective</td>
            <td>FBI Agent</td>
            <td>Close Combat Specialist</td>
            <td><button class="select-character-button" id=sheet4> Choose this Character </button></td>
        </tr>
        <tr>
            <td>Sleazy Doctor</td>
            <td>Doctor</td>
            <td>Slick Talker</td>
            <td><button class="select-character-button" id=sheet5> Choose this Character </button></td>
        </tr>
        <tr>
            <td>Famous Anthropologist</td>
            <td>Professor</td>
            <td>Prepper</td>
            <td><button class="select-character-button" id=sheet6> Choose this Character </button></td>
        </tr>
    </tbody>
</table>


<div id="switchSheetsOverlay" class="modal-overlay">
  <div class="modal-content">
    <h2>Select a save</h2>
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

<script>
// Note that the on-click listenters is sadly nessicary beacuse of howw the page is being built.
// This is from quartz 5. 
document.getElementById("sheet1").addEventListener('click' , () => {openPopupModel(0);})
document.getElementById("sheet2").addEventListener('click' , () => {openPopupModel(1);})
document.getElementById("sheet3").addEventListener('click' , () => {openPopupModel(2);})
document.getElementById("sheet4").addEventListener('click' , () => {openPopupModel(3);})
document.getElementById("sheet5").addEventListener('click' , () => {openPopupModel(4);})
document.getElementById("sheet6").addEventListener('click' , () => {openPopupModel(5);})


const saved_sheets = [
    // Battle Hardened Marine
    `{"search":"50","agent_codename":"Battle Hardened Marine","profession_rank":"Marine Sargent","employer":"Fairchild Marine Core Base","nationality":"United States of America","sex":"","age_and_dob":"","education":"","current_health":"16","current_willpower":"12","armour":"","current_sanity":"60","breaking_point":"48","physical_description":"","mental_disorders":"","history":"0","drive":"40","pilot":"0","law":"0","search_dnd_thing":"50","demolitions":"50","computer science":"0","stealth":"50","heavy_weapons":"60","science":"0","alertness":"60","bureaucracy":"10","engineering":"0","firearms":"80","criminology":"0","forensics":"0","first_aid":"35","psychotherapy":"5","unnatural":"0","melee":"55","finance":"50","weapon_1":"Pistol","weapon_1_range":"15m","weapon_1_damage":"1D10","weapon_1_ap":"0","weapon_1_lethal":"0","weapon_1_radius":"-","weapon_2":"","weapon_2_range":"","weapon_2_damage":"","weapon_2_ap":"","weapon_2_lethal":"","weapon_2_radius":"","weapon_3":"","weapon_3_range":"","weapon_3_damage":"","weapon_3_ap":"","weapon_3_lethal":"","weapon_3_radius":"","inventory":"Cell Phone, Wallet, Drivers License, Car Keys.","ability_1_name":"","ability_1_desc":"","ability_1_wp":"","ability_1_diff":"","ability_2_name":"","ability_2_desc":"","ability_2_wp":"","ability_2_diff":"","ability_3_name":"","ability_3_desc":"","ability_3_wp":"","ability_3_diff":"","strength":"60","constitution":"80","dexterity":"50","intelligence":"60","power":"60","charisma":"50","class_name":"Gunslinger","class_level":"0"}`,
    // Well Rounded Agent
    `{"search":"70","agent_codename":"Well Rounded Agent","profession_rank":"Officer","employer":"Spokane County Sherif","nationality":"United States of America","sex":"","age_and_dob":"","education":"","current_health":"12","current_willpower":"12","armour":"","current_sanity":"60","breaking_point":"48","physical_description":"","mental_disorders":"","history":"0","drive":"80","pilot":"0","law":"30","search_dnd_thing":"60","demolitions":"10","computer science":"0","stealth":"10","heavy_weapons":"10","science":"0","alertness":"60","bureaucracy":"60","engineering":"0","firearms":"70","criminology":"40","forensics":"0","first_aid":"35","psychotherapy":"5","unnatural":"0","melee":"60","finance":"35","weapon_1":"Pistol","weapon_1_range":"15m","weapon_1_damage":"1D10","weapon_1_ap":"0","weapon_1_lethal":"0","weapon_1_radius":"-","weapon_2":"","weapon_2_range":"","weapon_2_damage":"","weapon_2_ap":"","weapon_2_lethal":"","weapon_2_radius":"","weapon_3":"","weapon_3_range":"","weapon_3_damage":"","weapon_3_ap":"","weapon_3_lethal":"","weapon_3_radius":"","inventory":"Cell Phone, Wallet, Drivers License, Car Keys.","ability_1_name":"","ability_1_desc":"","ability_1_wp":"","ability_1_diff":"","ability_2_name":"","ability_2_desc":"","ability_2_wp":"","ability_2_diff":"","ability_3_name":"","ability_3_desc":"","ability_3_wp":"","ability_3_diff":"","strength":"55","constitution":"60","dexterity":"60","intelligence":"65","power":"60","charisma":"60","class_name":"Prepper","class_level":"0"}`,
    // Mad Scientist
    `{"search":"60","agent_codename":"Mad Scientest","profession_rank":"Juinor Scientest","employer":"Next Gen Labs Spokane","nationality":"United States of America","sex":"","age_and_dob":"","education":"","current_health":"12","current_willpower":"16","armour":"","current_sanity":"80","breaking_point":"64","physical_description":"","mental_disorders":"","history":"0","drive":"30","pilot":"0","law":"40","search_dnd_thing":"40","demolitions":"35","computer science":"35","stealth":"10","heavy_weapons":"10","science":"60","alertness":"60","bureaucracy":"50","engineering":"0","firearms":"50","criminology":"0","forensics":"40","first_aid":"15","psychotherapy":"5","unnatural":"0","melee":"60","finance":"50","weapon_1":"Pistol","weapon_1_range":"15m","weapon_1_damage":"1D10","weapon_1_ap":"0","weapon_1_lethal":"0","weapon_1_radius":"-","weapon_2":"","weapon_2_range":"","weapon_2_damage":"","weapon_2_ap":"","weapon_2_lethal":"","weapon_2_radius":"","weapon_3":"","weapon_3_range":"","weapon_3_damage":"","weapon_3_ap":"","weapon_3_lethal":"","weapon_3_radius":"","inventory":"Cell Phone, Wallet, Drivers License, Car Keys.","ability_1_name":"","ability_1_desc":"","ability_1_wp":"","ability_1_diff":"","ability_2_name":"","ability_2_desc":"","ability_2_wp":"","ability_2_diff":"","ability_3_name":"","ability_3_desc":"","ability_3_wp":"","ability_3_diff":"","strength":"50","constitution":"60","dexterity":"50","intelligence":"80","power":"80","charisma":"40","class_name":"Abomination","class_level":"0"}`,
    // Hard Boiled Detective
    `
    {"search":"80","agent_codename":"Hard Boiled Detective","profession_rank":"Special Agent","employer":"PNW FBI branch","nationality":"United States of America","sex":"","age_and_dob":"","education":"","current_health":"16","current_willpower":"10","armour":"","current_sanity":"50","breaking_point":"40","physical_description":"","mental_disorders":"","history":"0","drive":"50","pilot":"0","law":"30","search_dnd_thing":"80","demolitions":"10","computer science":"0","stealth":"10","heavy_weapons":"10","science":"0","alertness":"80","bureaucracy":"40","engineering":"0","firearms":"45","criminology":"50","forensics":"35","first_aid":"15","psychotherapy":"5","unnatural":"0","melee":"60","finance":"25","weapon_1":"Pistol","weapon_1_range":"15m","weapon_1_damage":"1D10","weapon_1_ap":"0","weapon_1_lethal":"0","weapon_1_radius":"-","weapon_2":"","weapon_2_range":"","weapon_2_damage":"","weapon_2_ap":"","weapon_2_lethal":"","weapon_2_radius":"","weapon_3":"","weapon_3_range":"","weapon_3_damage":"","weapon_3_ap":"","weapon_3_lethal":"","weapon_3_radius":"","inventory":"Cell Phone, Wallet, Drivers License, Car Keys.","ability_1_name":"","ability_1_desc":"","ability_1_wp":"","ability_1_diff":"","ability_2_name":"","ability_2_desc":"","ability_2_wp":"","ability_2_diff":"","ability_3_name":"","ability_3_desc":"","ability_3_wp":"","ability_3_diff":"","strength":"80","constitution":"80","dexterity":"50","intelligence":"50","power":"50","charisma":"50","class_name":"Close Combat Specialist","class_level":"0"}
    `,
    // Sleazy Doctor
    `{"search":"30","agent_codename":"Sleazy Doctor","profession_rank":"Doctor","employer":"Spokane Sacred Heart Hospital","nationality":"United States of America","sex":"","age_and_dob":"","education":"","current_health":"11","current_willpower":"10","armour":"","current_sanity":"50","breaking_point":"40","physical_description":"","mental_disorders":"","history":"0","drive":"30","pilot":"0","law":"0","search_dnd_thing":"30","demolitions":"10","computer science":"0","stealth":"10","heavy_weapons":"10","science":"0","alertness":"40","bureaucracy":"50","engineering":"0","firearms":"50","criminology":"0","forensics":"70","first_aid":"80","psychotherapy":"60","unnatural":"0","melee":"30","finance":"60","weapon_1":"Pistol","weapon_1_range":"15m","weapon_1_damage":"1D10","weapon_1_ap":"0","weapon_1_lethal":"0","weapon_1_radius":"-","weapon_2":"","weapon_2_range":"","weapon_2_damage":"","weapon_2_ap":"","weapon_2_lethal":"","weapon_2_radius":"","weapon_3":"","weapon_3_range":"","weapon_3_damage":"","weapon_3_ap":"","weapon_3_lethal":"","weapon_3_radius":"","inventory":"Cell Phone, Wallet, Drivers License, Car Keys.","ability_1_name":"","ability_1_desc":"","ability_1_wp":"","ability_1_diff":"","ability_2_name":"","ability_2_desc":"","ability_2_wp":"","ability_2_diff":"","ability_3_name":"","ability_3_desc":"","ability_3_wp":"","ability_3_diff":"","strength":"50","constitution":"55","dexterity":"50","intelligence":"75","power":"50","charisma":"80","class_name":"Slick Talker","class_level":"0"}`,
    // Famous Anthropologist
    `
    {"search":"60","agent_codename":"Famous Anthropologist","profession_rank":"Professor of History","employer":"Gonzaga University","nationality":"United States of America","sex":"","age_and_dob":"","education":"","current_health":"10","current_willpower":"12","armour":"","current_sanity":"60","breaking_point":"48","physical_description":"","mental_disorders":"","history":"60","drive":"60","pilot":"0","law":"40","search_dnd_thing":"60","demolitions":"10","computer science":"0","stealth":"10","heavy_weapons":"10","science":"0","alertness":"60","bureaucracy":"50","engineering":"0","firearms":"50","criminology":"0","forensics":"0","first_aid":"15","psychotherapy":"35","unnatural":"0","melee":"30","finance":"80","weapon_1":"Pistol","weapon_1_range":"15m","weapon_1_damage":"1D10","weapon_1_ap":"0","weapon_1_lethal":"0","weapon_1_radius":"-","weapon_2":"","weapon_2_range":"","weapon_2_damage":"","weapon_2_ap":"","weapon_2_lethal":"","weapon_2_radius":"","weapon_3":"","weapon_3_range":"","weapon_3_damage":"","weapon_3_ap":"","weapon_3_lethal":"","weapon_3_radius":"","inventory":"Cell Phone, Wallet, Drivers License, Car Keys.","ability_1_name":"","ability_1_desc":"","ability_1_wp":"","ability_1_diff":"","ability_2_name":"","ability_2_desc":"","ability_2_wp":"","ability_2_diff":"","ability_3_name":"","ability_3_desc":"","ability_3_wp":"","ability_3_diff":"","strength":"50","constitution":"50","dexterity":"50","intelligence":"80","power":"60","charisma":"70","class_name":"Prepper","class_level":"0"}`
];
const modal = document.getElementById('switchSheetsOverlay');
let current_selection = "";
window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
function openPopupModel(char_sheet_json) {
  modal.style.display = 'flex'; // Triggers flex centering layout
  current_selection = saved_sheets[char_sheet_json];
}
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
        updateCardDisplay();
        cards.forEach(c => {
          // render the text in form of sheet agent name.
          c.className = 'char-sheet-card';
        });
        card.className = 'char-sheet-card-selected';
        tempCharSheetKey = card.getAttribute('data-value');
        currentCharSheetKey = tempCharSheetKey;
        localStorage.setItem("currentCharSheetKey" , tempCharSheetKey);
        localStorage.setItem(tempCharSheetKey , current_selection);
        window.location.href = "/classes/character-sheet";
    });
});
</script>
