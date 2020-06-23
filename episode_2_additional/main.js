window.onload = function(){
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    TIMES = 20,
    ANGLE =  Math.PI * 2,
    WEIGHT = 5,
    centerX = width / 2,
    centerY = height / 2;

  // context.fillRect(0, 0, width, height);
//     context.translate(0, height / 2);
  //   context.scale(1, -1);
   
   

   for(var angle = 0; angle < ANGLE; angle += 0.5){
        var x =  Math.cos(angle) ,
            y = Math.sin(angle) ;
//       context.fillRect(x, y, WEIGHT, WEIGHT);  
         context.beginPath();
         context.moveTo(centerX, centerY);
         context.lineTo(x * TIMES + centerX,  y * TIMES + centerY);
         context.stroke();
         
   }


}
