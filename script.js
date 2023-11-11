
 var timer=6;
var score=0;
var hitrn=0;
function increaseScore()
{
    score+=10; 
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
        hitrn= Math.floor(Math.random()*10);     
        document.querySelector("#hitval").textContent= hitrn;
    }

function makeBubble(){
    clutter="";
for(var i=1;i<=126;i++)
{
    rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;
    
}

document.querySelector("#pbtm").innerHTML=clutter;
} 
    
function runTimer(){
  var timerint=  setInterval(function(){
       if(timer>0)  {
        timer--;
       }    
       else
       {
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML="<h1>Game over!</h1>";
       }  
       document.querySelector("#timerval").textContent=timer;
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
//console.log(Number(dets.target.textContent));
var clickedNum=(Number(dets.target.textContent));
if(clickedNum===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
});

runTimer();
makeBubble();
getNewHit();
