var mouseEvent= "empty";
var lastPositionX,lastPositionY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_line=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
        mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
        mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
        mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_possition_X = e.clientX-canvas.offsetLeft;
    current_possition_Y = e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        
        console.log("last position of x and y coordinates");
        console.log("x = "+lastPositionX+" y = "+lastPositionY);
        ctx.moveTo(lastPositionX,lastPositionY);
        console.log("current position of x and y coordinates");
        console.log("x = "+current_possition_X+" y = "+current_possition_Y);
        ctx.lineTo(current_possition_X,current_possition_Y);
        ctx.stroke();
    }
    lastPositionX=current_possition_X;
    lastPositionY=current_possition_Y;
}
