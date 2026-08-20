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
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
  </filter>
</svg>


## Loosing Sanity
Agents loose sanity over time. Agents roll sanity when they encounter something they don't understand or are horrified by. What this is is up to DM discretion. Agents make a sanity roll by rolling their "Current Sanity". This can result in several things.

| Sanity Roll Outcome | Result                                                                     |
| ------------------- | -------------------------------------------------------------------------- |
| Critical Failure    | Player goes temporarily insane and player looses sanity.                   |
| Failure             | Player looses sanity.                                                      |
| Success             | Nothing.                                                                   |
| Critical Success    | Player feels inspired or happy, roll sanity, and add half of that sanity.  |



## Going past a breaking point
If a players current sanity goes past a breaking point, three things happen.
1. Their breaking point is reset to their current sanity minus their max willpower.
2. They roll a 1d4 to see what temporary insanity they get.
3. The agent contracts a mental disorder of their choice.

## Temporary insanity

The agent rolls a 1d4, and then one of the following happens. This occurs when an agent is reduced to zero willpower, or when they are going past a breaking point.

| Dice | Name     | Duration | Details                                                            |
| ---- | -------- | -------- | ------------------------------------------------------------------ |
| 1    | Flee     | 3 Turns  | Agent tries to get away, in any direction, as fast as possible.    |
| 2    | Submit   | 3 Turns  | Agent curls up into a ball and passes out.                         |
| 3-4  | Lash out | 3 Turns  | Agent enters a blind rage, and attacks the nearby, closest thing.  |


## Mental Disorders
These are semi-permanent affections that an agent takes. 

![[night-walk.png]]

| Mental Disorder       | Details                                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schizophrenia         | Agent experiences auditory or visual hallucinations. Every hour, the player rolls sanity. If they fail, they hallucinate an entity of the agents choice.                                                          |
| Anxious panic attacks | Agent experiences panic attacks. If an agent critically fails a roll  reduce their willpower by a 1d4. If willpower gets to zero, the agent resets it to full and experiences temporary insanity.                 |
| Minor Addiction       | Your agent is addicted to a substance of their choice. If they are unable to access their addiction for 24hrs, they receive a -20% stat de-buff. Their nest mental disorder will be a guaranteed Major addiction. |
| Major Addiction       | The agents physical health is starting to receive the damaging effects of a major addiction. Strength, charisma, and dexterity are at a permanent -10%. Requires a minor addiction first.                         |
| Claustrophobia        | For every 10 minutes an agent is inside a enclosed space they take 1d4 willpower damage. If willpower gets to zero, the agent resets it to full and experiences temporary insanity.                               |
| Agoraphobic           | For every 10 minutes an agent is inside a open space they take 1d4 willpower damage.  If willpower gets to zero, the agent resets it to full and experiences temporary insanity.                                  |
| Anorexia              | The Agent has difficulty eating food, as a result they are anemic, and have reduced core stats.<br>Strength at -5%<br>Dexterity at -5%                                                                            |
| PTSD                  | The agent experiences PTSD. At the start of each combat, reduce their willpower by 1d6. If willpower gets to zero, the agent resets it to full and experiences temporary insanity.                                |
| Depression            | During a home scene, roll sanity. If a critical failure, their home scene is cancelled. Otherwise, nothing happens.                                                                                               |
