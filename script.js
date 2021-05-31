const jerry= document.getElementById("jerry");
const bomb= document.getElementById("bomb");
var start= false;

function jump(){
    if(jerry.classList!="jump"){
    jerry.classList.add("jump");
    setTimeout(function(){
        jerry.classList.remove("jump");
    }, 500);
}


let isAlive= setInterval(function(){
    let jerryTop= parseInt(window.getComputedStyle(jerry).getPropertyValue("top"));
    let bombLeft=parseInt(window.getComputedStyle(bomb).getPropertyValue("left"));
    
    if(bombLeft<50 && bombLeft > 0 && jerryTop>=140){
        start=false;
        bomb.classList.remove("bombMove");

    }
}, 10); 
}

document.addEventListener("keydown", function (event) {
    
    if(start){
        if(event.key===" "){
            jump();
        }
        }
    else{
        if (event.key==="s"){
            bomb.classList.add("bombMove");
            start = true;
        }
    }
    
    
}); 

function start(){
   
}
function GameOver(){

}
