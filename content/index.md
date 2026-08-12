---
title : Redline
cssclasses:
  - no-header
---

<!-- Hides the header information (So Obama can't see it). -->
<style>
nav.breadcrumb-container , p.content-meta , h1.article-title {
    display : None;
}
</style>


<div style="display: flex; justify-content: center; align-items: center;">
    <div id="canvas-container">
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.min.js"></script>
<script>
const min_radius = 50;
let blip_radius = min_radius;
let moldSpeed = 0.01;
const maxMoldSpeed = 0.2;
const moldAcceleration = 0.01;
const moldSpeedIncreaseInterval = 200;
// We could have the mold speed "accelrate" slowly.
//Could also have it start with lines. 
class mold {
    constructor(startingPosX, startingPosY, canvas_width, canvas_length, moldColor, ringDensity, size) {
        this.x = startingPosX;
        this.size = size
        this.y = startingPosY;
        this.r = 0.5;
        this.color = moldColor;
        this.ringDensity = ringDensity;
        this.canvas_width = canvas_width;
        this.canvas_length = canvas_length;
        this.heading = random(360);
        this.vx = cos(this.heading);
        this.vy = sin(this.heading);
        this.rotAngle = 45;
        this.rSensorPos = createVector(0, 0);
        this.fSensorPos = createVector(0, 0);
        this.lSensorPos = createVector(0, 0);
        this.sensorAngle = 45;
        this.sensorDist = 10;
        this.colorF = 0;
        this.colorR = 0;
        this.colorL = 0;
    }
    remakeHeading() {
        this.heading = random(360);
        this.vx = cos(this.heading);
        this.vy = sin(this.heading);
    }
    update() {
        this.vx = cos(this.heading);
        this.vy = sin(this.heading);
        this.x = (this.x + (this.vx * moldSpeed));
        this.y = (this.y + (this.vy * moldSpeed));
        if (this.x < 0) {
            this.x = this.canvas_width;
            this.remakeHeading();
        }
        else if (this.x > this.canvas_width) {
            this.x = 0;
            this.remakeHeading();
        }
        else {
            // do nothing
        }
        if (this.y < 0) {
            this.y = this.canvas_length;
            this.remakeHeading();
        }
        else if (this.y > this.canvas_length) {
            this.y = 0;
            this.remakeHeading();
        }
        else {
            // do nothing
        }
        // see if inside blip radius!!! 
        if (getDistance(this.x, this.y, mouseX, mouseY) < Math.floor(blip_radius * 0.8)) {
            // pick random angle and move to edge? 
            this.x = this.x + random(-100, 100);
            this.y = this.y + random(-100, 100);
        }
        this.rSensorPos.x = this.x + this.sensorDist * cos(this.heading + this.sensorAngle);
        this.rSensorPos.y = this.y + this.sensorDist * sin(this.heading + this.sensorAngle);
        this.lSensorPos.x = this.x + this.sensorDist * cos(this.heading - this.sensorAngle);
        this.lSensorPos.y = this.y + this.sensorDist * sin(this.heading - this.sensorAngle);
        this.fSensorPos.x = this.x + this.sensorDist * this.vx;
        this.fSensorPos.y = this.y + this.sensorDist * this.vx;
        let index, l, r, f;
        index = 4 * (d * floor(this.rSensorPos.y)) * (d * width) + 4 * (d * floor(this.rSensorPos.x));
        r = pixels[index];
        index = 4 * (d * floor(this.fSensorPos.y)) * (d * width) + 4 * (d * floor(this.fSensorPos.x));
        f = pixels[index];
        index = 4 * (d * floor(this.lSensorPos.y)) * (d * width) + 4 * (d * floor(this.lSensorPos.x));
        l = pixels[index];
        //get distance to other mold, and do stuff?
        //or get distance from center
        let xCenter = width / 2;
        let yCenter = height / 2;
        const ring_density = 200;
        const dist_from_blip = getDistance(this.x, this.y, mouseX, mouseY) + blip_radius;
        //distance from another mold.
        // this.colorF = (r + l + this.color) % 255;
        // this.colorR = (f + this.color) % 255;
        // this.colorL = (l + r + (this.size+10)) % 255;
        this.colorF = (this.color / (this.size + l + random(0,30))) % 255;
        this.colorR = (this.color / (this.size + r)) % 255;
        this.colorL = (l + r + (this.size*10)) % 255;
        const min_size = 3;
        const max_size = 7;
        // should be changed to be more interesting. Maybe we could add some centers? 
        const limit = 10;
        if ((f > limit) && (l > limit) && (r > limit)) {
            this.size = Math.min(max_size , this.size+3);
        }
        else {
            this.size = Math.max(this.size-1 , min_size);
        }
        if ((f > l) && (f > r)) {
            this.heading += 0;
        }
        else if (f < l && f < r) {
            if (random(1) < 0.5) {
                this.heading += this.rotAngle;
            }
            else {
                this.heading -= this.rotAngle;
            }
        }
        else if (l > r) {
            this.heading += -this.rotAngle;
        }
        else if (r > l) {
            this.heading += this.rotAngle;
        }
    }
    display() {
        noStroke();
        fill(256, this.colorF, this.colorR);
        ellipse(this.x % this.canvas_width, this.y % this.canvas_length, this.r * this.size, this.r * this.size);
    }
}
function getDistance(x1, y1, x2, y2) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
let d; let molds = []; let moldNum = 500;
const viewportWidth = (window.innerWidth * 0.50);
const viewportHeight = (window.innerHeight * 0.20);
let points = [];
let spawnPoints = [];
let moldColor = 150;
let ringDensity = 900;
let clickType = false;
let = 3;
let size = 3;
const canvas_width = Math.floor(viewportWidth * 0.95);
const canvas_length = Math.floor(viewportHeight * 0.95);
let myFont;
function preload() {
    myFont = loadFont('arial.ttf');
}
function setup() {
    canvas = createCanvas(canvas_width, canvas_length);
    document.oncontextmenu = () => false
    canvas.parent("canvas-container"); // Attach to the div
    angleMode(DEGREES);
    d = pixelDensity();
    text_points = myFont.textToPoints('R e d l i n e', 0, 0, 70, {
        sampleFactor: 0.1,
        simplifyThreshold: 0
    });
    let xMin = Infinity, xMax = -Infinity;
    let yMin = Infinity, yMax = -Infinity;
    for (let pt of text_points) {
        if (pt.x < xMin) xMin = pt.x;
        if (pt.x > xMax) xMax = pt.x;
        if (pt.y < yMin) yMin = pt.y;
        if (pt.y > yMax) yMax = pt.y;
    }
    let textWidth = xMax - xMin;
    let textHeight = yMax - yMin;
    let offsetX = (width - textWidth) / 2 - xMin;
    let offsetY = (height - textHeight) / 2 - yMin;
    for (let pt of text_points) {
        pt.x += offsetX;
        pt.y += offsetY;
    }
    points_index = 0;
    for (let x = 0; x < ringDensity; x++) {
        const curr_point = text_points[points_index];
        console.log(curr_point);
        fill(256, 0, 0);
        ellipse(curr_point.x , curr_point.y , 5 , 5);
        molds[x] = new mold(curr_point['x'], curr_point['y'], canvas_width, canvas_length, moldColor, ringDensity, size);
        points_index = (points_index + 1) % text_points.length; 
    }
    setInterval(() => {
        moldSpeed += moldAcceleration;
        moldSpeed = Math.min(moldSpeed , maxMoldSpeed);
    }, moldSpeedIncreaseInterval);
}
function draw() {
    background(0, 5);
    loadPixels();
    make_gradient_circle('#000000', '#000000');
    for (let i = 0; i < molds.length; i++) {
        molds[i].display();
        molds[i].update();
    }
    make_gradient_circle('#000000', '#000000');
}
function make_gradient_circle(c_start, c_end) {
    let gradient = drawingContext.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, blip_radius);
    gradient.addColorStop(0, c_start); // Center color
    gradient.addColorStop(1, c_end); // Outer color
    drawingContext.fillStyle = gradient;
    noStroke();
    circle(mouseX, mouseY, blip_radius * 2);
}
</script>
<style>
.link-wrapper {
        padding: 8px;
        font-size: 0.9rem;
        text-decoration: none;
        font-weight: bold;
        font-family: var(--fontFamily);
        color: var(--dark);
        border : #c50303 2px solid;
        margin : 10px;
         display: inline-block;
        background-color : #2a0000;
        border-radius : 5px;
}
.link-wrapper:hover {
    background-color : #620202;
}
.good-link {
    background : none;
}
</style>


