export default class Box{
    
    constructor(positionX , positionY){
        this.width=50;
        this.height=50;

        this.position={
            x:positionX,
            y:positionY
        };

    }

    draw(context){
        context.fillStyle='#2b2a26';
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
    }

    update(deltaTime){
        if(!deltaTime)
            return;
        this.position.y+= 60/deltaTime;
    }

    jump(){
        this.position.y-=90;
    }
}