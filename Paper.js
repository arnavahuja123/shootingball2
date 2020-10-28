  
class Paper{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic': false
          
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body);
      }
      display(){
        
         var pos = this.body.position;
         
         
         imageMode(CENTER);
         image(this.image,0,0,this.swidth,this.height, this.radius);
      
      }
    }