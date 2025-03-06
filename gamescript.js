let boxes=document.querySelectorAll(".game");
let resetBtn=document.querySelector(".next");
let finalmsg=document.querySelector(".winner");
finalmsg.classList.remove("ani");
resetBtn.classList.remove("anib");

let turnO=true;

let n=0;

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

function resetGame(){
    n=0;
    resetBtn.textContent="Reset Game";
    turnO="true";
    enableboxes();
    finalmsg.classList.add("hide");
}

function endGame(){
    if(resetBtn.textContent!="New Game"){
        finalmsg.textContent="NO Winner! Start a New Game.";
        finalmsg.classList.remove("hide");
        finalmsg.classList.add("ani");   
        resetBtn.textContent="New Game";
        resetBtn.classList.add("anib");
    }
}
boxes.forEach((box) =>{
    box.addEventListener("click",()=> {
        n++;
        if(turnO){
            box.textContent="O";
            turnO=false;
        }
        else{
            box.textContent="X";
            turnO=true;
        }
        box.disabled="true";
        checkWinner();
        if(n==9){
            endGame();
        }
    });
});


function checkWinner(){
    for(pattern of winPatterns){
        let val1=boxes[pattern[0]].textContent;
        let val2=boxes[pattern[1]].textContent;
        let val3=boxes[pattern[2]].textContent;
        if((val1!="")&&(val2!="")&&(val3!="")){
            if((val1===val2)&&(val2===val3)){
                if(val1=="X")
                finalmsg.textContent="The Winner is PlayerX.";
                else
                finalmsg.textContent="The Winner is PlayerO.";
            finalmsg.classList.remove("hide");
            finalmsg.classList.add("ani"); 
            resetBtn.textContent="New Game";
            resetBtn.classList.add("anib");           
            disableboxes();
            }
        }
    }
};
function disableboxes(){
    boxes.forEach((box) =>{
        box.disabled=true;
    });
}

function enableboxes(){
    boxes.forEach((box) =>{
        box.disabled=false;
        box.textContent="";
    });
}

resetBtn.addEventListener("click",resetGame);