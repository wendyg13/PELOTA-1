class Pelota{

    constructor(){
  
        this.diam = random(10, 150);
        this.rad = this.diam / 2;

        this.posx = random(this.rad, width - this.rad);
        this.posy = random(this.rad, height - this.rad);

        this.velx = random (-5, 5);   
        this.vely = random (-5, 5);
        
        this.nuevocolor = color(random(180,270), random(50, 90), random(245, 300), 100);
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
    stroke(120,59,100);
    strokeWeight(5);
    circle(this.posx, this.posy, this.diam);
    }

}