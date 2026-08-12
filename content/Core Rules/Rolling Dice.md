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
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
  </filter>
</svg>

<img src="./dice.jpg" width="700" >

Redline uses a d100 based system. This means that you can play with any standard set of TTRPG dice. Players roll against their own stats, if the dice roll is below their stat, they fail. If it is below are equal to their stat, they pass. Double digits are always a critical.

Examples:

| Scenario                                                                              | Rolled | Outcome                                                                                                           |
| ------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| Agent Jane fires a gun at a park ranger. Her firearms stat is 65%                     | 43     | Agent Jane has passed the roll, and will hit the park ranger, and will now roll damage.                           |
| Agent Shnitzel attempts to flirt with the bartender. His charisma is 40%              | 53     | Agent Schnitzel has failed the roll. The bartender tells him to leave.                                            |
| Agent Pine attempts to hit the demon with this pickup truck. His drive skill is a 60% | 88     | Agent Pine has critical failed. He misses the monster entirely and crashes his car into the hospital behind it.   |
| Agent Brick attempts to climb an fence. His Strength is 70%                           | 33     | Agent Brick has critical successed. He does a triple backflip over the fence and finds a 20$ bill on the ground.  |