**Redline** is a covert group inside the United States federal government. Its mission is to investigate, contain, and conceal unnatural events, because the unnatural is real and it kills. The world of Redline is like our own, but beyond the edges of reality are powers that outstrip the human mind’s capacity for understanding. Sometimes those powers bleed through into our world and destroy every- thing they touch. It is your job to identify, secure and destroy these excursions before they can harm people.

<div style="display: flex; gap: 20px;">
  <div style="flex: 1; ">
    <!-- <h3>Graphic / Image</h3>
    <p>Your left side content goes here.</p> -->
    <img src="./interactive_char_sheet.png" >
  </div>
  <div style="flex: 1;">
    <h3>Create a Character!</h3>
    <p>Interactive character creator. Create a character and view it without making an account! </p>
    <div class='link-wrapper'>
        <a class="good-link" href="./Classes/Create-A-Character.html" >Create a Character →</a>
    </div>
  </div>
</div>

<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
    <h3>Read the rulebook</h3>
    <p>Blah, Blah, Blah. All the good stuff that the DM's want to read. Don't worry, you have all the dice, and the rules are easy to understand, I promise. </p>
    <div class='link-wrapper'>
        <a class="good-link"  href="./Core Rules/Introduction.html" >Read Online Rulebook →</a>
    </div>
  </div>
  <div style="flex: 1;">
    <img src="./second_image_main.png" >
  </div>
