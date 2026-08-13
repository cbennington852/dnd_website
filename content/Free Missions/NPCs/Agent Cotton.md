
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

A young blonde woman. She wears an FBI vest, and and an automatic UZI in her right gun holster. She sounds a little bit insane. Also a tiny bit forgetful. 

__Stats__
HP: 12 ... Regens at 2hp per hour unless damage is from burning.

10hp
Sanity ... 50
Level 10 Luck class.
- Firearms (85%)  1d12 + 10% Lethality (UZI )
- Intelligence (37%)
- Medicine ( 70% )
- Alertness (60%)
* Science  ( 80% )
* Forensic ( 70% )
- Charisma (60%)
- Unnatural (50%)
- All other stats 50%
