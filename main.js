function preload() {
    
}
function setup() {
canvas=createCanvas(400,500);
background("green")
canvas.position((screen.width/2)-200,50)
video=createCapture(VIDEO)
} 
function draw() {
image (video,0,0,250,250)
fill("black")
square(160,230,40)
square(200,230,40)
square(200,270,40)
square(240,270,40)
square(120,270,40)
square(160,270,40)
square(120,310,40)
square(240,310,40)
square(90,160,70)
square(240,160,70)
}