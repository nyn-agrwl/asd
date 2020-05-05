import Box from "/box.js";

var myCanvas= document.getElementById('myCanvas');
var context= myCanvas.getContext('2d');
var GAME_WIDTH= window.innerWidth;
var GAME_HEIGHT=window.innerHeight;


window.onload=function(){
    init()
    window.addEventListener('resize',init,false);   
}


var box=new Box(25,25);

myCanvas.addEventListener('touchstart',function(e){
         handle_one_touch();
        
},false);


function handle_one_touch(){
    box.jump();
}

function init(){
    context.canvas.width=GAME_WIDTH;
    context.canvas.height=GAME_HEIGHT;
    context.fillStyle='#32a879';
    context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);
}



var lastTime=0;

function gameLoop(timestamp){  
    var deltaTime=timestamp-lastTime;
    lastTime=timestamp;
    context.fillStyle='#32a879';
    context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    box.update(deltaTime);
    box.draw(context);
    requestAnimationFrame(gameLoop);    
}
gameLoop();