let player = document.querySelectorAll("p");
let result = document.querySelector("h1")
let player1 = prompt("What is player 1 name ?");
let player2 = prompt("What is player 2 name ?");
alert(`Welcome ${player1}🔥 and ${player2}🔥 to my Game 🎲 `)
player[0].innerHTML = `${player1}`
player[1].innerHTML = `${player2}`




letsDice = function () {
  player[1].classList.remove("winner");
  player[0].classList.remove("winner");
  let dicePlayer1 = Math.floor(Math.random() * 6) + 1 ;
  let dicePlayer2 = Math.floor(Math.random() * 6) + 1 ;
  let img1 = document.querySelector(".img1");
  let img2 = document.querySelector(".img2");


  img1.setAttribute("src",`./images/dice${dicePlayer1}.png`)
  img2.setAttribute("src",`./images/dice${dicePlayer2}.png`)

  if(dicePlayer1 > dicePlayer2 ){
    result.innerHTML=`Winner is ${player1}  🎉`;
    player[0].classList.add("winner");
    player[1].classList.remove("winner");
    } 
    else if(dicePlayer1 < dicePlayer2 ){
    result.innerHTML=`Winner is ${player2}  🎉`
    player[1].classList.add("winner");
    player[0].classList.remove("winner");

    } 
    else {result.innerHTML=`Draw  ⚔️`;
    player[1].classList.remove("winner");
    player[0].classList.remove("winner");
  }
}