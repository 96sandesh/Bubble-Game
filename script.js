let timer=30;
let score=0;
let hitrn;
function makeBubble(){
    let clutter="";
    for (let i = 1; i < 169; i++){
        let rn=Math.floor(Math.random()*20);
        clutter +=`<div class="bubble">${rn}</div>`;
       
    }
    document.querySelector("#panelBottom").innerHTML=clutter;
}
function getNewHit() {
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitrn;
    
}
function increaseScore() {
    score +=10;
    document.querySelector("#scoreVal").textContent=score;
}
function runTime() {
    let timeInt=setInterval(()=>{
        if (timer>=0) {
            document.querySelector("#time").textContent=timer;
            timer--;
            
        } else {
            clearInterval(timeInt)
            document.querySelector("#panelBottom").innerHTML=`<h1>GAME OVER</h1>`;

            
        }
    },1000);
    
}
document.querySelector("#panelBottom").addEventListener("click",function(dets){
    let clickedNumber=Number(dets.target.textContent);
    if (clickedNumber===hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();
        
    }
})

getNewHit();
runTime();
makeBubble();