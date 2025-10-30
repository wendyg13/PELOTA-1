let posx;
let posy;
let diam;
let rad;
let velx;
let vely;


function setup(){
    createCanvas(windowWidth, windowHeight);
    diam = random (50, 300);
    rad = diam/2;

    posx = random(rad, width - rad);
    posy =random(rad, height - rad);

    velx = random (-5,5);   
    vely = random (-5,5);
}

function draw(){
    background(150);
    pox += velx;
    posy += vely;

    circle(posx, posy, diam);

    if(posx > width - rad || velx < rad){
        velx *= -1;
    }

    if(posy > height - rad || vely < rad){
        vely *= -1;
    }

}