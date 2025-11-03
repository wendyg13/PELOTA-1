let nuevaPelota, otraPelota, otraMas;

function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    nuevaPelota = new Pelota();
    otraPelota = new Pelota();
    otraMas = new Pelota();
}

function draw(){
    background(150);
    nuevaPelota.actualizar();
    nuevaPelota.visualizar();

    otraPelota.actualizar();
    otraPelota.visualizar();
    
    otraMas.actualizar();
    otraMas.visualizar();
} 

