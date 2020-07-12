    let TIMES = 520,
    ANGLE =  Math.PI * 2,
    WEIGHT = 5,
    currentAngle = 0;
 

window.onload = function(){
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerX = width / 2,
    centerY = height / 2;
    
    let update = test(context, centerX, centerY);

    setInterval(update, 1);
         
   }
function test(context, centerX, centerY){
 let angle  = 0;
 return function(){
      angle += .5;
//      angle = angle > ANGLE ? 0 : angle;
        var x =  Math.cos(angle) ,
            y = Math.sin(angle) ;

         context.beginPath();
         context.moveTo(centerX, centerY);
         context.lineTo(x * TIMES + centerX,  y * TIMES + centerY);
         context.stroke();
 
    } 

}

