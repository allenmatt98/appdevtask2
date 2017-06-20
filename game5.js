var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var y=canvas.height-10;
var x=10;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var rad=10;





window.onload = function() {

    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);
}




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 38){
        upPressed = true;
    }
    else if(e.keyCode == 40){
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }

 else if(e.keyCode == 38){
        upPressed = false;
    }
    else if(e.keyCode == 40){
        downPressed = false;
    }
}


function drawhero()
{
ctx.beginPath();
ctx.arc(x, y, rad, 0, Math.PI*2, false);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
}






function draw() {
    ctx.clearRect(x-13, y-13, 25, 25);
    drawhero();
    if(rightPressed && x < canvas.width-rad && (x<375 || y<243) && ((x<280 || x>410) || (y<105 || y>220)) && ((x<105 || x>265) || (y<190 || y>333)))
        x+=2;
    if(leftPressed && x-rad>0 && (x>322 || (y<377 || y>440)) && ((x>265 || x<115) || (y<190 || y>333)) && ((x>429 || x<296)  || (y>210 || y<110)) && (x>417 || (y>63)) )
        x-=2;
    if(upPressed && y-rad>0 && (x>315 || (y>453 || y<363)) && (x>415 || y>81) && ((x<115 || x>255) || (y>338 || y<195)) && ((x<290 || x>425) || (y>225 || y<105)))
        y-=2;
    if(downPressed && y < canvas.height - rad && (x>315 || (y>453 || y<363)) && ((x<115 || x>255) || (y>338 || y<188)) && ((x<290 || x>425) || y>225 ) && (y<245 || x<380))
        y+=2;

    if(x>450 && y<50)
    {
      clearInterval(y);
    reset();
    }



}

 var y=setInterval(function(){draw()},10);

function reset()
{
    x=10;
    y=canvas.height-10;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawhero();
    var img2 = document.getElementById("next");
    ctx.drawImage(img2, 0, 0);


    function drawnext() {
    ctx.clearRect(x-13, y-13, 25, 25);
    drawhero();
    if(rightPressed && x < canvas.width-rad && (x<114 || (y<124 || y>240)) && (x<176 || y>83) && (x<347 || y<36))
        x+=2;
    if(leftPressed && x-rad>0 && (x>405 || (y<317 || y>406)) && (x>261 || y>85) && (x>434 || y<35))
        x-=2;
    if(upPressed && y-rad>0 && (x>405 || y>405) && (x<114 y>239) && ((x<176 || x>261) || y>83))
        y-=2;
    if(downPressed && y < canvas.height - rad && (x>405 || y<317) && (x<114 || y<124) && ((x<347 || x>434) || y<35)
        y+=2;

}
setInterval(drawnext,10);
}






