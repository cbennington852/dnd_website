
A Delta green specialist focusing mostly on melee abilities. 




<script src="https://cdn.jsdelivr.net/npm/chart.xkcd@1/dist/chart.xkcd.min.js"></script>
<script>
    (function () {
  const svg = document.querySelector('.radar-chart-dark');

  new chartXkcd.Radar(svg, {
    title: 'My Actual vs. Perceived Tech Skills',
    data: {
      // The skills/attributes you are measuring
      labels: ['JavaScript', 'CSS/Flexbox', 'Git/GitHub', 'SQL/Databases', 'StackOverflowing', 'Debugging'],
      datasets: [{
        label: 'Confidence Level',
        data: [85, 90, 75, 60, 99, 80],
      }, {
        label: 'Actual Competence',
        data: [40, 15, 20, 45, 95, 30],
      }]
    },
    options: {
      showLabels: true,
      // You can customize the color palette if you want to spice things up
      // dataColors: ['#333333', '#ff0000'] 
      strokeColor: 'white',
      backgroundColor: 'black',
    }
  });
</script>



<div  class="chart-container-2">
<!-- chart.xkcd renders inside an svg element -->
<svg   class="stacked-bar-chart"></svg>
</div>


<script>
const svgStackedBar = document.querySelector('.stacked-bar-chart');

// Change "StackedBar" to "HorizontalBar"
new chartXkcd.StackedBar(svgStackedBar, {

  title: '', // No title
      xLabel: '', // No labels
      yLabel: '',
  data: {
    labels: ['Willpower',],
    datasets: [{
      label: 'Current',
      data: [1,],
    }, {
      label: 'Max',
      data: [1,],
    },
    {
      label: 'Current',
      data: [1,],
    }, {
      label: 'Max',
      data: [1,],
    }, 
    {
      label: 'Current',
      data: [1,],
    }, {
      label: 'Max',
      data: [1,],
    }, 
    {
      label: 'Current',
      data: [1,],
    }, {
      label: 'Max',
      data: [1,],
    }  ],
  },
  options: {
      showLabels: false, // Hides the bar labels
      // You can customize the color palette if you want to spice things up
      dataColors: ['#621000', ],
      strokeColor: 'grey',
      backgroundColor: 'black'
    }
});
</script>
</iframe>

## 1  Mean right hook
 Unarmed combat rolls and melee weapons can be replaced by strength rolls. 
## 2. Base Level up 
+10% (2 pts) to any base stat. Example STR, CON, DEX...
## 3. Killer Instincts
* Killing monsters results in a 1d6 sanity gain
* Monsters surviving a fight with your charicter results in a 1d6 sanity loss.
## 4. Tough it out
Once per session, when taking damage greater than a d4, reduce that damage to a d4
## 5. Lethal blow
On a successful critical strike, roll again.
## 6. Razors Edge
Creation of a custom melee weapon
* 30% more accurate
or
* 1d6 more damaging