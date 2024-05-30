document.addEventListener("DOMContentLoaded", function(){
  createBoard(32);
  getSize();
  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", function(){
      let size = getSize();
      createBoard(size);
  })


})
  function createBoard(size){
    let board = document.querySelector(".board");
   
    board.style.gridTemplateColumns = `repeat($(size), 1fr)`;
    board.style.gridTemplateRows = `repeat($(size), 1fr)`; 
  
    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
      let div = document.createElement("div");
      div.style.backgroundColor = "yellow";
      board.insertAdjacentElement("beforeend", div);
    }

} 

function getSize(){
  let input = prompt ("What will the size of the board be?");
  let message = querySelector("#message");
  if (input == ""){
      message.innerHTML = "Please, type a number";

  }
  else if (input < 0 || input >100){
    message.innerHTML = "Please, type a number between 1 and 100";
  }
  else{
    message.innerHTML = "Now you can play";
  }
}