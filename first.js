let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newgamebtn=document.querySelector("#newbtn");
let messcontainer=document.querySelector(".mess");
let msg=document.querySelector("#msg");
let turnO=true; //Player O

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]

];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
       if(turnO===true){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;

       }
       box.disabled=true;
       checkwinner();
    });
    
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
}
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    messcontainer.classList.add("hide");
}
const showWinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    messcontainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner=()=>{
    for( patttern of winpattern){
        let pos1val=boxes[patttern[0]].innerText;
        let pos2val=boxes[patttern[1]].innerText;
        let pos3val=boxes[patttern[2]].innerText;
        if(pos1val!="" && pos2val!=""  && pos3val!=""){
            if(pos1val=== pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
    
}
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);




