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
<img src="./handler.png" width=300px;>


A middle aged man with a potbelly, he wears a cowboy hat. He also has an affinity for donuts. Thick southern accent.


__Stats__
HP: 17
Level 10 Prepper
- FIREARMS : 65%  1d12 (Colt Viper)
- INT      : 75% 
- Charisma (60%)
- Unnatural (50%)
- All other stats 50%
