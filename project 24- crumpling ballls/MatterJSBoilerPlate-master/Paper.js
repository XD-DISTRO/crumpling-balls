class Paper {

    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5, 
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.Body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.Body);

       
    }
    display()
    {
        var paperpos = this.Body.position
        push()
        translate(paperpos.x, paperpos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill(255, 0, 255)
        ellipse(0, 0, this.r, this.r)
        
        pop()
       

    }
}
var paperObject = this.Body
function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.Body, paperObject.Body,position,{x:85,y:-85})
    }
}