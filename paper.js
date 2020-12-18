class Paper{
constructor(x,y,r,options){

var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2,
}
this.x = x;
this.y = y;
this.r = 70;
this.body = Bodies.circle(this.x,this.y,70,options);
this.image = loadImage("sprites/paper.png");
World.add(world,this.body)

}
display(){
var paperpos = this.body.position;
push ()
translate (paperpos.x,paperpos.y);
rectMode(CENTER);
strokeWeight(5);
stroke("purple");
fill (255,0,255)
image(this.image,0,0,70,70);
}
}