</div>

<div style="display: flex; gap: 20px;">
  <div style="flex: 1; ">
    <img src="./free_missions.png" >
  </div>
  <div style="flex: 1;">
    <h3>Made by Humans for humans</h3>
    <p>Generative AI was not used during the creative processes for making Redline. All source code and materials are open source and available at <a href="https://github.com/cbennington852/dnd_website" >GitHub</a></p>
    <div class='link-wrapper'>
        <a class="good-link" href="./free-missions/" >View Free Missions! →</a>
    </div>
  </div>
</div>

## Quick Links
Convenient Links for returning players
>[!danger]- <img width=auto height=16px src="red_upgrade.png" style="margin: 0px;"> Classes
 >* [[Gunslinger]] 
> * [[Prepper]]
> * [[Close combat specialist]]
> * [[Slick Talker]]
> * [[Abomination]]

> [!danger]- <img width=auto height=16px src="red_home.png" style="margin: 0px;"> Home life options
> Throughout the day, the normal adult tends to have this thing called "free time". Typically they spend this time doing fun or relaxing things. Not you. As a secret agent you spend this time preparing for the next mission.
> * **Stay on the case:** Your agent remains on the case, researching unknown objects they have collected at the expense of their own sanity.
> * **Learn a new Skill:** Increase your skill in an area, roll INT, on a success Add 1d10 on a failure add 1d6.
> * **Restore Sanity:** Conduct some sort of sanity regaining activity. Roll Sanity, on success gain 1d10, on failure gain 1d4 sanity.
> * **Purchase Items:** Your Character purchases things, and items. (Look at rulebook page 88)

<style>
    
.button-container {
  display: flex;
  gap: 16px;
}
.button-container button {
  flex: 1;
  padding: 12px 20px;
  background-color: transparent;
  color: #8e1519;
  border: 1px solid #8e1519;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
}
.button-container button:hover,
.button-container button:focus {
  background-color: #51020270;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
  transform: translateY(-2px);
}
</style>
<div class="button-container">
  <button onclick="window.location.href='./Classes/Create-A-Character.html';"><img width=auto height=16px src="create_sheet.png" style="margin: 0px;">       Create a Character</button>
  <button onclick="window.location.href='./Classes/Character-Sheet.html';"><img width=auto height=16px src="sheet.png" style="margin: 0px;">       View Character Sheet</button>
