function setup(){
canvas=createCanvas(640,480)
canvas.position(150,150)
video=createCapture(VIDEO);
video.hide()
}
    
function draw(){
image(video,230,150,300,300)
fill(255,0,0)
stroke(255,0,0)
circle(50,50,80)
circle(600,50,80)
circle(600,400,80)
circle(50,400,80)

fill(0,255,0)
stroke(0,255,0)
rect(90,40,470,20)
rect(90,400,470,20)
rect(50,50,30,20)
rect(50,500,30,20)
}
    
function take_snapshot(){
save('isa.png')
}
