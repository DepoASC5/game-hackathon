let canvasWidth = window.innerWidth ;
let canvasHeight = window.innerHeight ;

function setup(){
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("sketch-holder");
background(0);
   

    stroke("black"); //default is "black"
    strokeWeight(5); //thickness in pixels
    
   
    fill("white");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);
    //top half
    fill("red");
    arc(width/2, height/2, 200,200, PI, 0, CHORD);

    //center
    fill("white");
    ellipse(width/2, height/2, 50);

    fill("black");
    ellipse(width/2, height/2, 25);

}