</div>
<style>
  /*PHONE ONLY*/
  @media only screen and (max-width: 767px) {
  table {
    font-size : x-small;
  }
}
</style>

# Playtests

Redline was originally a homebrew campaign before it was published online. Below are mission reports from the original playtesters. Each table is a different group. Missions where players seemed to have the most fun are published as free missions for Redline.
<div class='link-wrapper'>
    <a class="good-link" href="./free-missions/" >View Free Missions! →</a>
</div>
<!-- 
| Catagory                                                                                                                        | Description                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <html><br>  <p style="background-color: green; border-radius: 15px; padding: 15px; color: white;">Success</p><br></html>        | Mission went smoothly, monsters were slain, humans rescused. No major loss of life or cause for evacuation.                                              |
| <html><br>  <p style="background-color: grey; border-radius: 15px; padding: 10px; color: white;">Resolved</p><br></html>        | Things didn't exactly go perfectly, however everyone made it out okay. You gotta break a few eggs to make an omelet after all.                           |
| <html><br>  <p style="background-color: orange; border-radius: 15px; padding: 10px; color: white;">Unresolved</p><br></html>    | Something went wrong, civilians were lost, some sort of threat was left uncontained.                                                                     |
| <html><br>  <p style="background-color: red; border-radius: 15px; padding: 10px; color: white;">Critical Failure</p><br></html> | Massive present danger to society left unchecked. Agents actively made the situation worse or caused a major disaster. Further work needed to clean up.  | -->

## Team Ramen


| **Mission Name**    | **Description**                                                                                                                                   | **Result**                                                                                                      | **Status**                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| First things Last   | Redline friendly died several days ago of a heart attack. Sweep his apartment and remove any evidence of the the unnatural and Redline.   | Mission success, items contained, threats eliminated                                                            | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| Mayday , mayday     | A young child is found wandering through the woods. Face id's match them to a missing child case... from 45 years ago                             | Rangers killed, Child recovered                                                                                 | <html><br>  <p style="background-color: grey; border-radius: 15px; padding: 10px; color: white;">Resolved</p><br></html>        |
| Train to no-where   | Late night call. A suspected Wizard was flagged to have boarded a train(east bound Epharata - > Spokane 1:23 am). Eliminate all un-natural.       | Wizard Killed via direct trauma to testicles. All passengers killed. Train was transported to unknown location. | <html><br>  <p style="background-color: grey; border-radius: 15px; padding: 10px; color: white;">Resolved</p><br></html>        |
| A murder in red     | Crows have killed a Redline friendly; an surveyance researcher at oregon state university, agents dispatched to investigate. caution advised. | Anomaly unconfined. Agent blob was banned from oregon state university.                                         | <html><br>  <p style="background-color: red; border-radius: 15px; padding: 10px; color: white;">Critical Failure</p><br></html> |
| Cotton's Catastrophe      | Late night call, 1am. Another group of agents is in trouble. Get there as fast as possible. Recover the agents, eliminate all unnatural.          | Agent Cotton and briefcase recovered. Unattended interview job candidate was ducktaped to car front seat and driven into nearby bushed. Building demolished                                                                              | <html><br>  <p style="background-color: orange; border-radius: 15px; padding: 10px; color: white;">Unresolved</p><br></html>    |
| Return to Sender I         | A local hunter group have made an unusual catch. Recover the specimen. Eliminate all traces of the unnatural.                                     | Cabela employees  harassed. Agents accidentally created a new ocean full of dinosaurs.                         | <html><br>  <p style="background-color: red; border-radius: 15px; padding: 10px; color: white;">Critical Failure</p><br></html> |
| Return to Sender II    | Agents travel back to the ocean that they accidentally created in the middle of the colordao desert.                                              | Full retreat necessary, multiple agents downed. Agent Lomen's shin was snapped in half by a  snapping turtle. | <html><br>  <p style="background-color: orange; border-radius: 15px; padding: 10px; color: white;">Unresolved</p><br></html>    |
| Return to Sender III | Agents race to finish what they started.                                                                                                          | Agents return to Cabela's for more harassment. Ocean mostly drained. Bear suits worn.                           | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| Sketchway           | Agents are tasked with escorting Agent Cotton to pick up her medication from a local store.                                                       | Uncooked hotdogs and boner pills consumed. Homeless harassed. Hair exchanged for double phone.                  | <html><br>  <p style="background-color: orange; border-radius: 15px; padding: 10px; color: white;">Unresolved</p><br></html>    |
| Sketchway II        | Agents attempt to escape "the store".                                                                                                             |                                                                                                                 |                                                                                                                                 |

