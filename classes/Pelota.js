class Pelota{

    constructor(){
  
        this.diam = random(20, 180);
        this.rad = this.diam / 2;

        this.posx = random(this.rad, width - this.rad);
        this.posy = random(this.rad, height - this.rad);

        this.velx = random (-5, 5);   
        this.vely = random (-5, 5);
        
        this.nuevocolor = color(random(0,270), random(50, 90), random(150, 300), 100);

        this.nuevocolorCirculo = color(random(100,200), random(0, 50), random(0, 200), 150);

        this.nuevocolorCirculito = color(random(0,100), random(0, 50), random(0, 100), 300);
    }

    actualizar(){
        
            if(this.posx > width - this.rad || this.posx < this.rad){
            this.velx *= -1;
            }

            if(this.posy > height - this.rad || this.posy < this.rad){
            this.vely *= -1;
            }

            this.posx += this.velx;
            this.posy += this.vely;

    }   

    visualizar(){
    fill(this.nuevocolor);
    stroke(20,59,100, 35);
    strokeWeight(6);
    circle(this.posx, this.posy, this.diam);

    fill(this.nuevocolorCirculo);
    stroke(20,59,100);
    noStroke();
    circle(this.posx, this.posy, this.diam / 1.5);

    fill(this.nuevocolorCirculito);
    noStroke();
    circle(this.posx, this.posy, this.diam / 3);
    }

}