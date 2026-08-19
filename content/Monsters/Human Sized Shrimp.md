
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

![[human-shrimp.png]]

These are large human sized shrimp that live in the shrimp dimension. They are usually not aggressive, and will babble at the players in "shrimp language".

### Understanding the shrimp
The shrimp making sharp clicking noises. 
* Successful Unnatural Roll -> Player understand the gist of what they are saying.
* Successful History Roll -> The shrimp talk in an outdated version of morse code. 

### Combat
Human sized shrimp will try to run away when faced with combat, if backed into a corner they will bite back. 
10hp
* Bite (1d6) 50%
* Run away 30%
* All other core stats -> 50% 