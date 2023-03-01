

const getUserChoice = userInput  => {
  userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error!');
 }
}
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  document.getElementById('computerScore').style.display = "";
  switch (randomNumber) {
    case 0:
      return 'rock';
      //set image of comp choice to rock
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

let userScore = 0;
let computerScore = 0;

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
  return document.getElementById("result").innerHTML = "You tied with the computer!"
  
 } 
 
 if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    computerScore++;
    document.getElementById('computerScore').innerHTML = computerScore;
    return document.getElementById("result").innerHTML = "The computer won!";
   
        //set picture of result to Comp Winner
  } else {
    userScore++;
    document.getElementById('playerScore').innerHTML = userScore;
    return document.getElementById("result").innerHTML = "You won!";
    
    //set picture of result to Human Winner
  }
 }
 if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    computerScore++;
    document.getElementById('computerScore').innerHTML = computerScore;
        return document.getElementById("result").innerHTML = "The computer won!";
   
  } else {
    userScore++;
    document.getElementById('playerScore').innerHTML = userScore;
    return document.getElementById("result").innerHTML = "You won!";
  }
 }
 if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    computerScore++;
    document.getElementById('computerScore').innerHTML = computerScore;
        return document.getElementById("result").innerHTML = "The computer won!";
   
  } else {
    userScore++;
    document.getElementById('playerScore').innerHTML = userScore;
    return document.getElementById("result").innerHTML = "You won!";
  }
 }
}

const checkWinner = () => {
  if (userScore === 10) {
    alert("You won!!!!!!");
  } else if(computerScore === 10) {
    console.log(computerScore);
    alert("The computers are taking over the world!!!!!");
  }


}

 function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("computerScore").innerHTML = computerScore;
}

const playGame = (choice) => {
   const userChoice = getUserChoice(choice);
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
   checkWinner();
};









