  <style>



    #shell {
      display: grid;
      grid-template-rows: auto 1fr auto;
      /* width : 40vw; */
    }

    header, footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      border-bottom: 1px solid #ddd;
    }
    footer { border-top: 1px solid #ddd; border-bottom: none; }

    #dots { display: flex; gap: 6px; }
    .dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: #ccc;
      border: none;
      cursor: pointer;
    }
    .dot.active { background: #333; }

    .navigation-buttons {
        font-family: var(--fontFamily);
        color: var(--dark);
        align-items: center; /* Centers vertically */
        justify-content: center;
        display: flex;
        background-color : black;
        border-radius : 15px;
        font-size : x-large;
    }

    #viewport { 
        overflow-x: hidden;
        overflow-y: auto;
     }

    #pages-track {
      display: flex;
      height: 100%;
      transition: transform .35s ease;

    }

    #pages-track > div {
      flex: 0 0 100%;
      /* border: purple 3px solid; */
      overflow: auto;
      overflow-wrap: break-word;
      max-height : 80vh;

    }

    .radar-chart-dark {
    }

    .skill-list {
        /* padding-left: 60px;  */
    }

    /*NOTE: Below is for the proffession descirpiton*/
    #sidebar { width: 200px; border-right: 1px solid #ccc; overflow-y: auto; }
    .item { padding: 12px 16px; cursor: pointer; }
    .item:hover { background: #2a2a2a; }
    .item.active { background: #454545; font-weight: bold; }
    #detail { flex: 1; padding: 24px; overflow-y: auto; }

    /*NOTE: Below is for the class descirpiton*/
    #class_selection_sidebar { width: 200px; border-right: 1px solid #ccc; overflow-y: auto; }
    .class_selection_item { padding: 12px 16px; cursor: pointer; }
    .class_selection_item:hover { background: #2a2a2a; }
    .class_selection_item.active { background: #454545; font-weight: bold; }
    #class_selection_detail { flex: 1; padding: 24px; overflow-y: auto; }


    .core-stats-grid {
        display: grid;
        /* Creates 6 equal columns taking up 1 fraction of space each */
        grid-template-columns: repeat(6, 1fr); 
        gap: 10px;
    }

    .core-stat-spinner {
        font-family: var(--fontFamily);
        color: var(--dark);
        align-items: center; /* Centers vertically */
        justify-content: center;
        display: flex;
        cursor : pointer;
        border : none;
        background-color : black;
        font-size : large;
    }


    /* Target the spin buttons in Chrome, Safari, and Edge */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    /* This turns off the default browser rendering */
    -webkit-appearance: none; 
    
    /* Now you can apply custom styles! */
    background-color: #3498db;
    opacity: 1; /* Override default hover-only visibility */
    
    /* Give it some shape */
    width: 20px;
    height: 100%;
    }

.grid-container {

  display: grid;
  /* Creates two equal columns using 'fr' units */
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px; /* Optional: adds space between the two columns */
}
.grid-container-3 {
  display: grid;
  /* Creates two equal columns using 'fr' units */
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
  margin : 10px;
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

table {
  width: 95%;
  border-collapse: collapse;
}


.detail-row {
  padding: 8px;
  vertical-align: middle; /* Centers label and input vertically inside the cell */
}

/* Optional: Gives your inputs a uniform width */
.detail-boost-button {
  width: 3vw;
  padding : 0;
  background-color: black;
    font-family: var(--fontFamily);
    color: var(--dark);
  font-size : large;

}
.detail-boost-button:hover {
  width: 3vw;
  padding : 0;
  background-color: #424242;
  font-size : large;
    font-family: var(--fontFamily);
    color: var(--dark);
}

.detail-boost-button.active {
  width: 3vw;
  padding : 0;
  background-color: black;
    font-family: var(--fontFamily);
    color: var(--dark);
  font-size : large;
    border: red 2px solid;
}
.detail-boost-button:hover.active {
  width: 3vw;
  padding : 0;
  background-color: #424242;
  font-size : large;
    border: red 2px solid;

    font-family: var(--fontFamily);
    color: var(--dark);
}

.table-input {
  padding : 0;
}

  </style>
</head>
<body>
<header id="header-elem">
    <span id="page-counter">1 / 1</span>
    <div id="dots"></div>
</header>
<div id="shell">
  <div  id="viewport">
    <div  id="pages-track">
      <!-- Add or remove pages here — each <div> is a page -->
      <div >
        <h1>Profession</h1>
        <div style="display: flex; ">
            <nav id="sidebar"></nav>
            <main id="detail"><p>Select an profession to view details.</p></main>
        </div>
      </div>      
      <div >
        <h1>Employment Information</h1>
        <div style="max-width : 90%;">
             <div class="column">
            <label for="username">Profession Rank (If applicable):</label>
            <input type="text"  name="profession_rank" placeholder="Example : N/A , Captain">
            </div>
            <div class="column">
            <label for="username">Employer:</label>
            <input type="text"  name="employer" placeholder="Example: CIA New Jersey Branch Office , Smith County Sheriffs Office , etc.">
            </div>
            <div class="column">
            <label for="username">Nationality:</label>
            <input type="text"  name="nationality" placeholder="Example : United states of america">
            </div>
        </div>
      </div>  
      <div style=" display: flex; flex-direction: column; justify-content: center;" >
        <h1>Core Stats</h1>
        <div class="chart-container">
            <svg class="radar-chart-dark"></svg>
        </div>
        <div>
            <p id="num-points-remaining-indicator" style="text-align: center; font-size : x-large;" > Points: 100 </p>
        </div>
        <div id=core-stats-selector class="core-stats-grid" >
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
        </div>
      </div>
      <div >
        <h1>Identification Information</h1>
        <div style="max-width : 90%;">
            <label for="username">Agent Codename:</label>
            <input type="text"  name="agent_codename" placeholder="Example: Agent Hemlock, Agent Cotton, etc.">
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
            <label for="comments">Physical Description:</label>
            <textarea  name="physical_description" rows="4" cols="200"></textarea>
        </div>
      </div>
      <div >
        <h1>Class Selection</h1>
        <div style="display: flex; ">
            <nav id="class_selection_sidebar"></nav>
            <main id="class_selection_detail"><p>Select an profession to view details.</p></main>
        </div>
      </div>
      <div >
        <h1>Detailed Stats</h1>
        <p>Select which stats you would like to boost.</p>
        <p style="text-align : center; font-size : large;" id=number-of-boosts-label >Number of Boosts Left: -</p>
        <table>
            <tbody>
            <!-- Row 1 -->
            <tr class="detail-row">
                <td><label class="detail-label" for="history">History:</label></td>
                <td><button class="detail-boost-button" type="number" id="history" name="history" ></td>
                <td><label class="detail-label" for="drive">Drive:</label></td>
                <td><button class="detail-boost-button" type="number" id="drive" name="drive" ></td>
                <td><label class="detail-label" for="pilot">Pilot:</label></td>
                <td><button class="detail-boost-button" type="number" id="pilot" name="pilot" ></td>
            </tr>
            <!-- Row 2 -->
            <tr class="detail-row">
                <td><label class="detail-label" for="law">Law:</label></td>
                <td><button class="detail-boost-button" type="number" id="law" name="law" ></td>
                <td><label class="detail-label" for="search">Search:</label></td>
                <td><button class="detail-boost-button" type="number" id="search" name="search" ></td>
                <td><label class="detail-label" for="demolitions">Demolitions:</label></td>
                <td><button class="detail-boost-button" type="number" id="demolitions" name="demolitions" ></td>
            </tr>
            <!-- Row 3 -->
            <tr class="detail-row">
                <td><label class="detail-label" for="computer-science">Computer Science:</label></td>
                <td><button class="detail-boost-button" type="number" id="computer-science" name="computer science" ></td>
                <td><label class="detail-label" for="stealth">Stealth:</label></td>
                <td><button class="detail-boost-button" type="number" id="stealth" name="stealth" ></td>
                <td><label class="detail-label" for="dodge">Dodge:</label></td>
                <td><button class="detail-boost-button" type="number" id="dodge" name="dodge" ></td>
            </tr>
            <!-- Row 4 -->
            <tr class="detail-row">
                <td><label class="detail-label" for="science">Science:</label></td>
                <td><button class="detail-boost-button" type="number" id="science" name="science" ></td>
                <td><label class="detail-label" for="alertness">Alertness:</label></td>
                <td><button class="detail-boost-button" type="number" id="alertness" name="alertness" ></td>
                <td><label class="detail-label" for="bureaucracy">Bureaucracy:</label></td>
                <td><button class="detail-boost-button" type="number" id="bureaucracy" name="bureaucracy" ></td>
            </tr>
            <!-- Row 5 -->
            <tr class="detail-row">
                <td><label class="detail-label" for="engineering">Engineering:</label></td>
                <td><button class="detail-boost-button" type="number" id="engineering" name="engineering" ></td>
                <td><label class="detail-label" for="firearms">Firearms:</label></td>
                <td><button class="detail-boost-button" type="number" id="firearms" name="firearms" ></td>
                <td><label class="detail-label" for="criminology">Criminology:</label></td>
                <td><button class="detail-boost-button" type="number" id="criminology" name="criminology" ></td>
            </tr>
            <!-- Row 6 -->
            <tr class="detail-row">
                <td><label class="detail-label" for="forensics">Forensics:</label></td>
                <td><button class="detail-boost-button" type="number" id="forensics" name="forensics" ></td>
                <td><label class="detail-label" for="first-aid">First Aid:</label></td>
                <td><button class="detail-boost-button" type="number" id="first-aid" name="first_aid" ></td>
                <td><label class="detail-label" for="psychotherapy">Psychotherapy:</label></td>
                <td><button class="detail-boost-button" type="number" id="psychotherapy" name="psychotherapy" ></td>
            </tr>
            <!-- Row 7 -->
            <tr class="detail-row">
                <td><label class="detail-label" for="unnatural">Unnatural:</label></td>
                <td><button class="detail-boost-button" type="number" id="unnatural" name="unnatural" ></td>
                <td><label class="detail-label" for="melee">Melee:</label></td>
                <td><button class="detail-boost-button" type="number" id="melee" name="melee" ></td>
                <td><label class="detail-label" for="financial-literacy">Finance:</label></td>
                <td><button class="detail-boost-button" type="number"  name="finance" ></td>
            </tr>
            </tbody>
        </table>
      </div>
      <div >
        <h1>Save your character sheet</h1>
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
            <div class="modal-actions">
                <button type="submit" id="selectSheetBtn" class="btn-form">Save Changes</button>
            </div>
      </div>
    </div>
  </div>
</div>
<footer>
    <button class="navigation-buttons" id="btn-prev">← Prev</button>
    <button class="navigation-buttons" id="btn-next">Next →</button>
</footer>
<script data-position=0  class="on-load-run-script-charlesbennington" src="https://cdn.jsdelivr.net/npm/chart.xkcd@1/dist/chart.xkcd.min.js"></script>
<script data-position=1  class="on-load-run-script-charlesbennington" >
  (() => {
    const track   = document.getElementById('pages-track');
    const pages   = Array.from(track.children);
    const dotsEl  = document.getElementById('dots');
    const counter = document.getElementById('page-counter');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const headerElem = document.getElementById('header-elem');
    let current = 0;
    const total = pages.length;
    const viewPort = document.getElementById('viewport');
    const shell = document.getElementById('shell');
    const dots = pages.map((_, i) => {
      const d = document.createElement('button');
      d.className = 'dot';
      d.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(d);
      return d;
    });
    function goTo(idx) {
      current = Math.max(0, Math.min(idx, total - 1));
      const pageWidth = viewPort.offsetWidth; // That 35 is a magic number
      // I found it myself, not sure why it needs this offset.....
      console.log(pageWidth);
      console.log(viewPort.offsetWidth);
      // How to resolve? 
       track.style.transform = `translateX(-${current * pageWidth}px)`;
      counter.textContent = `${current + 1} / ${total}`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      btnPrev.disabled = current === 0;
      btnNext.disabled = current === total - 1;
    }
    btnPrev.addEventListener('click', () => goTo(current - 1));
    btnNext.addEventListener('click', () => goTo(current + 1));
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === 'ArrowLeft')  goTo(current - 1);
    });
    let touchStartX = 0;
    document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
    }, { passive: true });
    goTo(0);
    // Law Enforcement Officer:
    // FBI Agent
    // CIA Agent
    // Soldier / Marine / Swat
    // Scientist
    // Engineer
    // Professor of anthropology
    // Doctor
    const items = [
        {
        title: "Law Enforcement Officer",
        sub: "Government",
        body: `You protect and serve. Law enforcement officers have access to official badges, handcuffs, and police scanners`,
        skills: [
            {
                key_name: "alertness",
                percent : 60
            },
            {
                key_name: "bureaucracy",
                percent : 60
            },
            {
                key_name: "criminology",
                percent : 40
            },
            {
                key_name: "drive",
                percent : 50
            },
            {
                key_name: "firearms",
                percent : 40
            },
            {
                key_name: "law",
                percent : 30
            },
            {
                key_name: "melee",
                percent : 60
            },
            {
                key_name: "search",
                percent : 40
            },
            {
                key_name: "first_aid",
                percent : 35
            },
            {
                key_name: "finance",
                percent : 25
            },
        ]
        },
        {
        title: "FBI Agent",
        sub: "Government",
        body: `Most Agents are from the FBI. FBI agents are highly versatile in most situations, and generally good at most things.`,
        skills: [
            {
                key_name: "alertness",
                percent : 50
            },
            {
                key_name: "bureaucracy",
                percent : 40
            },
            {
                key_name: "criminology",
                percent : 50
            },
            {
                key_name: "drive",
                percent : 50
            },
            {
                key_name: "firearms",
                percent : 45
            },
            {
                key_name: "law",
                percent : 30
            },
            {
                key_name: "melee",
                percent : 30
            },
            {
                key_name: "search",
                percent : 50
            },
            {
                key_name: "forensics",
                percent : 35
            },
            {
                key_name: "finance",
                percent : 25
            },
        ]
        },
        {
        title: "Soldier / Marine / Swat",
        sub: "Government",
        body: "Capable. Tough. Combat Ready.",
        skills: [
            {
                key_name: "alertness",
                percent : 60
            },
            {
                key_name: "drive",
                percent : 40
            },
            {
                key_name: "firearms",
                percent : 60
            },
            {
                key_name: "stealth",
                percent : 50
            },
            {
                key_name: "melee",
                percent : 55
            },
            {
                key_name: "search",
                percent : 50
            },
            {
                key_name: "demolitions",
                percent : 50
            },
            {
                key_name: "first_aid",
                percent : 35
            },
            {
                key_name: "finance",
                percent : 20
            },
        ]
        },
        {
        title: "Engineer",
        sub: "Private",
        body: "Fixes things.",
        skills: [
            {
                key_name: "computer science",
                percent : 60
            },
            {
                key_name: "engineering",
                percent : 60
            },
            {
                key_name: "bureaucracy",
                percent : 50
            },
            {
                key_name: "law",
                percent : 40
            },
            {
                key_name: "demolitions",
                percent : 50
            },
            {
                key_name: "firearms",
                percent : 40
            },
            {
                key_name: "finance",
                percent : 50
            },
        ]
        },
         {
        title: "Doctor",
        sub: "Private",
        body: "Does medicine. ",
        skills: [
            {
                key_name: "first_aid",
                percent : 60
            },
            {
                key_name: "psychotherapy",
                percent : 60
            },
            {
                key_name: "bureaucracy",
                percent : 50
            },
            {
                key_name: "forensics",
                percent : 40
            },
            {
                key_name: "Stealth",
                percent : 40
            },
            {
                key_name: "alertness",
                percent : 40
            },
            {
                key_name: "finance",
                percent : 60
            },
        ]
        },
        {
        title: "Scientist",
        sub: "Academia",
        body: `Does science?
        This class has the best starting finance of all of the classes.`,
        skills: [
            {
                key_name: "science",
                percent : 60
            },
            {
                key_name: "computer science",
                percent : 35
            },
            {
                key_name: "bureaucracy",
                percent : 50
            },
            {
                key_name: "law",
                percent : 40
            },
            {
                key_name: "demolitions",
                percent : 35
            },
            {
                key_name: "forensics",
                percent : 40
            },
            {
                key_name: "alertness",
                percent : 60
            },
            {
                key_name: "finance",
                percent : 50
            },
        ]
        },
        {
        title: "Anthropologist",
        sub: "Academia",
        body: "Does anthropology. ",
        skills: [
            {
                key_name: "history",
                percent : 60
            },
            {
                key_name: "search",
                percent : 60
            },
            {
                key_name: "bureaucracy",
                percent : 50
            },
            {
                key_name: "psychotherapy",
                percent : 35
            },
            {
                key_name: "law",
                percent : 40
            },
            {
                key_name: "alertness",
                percent : 60
            },
            {
                key_name: "finance",
                percent : 60
            },
        ]
        },
    ];
    const cards = document.querySelectorAll('.card');
    // Add a click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            cards.forEach( (curr_card) =>  {
            curr_card.classList.remove('active');
            });
            card.classList.add('active');
        });
    });
    const sidebar = document.getElementById('sidebar');
    const detail = document.getElementById('detail');
    const svg = document.querySelector('.radar-chart-dark');
    const numPointsRemainingIndicator = document.querySelector("#num-points-remaining-indicator");
    let coreStatsData = [50, 50, 50, 50, 50, 50]; // Example Values if not loading correctly
    let currentNumberOfPoints = 60; // default number of points to play with
    function updateCoreSkillsRadar() {
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
        numPointsRemainingIndicator.textContent = "Current Points : " + currentNumberOfPoints;
    }
    updateCoreSkillsRadar();
    function adjustCoreStat(core_stat_idx , direction) {
        const suggested_value = coreStatsData[core_stat_idx] + (5 * direction);
        const suggested_num_pts = currentNumberOfPoints + (5 * direction * -1);
        if ((suggested_num_pts < 0) || (suggested_value < 40) || (suggested_value > 80)) {
            return;
        }
        else {
            coreStatsData[core_stat_idx] = suggested_value;
            currentNumberOfPoints = suggested_num_pts;
            updateCoreSkillsRadar();
        }
    }
    const coreStatNames = ["Strength" , "Constitution" , "Dexterity" , "Intelligence" , "Power" , "Charisma"];
    const coreStatsSelector = document.querySelector("#core-stats-selector");
    Array.from(coreStatsSelector.children).forEach((item , index) => {
        const increment_button = document.createElement('button');
        const decrement_button = document.createElement('button');
        const curr_value_indicator = document.createElement('p');
        const label = document.createElement('p');
        curr_value_indicator.style = "text-align : center";
        label.textContent = coreStatNames[index];
        increment_button.textContent = "+";
        curr_value_indicator.textContent = coreStatsData[index];
        decrement_button.textContent = "-";
        increment_button.className = "core-stat-spinner";
        decrement_button.className = "core-stat-spinner";
        let holdTimer;
        let holdTimer2;
        let button_time = 70;
        increment_button.addEventListener('mousedown', () => {
            holdTimer = setInterval(() => {
                adjustCoreStat(index , 1);
                curr_value_indicator.textContent = coreStatsData[index];
            }, button_time); 
        });
        increment_button.addEventListener('mouseup', () => {
            clearTimeout(holdTimer);
        });
        increment_button.addEventListener('mouseleave', () => {
            clearTimeout(holdTimer);
        });
        decrement_button.addEventListener('mousedown', () => {
            holdTimer2 = setInterval(() => {
                adjustCoreStat(index , -1);
                curr_value_indicator.textContent = coreStatsData[index];
            }, button_time); 
        });
        decrement_button.addEventListener('mouseup', () => {
            clearTimeout(holdTimer2);
        });
        decrement_button.addEventListener('mouseleave', () => {
            clearTimeout(holdTimer2);
        });
        item.appendChild(label);
        item.appendChild(increment_button);
        item.appendChild(curr_value_indicator);
        item.appendChild(decrement_button);
    });
    // NOTE: This is for the profession selection
    items.forEach((item , index) => {
        let el = document.createElement('div');
        el.className = 'item';
        el.dataset.index = index;
        el.innerHTML = `<strong>${item.title}</strong><br><small>${item.sub}</small>`;
        el.addEventListener('click', () => {
            document.querySelectorAll('.item').forEach(n => n.classList.remove('active'));
            el.classList.add('active');
            let tableHTML = "";
            tableHTML += `<h2>${item.title}</h2><p><em>${item.sub}</em></p><hr>` +
                item.body.split('\n\n').map(p => `<p>${p}</p>`).join('');
            tableHTML += `\n
            <h3>Starting Skills</h3>
            <table>
            <thead>
                <tr>
                <th scope="col">Skill</th>
                <th scope="col">Starting Percent</th>
                </tr>
            </thead>
            <tbody>`
            if (item.hasOwnProperty('skills')) {
                item['skills'].forEach( skill => {
                    tableHTML += `<tr>  <td>${skill['key_name']}</td> <td>${skill['percent']}% </td></tr>`
                });
            }
            tableHTML += `\n
            </tbody>
            </table>`
            detail.innerHTML = tableHTML;
            reRenderDetailedStatsButtons();
        });
        sidebar.appendChild(el);
    });
    //Class Selection Sidebar:
    const class_selection_sidebar = document.getElementById('class_selection_sidebar');
    const class_selection_detail = document.getElementById('class_selection_detail');
    const class_selection_data = [
        {
        title: "Gunslinger",
        sub: "Assault",
        body: `A swift and lethal master of firearms, the gunslinger dominates the battlefield through precision, speed, and killing power. Gunslingers often shoot first, ask questions later, and then finish it off with more shooting. 
        \n\n Generally Speaking, Gunslinger agents are the most damaging of any of the classes. This class is best paired with a Prepper, who can provide them with higher level firearms. `,
        href: "/classes/gunslinger",
        data_slug : "classes/gunslinger"
        },
        {
        title: "Close Combat Specialist",
        sub: "Defense",
        body: `A specialist focusing mostly on hand-to-hand combat. It takes a lot of courage to go toe to toe with monsters, so these agents are among the most resected... and the most frequently injured. \n\n
        Close combat specialists are often the most durable of than any other class. Fulfilling the male urge to be indestructible. This allows close combat specialists to rush into danger with a minimal fear of dying.`,
        href: "/classes/close-combat-specialist",
        data_slug : "classes/close-combat-specialist"
        },
        {
        title: "Prepper",
        sub: "All Around",
        body: `Initially, this was classified as a form of hoarding. Excepting instead of hoarding things like newspapers, these agents would hoard high-power rifles, explosives, and armour. \n\nPrepper agents generally have access to a significantly larger arsenal of military gear, high-grade armor, and heavy weaponry than any other class. While other classes rely on specialized or minimalist loadouts, the Prepper functions as a walking armory, keeping a massive surplus of combat-ready supplies on hand for almost any engagement.`,
        href: "/classes/prepper",
        data_slug : "classes/prepper",
        },
        {
        title: "Scholar of Mushroom",
        sub: "Magic",
        body: `Curiosity and a need to understand is what has driven humanity to create great gifts. We should use those gifts to help others \n\n Scholars of mushroom would be classified as a support class, they specialize in mind control, teleportation, and knowledge in the unnatural. They are often the first to uncover secrets and have a dark convoluted past.  `,
        href: "/classes/scholar-of-mushroom",
        data_slug : "classes/scholar-of-mushroom",
        },
        {
        title: "Scholar of The Great Machine",
        sub: "Magic",
        body: `We live in a machine, it takes us in, and spits us out. It's time to make that machine work for us. \n\n The silliest of all of the classes. Classified more into support, with the ability to create storage (great for dead bodies!) and the ability to create animated objects that can do tasks for you.   `,
        href: "/classes/scholar-of-the-great-machine",
        data_slug : "classes/scholar-of-the-great-machine",
        },
        /*
        It would be cool to have a stretchy monster class!!!
        Like Jake from adventure time, but different?
        */
    ];
    const BASE_DETAILED_STATS = {
        history: 0,
        drive: 30,
        pilot: 0,
        law: 0,
        search: 0,
        demolitions: 0,
        "computer science": 0,
        stealth: 10,
        dodge: 30,
        science: 0,
        alertness: 30,
        bureaucracy: 10,
        engineering: 0,
        firearms: 20,
        criminology: 0,
        forensics: 0,
        first_aid: 15,
        psychotherapy: 5,
        unnatural: 0,
        melee: 30,
        finance: 10
    };
    let number_of_boosts = 3;
    function reRenderDetailedStatsButtons() {
        let current_stats = structuredClone(BASE_DETAILED_STATS);
        // 3. Apply profession stats with things. 
        // 3.1 get the current profession selected.
        const divObject = document.querySelector('.item.active');
        console.log("divObject" + divObject);
        const jsonObjectIndex = divObject.dataset.index;
        const selectedProfession = items[jsonObjectIndex];
        const stats_to_apply = selectedProfession['skills'];
        for (const [stat_name , value] of Object.entries(current_stats)) {
            stats_to_apply.forEach(stat => {
                if (stat.key_name == stat_name) {
                    current_stats[stat_name] = Math.max(value , stat.percent);
                }
            });
        }
        const detailsBoostButtons = document.querySelectorAll(".detail-boost-button");
          detailsBoostButtons.forEach((button) => {
            let name = button.getAttribute('name');
            if (current_stats.hasOwnProperty(name)) {
                if (button.classList.contains("active")) {
                    button.textContent = Math.min(current_stats[name] + 30 , 80);
                }
                else {
                    button.textContent = current_stats[name];
                }
            }
        });
        const numberBoostsLabel = document.querySelector("#number-of-boosts-label");
        numberBoostsLabel.textContent = "Number of Boosts Left: " + number_of_boosts;
    }
    document.querySelectorAll(".detail-boost-button").forEach((button) => {
        // add the event listenerf
        button.addEventListener('click' , () => {
            if (button.classList.contains("active")) {
                number_of_boosts += 1;
                button.classList.remove("active");
            }
            else {
                if (number_of_boosts > 0) {
                    button.classList.add("active");
                    number_of_boosts -= 1;
                }
            }
            reRenderDetailedStatsButtons();
        });
    });
    // 4. For each button if clicked, have it toggle on or off, have stats reflect that, and stuff. 
    class_selection_data.forEach((item , index) => {
        let el = document.createElement('div');
        el.className = 'class_selection_item';
        el.dataset.index = index;
        el.innerHTML = `<strong>${item.title}</strong><br><small>${item.sub}</small>`;
        el.addEventListener('click', () => {
            document.querySelectorAll('.class_selection_item').forEach(n => n.classList.remove('active'));
            el.classList.add('active');
            let tableHTML = "";
            tableHTML += `<h2>${item.title}</h2><p><em>${item.sub}</em></p><hr>` +
                item.body.split('\n\n').map(p => `<p>${p}</p>`).join('');
            tableHTML += `<a target="_blank" href="${item.href}" class="internal internal-link" data-slug="${item.data_slug}">${item.title} Class Details</a>`;
            // Below is example a link taken from element inspector. Should intigrate with wuartz 5. 
            // NOTE: This does not provide the hover for some reason. Look into this laterrrrr.
            /*
            <a href="/classes/gunslinger" class="internal internal-link" data-slug="classes/gunslinger">Gunslinger</a>
            */
            class_selection_detail.innerHTML = tableHTML;
            // FOr now this can be a summary with link to full document. 
        });
        class_selection_sidebar.appendChild(el);
    });
    const charSheetCards = document.querySelectorAll('.char-sheet-card');
    // We'lll have it save then update the current key.
    function updateCardDisplay() {
    charSheetCards.forEach(card => {
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
    function getNewCharSheetObject() {
        // 1. Scan all name inputs and grab.
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
        // 2. Scan and grab all detail boost buttons and grab.
        const detailsBoostButtons = document.querySelectorAll(".detail-boost-button");
        detailsBoostButtons.forEach(curr_button => {
            const key =  curr_button.name;
            data[key] = curr_button.textContent;
        });
        console.log(data);
        // 3. Grab the classname and replace the class detail with it. 
        data['class_info'] = document.querySelector(".class_selection_item.active").textContent;
        // 4. Grab core stats and add those. 
        data['strength'] = coreStatsData[0];
        data['constitution'] = coreStatsData[1];
        data['dexterity'] = coreStatsData[2];
        data['intelligence'] = coreStatsData[3];
        data['power'] = coreStatsData[4];
        data['charisma'] = coreStatsData[5];
        data['current_health'] = coreStatsData[1]/5;
        data['current_willpower'] = coreStatsData[4]/5;
        data['current_sanity'] = data['power'];
        data['breaking_point'] = data['power'] / (data['power']/5);
        data['inventory'] = "Cell Phone, Wallet, Drivers License, Car Keys."
        // 6. serializing and saving the json as a string.
        return JSON.stringify(data);
    }
    updateCardDisplay();
    /*
    Ability to draw charicter usig a mouse. 
    */
    charSheetCards.forEach(card => {
        card.addEventListener('click', () => {
            updateCardDisplay();
            card.className = 'char-sheet-card-selected';
            const keyName = card.getAttribute('data-value');
            // Start gathering the charicter infor.
            const charSheet = getNewCharSheetObject();
            console.log("");
            localStorage.setItem(keyName , charSheet);
            localStorage.setItem("currentCharSheetKey" , keyName);
            // swap to the char sheet.
            window.location.href = "/classes/character-sheet";
        });
    });
    document.querySelector("#selectSheetBtn").addEventListener('click' , ()=> {
    });
  })();
</script>