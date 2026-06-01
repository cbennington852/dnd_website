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
    text_points = myFont.textToPoints('Uncover the Unnatural', 0, 0, 70, {
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


HERE WE WILL HAVE SOME SORT OF P5js element that is moving and grooving. 
Oh, also a summary with some cool text. 

<div style="display: flex; gap: 20px;">
  <div style="flex: 1; ">
    <!-- <h3>Graphic / Image</h3>
    <p>Your left side content goes here.</p> -->
    <img src="./interactive_char_sheet.png" >
  </div>
  <div style="flex: 1;">
    <h3>Create a Character!</h3>
    <p>Interactive and fast character creator. Create a character and view it without making an account! </p>
    <div class='link-wrapper'>
        <a class="good-link" href="./Classes/Create-A-Character.html" >Create a Character →</a>
    </div>
  </div>
</div>

<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
    <h3>Read the rulebook</h3>
    <p>Blah blanh blah, and a link to the rules. </p>
    <div class='link-wrapper'>
        <a class="good-link" >Read Online Rulebook →</a>
    </div>
  </div>
  <div style="flex: 1; border: white 2px solid;">
    <!-- <h3>Graphic / Image</h3>
    <p>Your left side content goes here.</p> -->
  </div>
</div>

<div style="display: flex; gap: 20px;">
  <div style="flex: 1; ">
    <!-- <h3>Graphic / Image</h3>
    <p>Your left side content goes here.</p> -->
    <img src="./play_testers.jpg" >
  </div>
  <div style="flex: 1;">
    <h3>Made by Humans for humans</h3>
    <p>Generative AI was not used during the creative processes for making {NAMMMMME LATTEERRR}. All source code and materials are open source and available at <a href="https://github.com/cbennington852/dnd_website" >GitHub</a></p>
    <p> ← The original playtesters. </p>
    <div class='link-wrapper'>
        <a class="good-link" >View Free Missions! →</a>
    </div>
  </div>
</div>



