let userseq = [];
let gameseq = [];
let highscore = [];
let randcol = ["right","left","rig2","lef2"];
let level = 0;
let hig = 0;
let started = false;
document.addEventListener("keydown",function(event){
    if(started==false){
        started=true;
        levelUp();
    }
});
btnflash = function(btn){
    btn.classList.add("wig");
    setTimeout(function(){
        btn.classList.remove("wig");
    },100);
}
let p = document.querySelector('p');
function levelUp(){
    level++;
    p.innerHTML = `Level ${level}`;
    let me = Math.floor(Math.random()*3);
    let ma = randcol[me];
    gameseq.push(ma);
    console.log(gameseq);
    let btn = document.querySelector(`.${ma}`);
    btnflash(btn);
}
function reset(){
    level = 0;
    gameseq = [];
    userseq = [];
    started = false;
    for(sc of highscore){
        if(hig<sc){
            hig = sc;
        }
    }
    let hs =document.getElementById("high-score");
    hs.innerHTML = hig;
}
function check(i){
    if(userseq[i]===gameseq[i]){
        if(userseq.length===gameseq.length){
            setTimeout(levelUp,1000);
            userseq = [];
        }
    }
    else{
        highscore.push(level);
        p.innerHTML = `Game Over,<b>Your score is ${level}</b> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}
function btndown(){
    let btn = this;
    btnflash(this);
    let me = btn.getAttribute(`id`);
    userseq.push(me);
    console.log(userseq);
    check(userseq.length-1);
}
let ga = document.querySelectorAll(".btn");
for(gas of ga){
    gas.addEventListener("click",btndown);
}