## The White Monster Consumers

| **Mission Name**              | **Description**                                                                                                                                                                    | **Summary**                                                                                                                                                                               | **Result**                                                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **First things Last**         | Redline friendly died several days ago of a heart attack. Sweep his apartment and remove any evidence of the the unnatural and Redline.                                    | Mission success, items contained, threats eliminated                                                                                                                                      | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 15px; color: white;">Success</p><br></html>        |
| **Walk in the Park**       | A young child is found wandering through the woods. Face id's match them to a missing child case... from 45 years ago                                                              | Brandon Recovered. Beer consumed. Medium conspiracy required. Park Rangers eviscerated.                                                                                                   | <html><br>  <p style="background-color: grey; border-radius: 15px; padding: 10px; color: white;">Resolved</p><br></html>        |
| **Cotton's catastrophe**      | Late night call, 1am. Another group of agents is in trouble. Get there as fast as possible. Recover the briefcase, eliminate all unnatural.                                        | Briefcase in agent hands. Building rigged to blow. Epstein giant killed. Agent GPS tracker signal lost.                                                                                   | <html><br>  <p style="background-color: grey; border-radius: 15px; padding: 10px; color: white;">Resolved</p><br></html>        |
| **Red Nest**                  | Agents investigate the underground structure they found previously. Recover the briefcase and agent cotton.                                                                        | Agent Cotton survived (somehow). Children rescued from "the diddy cave". Gooners slain. Building destroyed. Briefcase recovered.                                                          | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 15px; color: white;">Success</p><br></html>        |
| **Red Alert**                 | A boring simple mission, to rest and relax after the hectic last missions. Retrieve a box from storage, and then transport it to the location.                                     | Players prevented assassination attempt on the handlers life. Improvised brain surgery performed. Bears intimidated.                                                                      | <html><br>  <p style="background-color: grey; border-radius: 15px; padding: 10px; color: white;">Resolved</p><br></html>        |
| **Doomscrolling**             | A suspected Wizard was flagged to have boarded a Metro Bus (east bound Division 25 stop 3 @ 1:23 am). Bring him in alive.                                                          | Wizard recovered alive. Bus destroyed. Ad's endured.                                                                                                                                      | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **The bird mission**          | A Redline friendly, Professor Parsons was killed yesterday at his workplace (Oregon state university). His research was primarily into birds. Contain the unnatural.           | Aviary destroyed. Birds charred. Civilians killed. Agent John accidentally hotboxed himself.                                                                                              | <html><br>  <p style="background-color: grey; border-radius: 15px; padding: 10px; color: white;">Resolved</p><br></html>        |
| **Going shopping**            | Agents are tasked with getting agent cotton a haircut at the barbershop and converting a metal box into MP4 format.                                                                | North Korean APC acquired. Haircut successful. Agent Schnitzel was chewed on                                                                                                              | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **Red Rat**                   | The Handler has located the traitor that exposed his location in a previous mission (Red Alert). Considered armed an extremely dangerous. Hunt the traitor down and eliminate him. | Traitor killed. Passenger ferry transported to unknown dimension. Over 85 innocent civilians killed or maimed. Unknown number of civilians trapped in unknown dimension. Train destroyed. | <html><br>  <p style="background-color: red; border-radius: 15px; padding: 10px; color: white;">Critical Failure</p><br></html> |
| **The good stuff**            | A bizarre mass murder involving fire occurred in Forks Washington. Investigate. Prevent this from happening again.                                                                 | Several drug addicts killed. One taken hostage. Bartender rizzed.                                                                                                                         | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **The good stuff II**         | Agents pursue the cause of "the stuff"                                                                                                                                             | Agents saved by wizard. Threats neutralized. Agent John gained a pen pal.                                                                                                                 | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **Wait, you look like me.**   | An independent lab was broken into last night. The main suspects are .... team monster drinkers?                                                                                   | Doppelgangers were either killed by the team or died via their own hands. Local police officer discovered his new sexuality.                                                              | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **Wait, you look like me II** | The team travels back in time to tie up some loose ends                                                                                                                            | Agent Schnitzel and Agent John experienced friendly fire. Agent Schnitzel ate all of the eggs in the basket.                                                                              | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **Code Red**                  | A mysterious fog has surrounded the town of Port Angles. Agents have two objectives, recover agent cotton and remove port angles.                                                  | Port angles destroyed with excessive force. Free bird played.                                                                                                                             | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |

