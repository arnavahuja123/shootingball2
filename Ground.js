class Ground {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:true

           
        }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = width;
  this.image = loadImage("sprites/ground.png");
    World.add(world,this.body);
}
display(){

    
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height);
   
 
 }
}