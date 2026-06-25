function myRandom(){
  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".frstdie").setAttribute("src", "./images/dice"+player1+".png");
  document.querySelector(".scndie").setAttribute("src", "./images/dice"+player2+".png");  

  if (player1 > player2){
    document.querySelector(".div-Header h2").textContent = "Player 1 Won the Game!";
  }else if(player1 < player2){
    document.querySelector(".div-Header h2").textContent = "Player 2 Won the Game!";
  }else{
    document.querySelector(".div-Header h2").textContent = "You Guys got a Draw!!";
  }
}