## Team Boiling Donut

| **Mission Name**              | **Description**                                                                                                                                 | **Summary**                                                                                                                                                                       | **Status**                                                                                                                      |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **First things Last**         | Redline friendly died several days ago of a heart attack. Sweep his apartment and remove any evidence of the the unnatural and Redline. | Mission success, items contained, threats eliminated                                                                                                                              | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **Hospital Incident**         | Agents are called to investigate reports of vampires at the Ohio state hospital.                                                                | Severe structural damage. Government required to step in and control situation. Several civilian deaths.                                                                          | <html><br>  <p style="background-color: red; border-radius: 15px; padding: 10px; color: white;">Critical Failure</p><br></html> |
| **No refunds**                | Agents investigate a strange amazon package.                                                                                                    | Agent Pine in critical condition. Building declared to have a gas leak; terrorist and unnatural force neutralized. Cover story used. Target killed. Unnatural presence contained. | <html><br>  <p style="background-color: grey; border-radius: 15px; padding: 10px; color: white;">Resolved</p><br></html>        |
| **Field Trip**                | Agents investigate reports of a strange humming statue located on MIT campus.                                                                   | Multiple structures destroyed, 150 civilians affected. Anomaly unconfined. Agent W killed.                                                                                        | <html><br>  <p style="background-color: red; border-radius: 15px; padding: 10px; color: white;">Critical Failure</p><br></html> |
| **A typical day in New York** | Agents investigate swarms of rats ripping new yorkers to shreds.                                                                                | Photograph cursed agent, requiring high-level intervention. No public knowledge. Containment successful through internal ops.                                                     | <html><br>  <p style="background-color: orange; border-radius: 15px; padding: 10px; color: white;">Unresolved</p><br></html>    |
| **Pawn E4**                   | Bizarre murders, with a jade statue being left as a calling card.                                                                               | Artifact was anomalous and deadly. Contained with minimal exposure. Statue mistaken for jesus.                                                                                    | <html><br>  <p style="background-color: grey; border-radius: 15px; padding: 10px; color: white;">Resolved</p><br></html>        |
| **Vapour Trails**             | Small town USA, multiple townspeople killed via a large animal. Massive three toes footprints left in the sand.                                 | Dinosaurs... agent white has been eaten. Unhealthy amounts of deep fried dinosaur consumed.                                                                                       | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **Do you smell something?**   | A chemical laboratory located in Montana has mysteriously exploded. Officials ruled it a suicide.                                               | Investigation into terrorist apartment revealed giant ants. Situation handled without wider exposure. Anomaly neutralized.                                                        | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **Flesh Town Incident**       | Sibling organization reports town infected with flesh-like growths. Dispatched "special" forces.                                                | Growths neutralized. Only one fatality; agent suicide.                                                                                                                            | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html>        |
| **Holy Item Recovery**        | An holy relic was stolen from the vatican. Agents dispatched to recover holy item and hostage.                                                  | Artifact destroyed. Hostage eliminated.                                                                                                                                           | <html><br>  <p style="background-color: green; border-radius: 15px; padding: 10px; color: white;">Success</p><br></html> |
