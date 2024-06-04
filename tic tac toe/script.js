let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");

let turn0=true;
let cnt=0;
const winpattern=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
const resetgame = () => {
  turn0=true;
  cnt=0;
  enableBoxes();
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turn0){
      box.innerText="O";
      turn0=false;
    }
    else{
      box.innerText="X";
      turn0=true;
    }
    box.disabled=true;
    cnt++;
    let winner=checkwinner();
    if(cnt==9 &&winner==null){
      alert("Match Draw");
    }
    
    
    
    
    
  });
  
  
});
const showwinner=(winner)=>{
  alert(`Congratulations to the winner ${winner}`);

};
let checkwinner=()=>{
  for(let pattern of winpattern){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!='' && pos3!='' && pos1==pos2 && pos2==pos3){
      showwinner(pos1);
      return true;
      
    }
  }
  
};
reset.addEventListener("click",resetgame);