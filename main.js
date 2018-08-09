function setup(){
    createCanvas(1000,700)
    background ('black')
}

//position of ship
var x = 0;
var y = 300;
var yspeed = 20;
var xspeed = 10;
var x1 =x;
var y2speed = 20;
var x2speed = 10;


// positon of ship 
// x =  Math.floor(Math.random())
function draw(){
    background('black')
    fill('aqua')
    ellipse(x,y,190,190) 

    if(keyCode===68){
        fill("red");
        ellipse(x1,y, 30,30); //
        x1 = x1 + xspeed;
    }
    if(x1===1000){
        x1=x
    if(keyCode===32){

    }
}


speed=10;

function keyPressed(){
    if(keyIsPressed === true &&keyCode===87){ //w key
        
        y = y - yspeed
        // if (y > 0 || y < 0)  {
        //   y = 0;
        // }
    }
    if(keyIsPressed === true &&keyCode===83){ //s key
    
        y = y + yspeed
        // if (y > 700 || y < 0)  {
        //     y = 1000
        // }
    }
    if (keyCode ===65){
let health = document.getElementById("health")
health.value -= 10; //Or whatever you want to do with it.
    if (health.value ===0){
        alert("GAME OVER");
    }
}
    if (keyCode ===68){
        let health = document.getElementById("health")
        health.value += 10; //Or whatever you want to do with it.
            if (health.value ===0){
                alert("GAME OVER");

}   
    }

}



//side 
// x = x + xspeed;

//SECOND SHIP

var x3 = 1000;
var y3 = 300;
var y3speed = 20;
var x3speed = -10;
var x4 = x3;


  	fill('aqua')
    ellipse(x3,y3,190,190) 

    if(keyCode===37){
        fill("red");
        ellipse(x4,y, 30,30); //
        x4 = x4 + x3speed;
    }
    if(x4===1000){
        x4=x3
    }
    if(keyCode===37){
        
    }
    }


speed=10;

function keyPressed(){
    if(keyIsPressed === true &&keyCode===38){ // UP arrow key
        
        y3 = y3 - y3speed
        // if (y > 0 || y < 0)  {
        //   y = 0;
        // }
    }
    if(keyIsPressed === true &&keyCode===40){ //down arrow key
    
        y3= y3 + y3speed
        // if (y > 700 || y < 0)  {
        //     y = 1000
        // }
    }
    if (keyCode ===65){
let health = document.getElementById("health")
let health2 = document.getElementById("health2")
health.value -= 10; //Or whatever you want to do with it.
    if (health.value ===0){
        alert("GAME OVER");
    }
}
    if (keyCode ===68){
        let health = document.getElementById("health")
        health.value += 10; //Or whatever you want to do with it.
            if (health.value ===0){
                alert("GAME OVER");

}   
    }

//side 
// x = x + xspeed;
}
function contact() {
    if(x1===x3&&y===y3){
        health2.value -= 20; }//Or whatever you want to do with it.
        if (health2.value ===0){
            alert("GAME OVER");
            alert("Player 1 WINSS!!!!");
        }
    if (x4===x&&y3===y){
        health.value -=20;}
        if (health.value ===0){
            alert("GAME OVER");
            alert("Player 1 WINSS!!!!");
    alert("GAME OVER");
    alert("Player 2 WINSS!!!!");
}    
}

