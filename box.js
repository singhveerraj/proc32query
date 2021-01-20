class Box {
    constructor(x,y,width,height) {
      var options = {
         restitution:1,
         density:1.2,
         friction:1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed < 4){
        var pos =this.body.position;
        
        push();
      rectMode(CENTER);
      fill("light blue");
      rect(pos.x, pos.y, this.width, this.height);
pop();

      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        fill(this.Visiblity);
      rect(this.body.position.x, this.body.position.y, this.width,this.height);
        pop();
      }
    }
  };
