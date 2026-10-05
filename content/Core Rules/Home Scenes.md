<style>
img:not(.opt-out) {
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
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
  </filter>
</svg>




 ![[home-scene.png]]

  Throughout the day, the normal adult tends to have this thing called "free time". Typically they spend this time doing fun or relaxing things. Not you. As a secret agent you spend this time preparing for the next mission. Agents level up every other mission.

 * **Stay on the case:** Your agent remains on the case, researching unknown objects they have collected at the expense of their own sanity. [[Staying on the case]]
 * **Learn a new Skill:** Increase one of your detailed stats. roll Intelligence, on a success Add 1d10 on a failure add 1d6.
 * **Restore Sanity:** Conduct some sort of sanity regaining activity. Roll Sanity, on success gain 1d10, on failure gain 1d4 sanity. On a critical success gain 1d20 sanity, and cure a mental illness. On a critical failure gain nothing.
 * **Purchase Items:** Your Character purchases things, and items.
	 * [[Items & Gear/index|List of Things to buy]]
* **Drastic Actions:** Your agent takes a drastic action to prevent / ensure somthing happens. Refer to the [[Drastic Measures]]
