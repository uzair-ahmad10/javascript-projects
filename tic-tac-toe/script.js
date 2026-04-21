let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turn = true;
let count  = 0;

const resetGame = () =>{
    turn = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    count++;
    let winner = checkWinner();
    if(count === 9 && !winner){
      gameDraw();
    }
  });
});

const gameDraw = () =>{
  msg.innerText = 'Game was Draw';
  msgContainer.classList.remove("hide");
  disabledBoxes();
}

const showWinner = (posVal1) => {
  msg.innerText =`Congratulation, winner is ${posVal1}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const disabledBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () =>{
    for (let box of boxes ){
        box.disabled = false;
        box.innerText  = "";
    }
}

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
        disabledBoxes();
        return true;
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);