const NP = 100; 
let pelotas = [];


function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    for(let i = 0; i < NP; i++){
        pelotas[i] = new Pelota();
    }

    console.log(pelotas);
}

function draw(){
    background(100, 50, 200);
    for(let i = 0; i < NP; i++){
        pelotas[i].actualizar();
        pelotas[i].visualizar();
    }
}

