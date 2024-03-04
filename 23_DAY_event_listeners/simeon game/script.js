/* 
step 1: key press => game start

step 2: btn flash + level 1

step 3:track gameSeq['yellow','red','yellow','yellow']

step: 4: each level track the usersequence[] and match the game sequense.
if math does not same the end the game and give the result to show your achievement.
else: repeate the userSequence and levelup.


*/

let gameSeq=[];
let userSeq=[];
let started = false;
let level =0;
let h2 = document.querySelector('h2');
let btns=['yellow','red','purple','pinck']



document.addEventListener('keypress',function() {
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
    
});
function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    // rand btn choose
   let randIdx = Math.floor(Math.random()*3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randBtn);
   gameSeq.push(randColor);
   console.log(gameSeq);

   gameFlash(randBtn);
}
function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },250)
}
function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> </br> Press any kye to start. `;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";  
        },150);
        reset();
    }
}
function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor= btn.getAttribute("id");
    // console.log(userColor)
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}