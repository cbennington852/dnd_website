
  <style>


    #shell {
      display: grid;
      grid-template-rows: auto 1fr auto;
      height: 90vh;
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

    #viewport { overflow: hidden; }

    #pages-track {
      display: flex;
      height: 100%;
      transition: transform .35s ease;
    }

    #pages-track > div {
      flex: 0 0 100%;
      padding: 40px;
      overflow-y: auto;
    }

    .skill-list {
        padding-left: 60px; 
    }

    #sidebar { width: 200px; border-right: 1px solid #ccc; overflow-y: auto; }

    .item { padding: 12px 16px; cursor: pointer; }
    .item:hover { background: #2a2a2a; }
    .item.active { background: #454545; font-weight: bold; }

    #detail { flex: 1; padding: 24px; overflow-y: auto; }
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
        <div style="display: flex;">
            <nav id="sidebar"></nav>
            <main id="detail"><p>Select an item to view details.</p></main>
        </div>
      </div>      
      <div >
        <h1>Core Stats</h1>
        <div  class="chart-container">
            <svg class="radar-chart-dark"></svg>
        </div>
      </div>
      <div >
        <h1>Detailed Stats</h1>
        <p>This is the third page.</p>
      </div>
      <div >
        <h1>Identification Information</h1>
        <p>This is the third page.</p>
      </div>
      <div >
        <h1>Class</h1>
        <p>This is the third page.</p>
      </div>
      <div >
        <h1>Save your character sheet</h1>
        <p>This is the third page.</p>
      </div>
    </div>
  </div>
</div>
<footer>
    <button class="navigation-buttons" id="btn-prev">← Prev</button>
    <button class="navigation-buttons" id="btn-next">Next →</button>
</footer>
<script src="https://cdn.jsdelivr.net/npm/chart.xkcd@1/dist/chart.xkcd.min.js"></script>
<script>
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
      const pageWidth = headerElem.offsetWidth + counter.offsetWidth + 35; // That 35 is a magic number
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
        ]
        },
    ];
    const sidebar = document.getElementById('sidebar');
    const detail = document.getElementById('detail');
    const svg = document.querySelector('.radar-chart-dark');
    let coreStatsData = [85, 90, 75, 60, 75, 40]; // Example Values if not loading correctly
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
    items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'item';
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
        });
        sidebar.appendChild(el);
    });
  })();
</script>