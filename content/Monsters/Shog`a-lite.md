
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
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
  </filter>
</svg>

![[shot-a-lite.png]]


___Description___
* Tall. 8 ft
* Grey skin
* Red eyes
* lanky arms and legs

__Behavior___
These creatures do not talk, they communicate telepathically, and have no reason to speak to humans. Hostile. Will attack. 

##### Sanity
Seeing one of these for the first time requires a sanity check 
Success -> 0 sanity lost
Failure -> 1d6 sanity lost

___Stats___
5hp
* Unarmed (60%) 1d6
* Force Punch (60%) 1d6
* Mind Control (Target makes POW roll contested). This can be blocked by wearing tinfoil. 
* Teleport (Needs a 10 minute recharge. )