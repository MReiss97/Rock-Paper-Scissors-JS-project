

const getUserChoice = userInput  => {
  userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error!');
 }
}
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); //Randomly chooses a number from 1-3
  document.getElementById('computerScore').style.display = ""; //Sets the computer score to 0
  switch (randomNumber) { 
    case 0: //If number 0 is chosen, computer chooses rock
      return 'rock';
    case 1: //If number 1 is chosen, computer chooses paper
      return 'paper';
    case 2: //If number 2 is chosen, computer chooses scissors
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
    computerScore++; //adds 1 to the computer score if computer wins
    document.getElementById('computerScore').innerHTML = computerScore;  //Sets the computer score visually to +1
    return document.getElementById("result").innerHTML = "The computer won!"; //This displays the result when the computer wins
   
  } else {
    userScore++; //adds 1 to the user score if user wins
    document.getElementById('userScore').innerHTML = userScore; //Sets the use score visually to +1
    return document.getElementById("result").innerHTML = "You won!"; //This displays the result when you win
    
  }
 }
 if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    computerScore++; //adds 1 to the computer score if computer wins
    document.getElementById('computerScore').innerHTML = computerScore; //Sets the computer score visually to +1
        return document.getElementById("result").innerHTML = "The computer won!"; //This displays the result when the computer wins
   
  } else {
    userScore++; //adds 1 to the user score if user wins
    document.getElementById('userScore').innerHTML = userScore; //Sets the use score visually to +1
    return document.getElementById("result").innerHTML = "You won!"; //This displays the result when you win
  }
 }
 if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    computerScore++; //adds 1 to the computer score if computer wins
    document.getElementById('computerScore').innerHTML = computerScore; //Sets the computer score visually to +1
        return document.getElementById("result").innerHTML = "The computer won!"; //This displays the result when the computer wins
   
  } else {
    userScore++; //adds 1 to the user score if user wins
    document.getElementById('userScore').innerHTML = userScore; //Sets the use score visually to +1
    return document.getElementById("result").innerHTML = "You won!"; //This displays the result when you win
  }
 }
}

const checkWinner = () => {
  if (userScore === 10) {
    alert("You won!!!!!!"); // If the user score is equal to 10, the alert you won appears
  } else if(computerScore === 10) {
    console.log(computerScore);
    alert("The computers are taking over the world!!!!!"); //If the computer score is equal to 10, the alert the computers are taking over the world appears
  }


}

function resetGame ()  {
  userScore = 0; //Sets the userScore back to zero
  computerScore = 0; //Sets the computerScore back to zero
  result = ""; //Sets the result to display no text
  document.getElementById("userScore").innerHTML = userScore; //Visually sets the userScore back to zero
  document.getElementById("computerScore").innerHTML = computerScore; //Visually sets the computerScore back to zero
  document.getElementById("result").innerHTML = result; //Visually sets the result back to nothing
}

const playGame = (choice) => {
   const userChoice = getUserChoice(choice); 
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice); //Prints userChoice in the console
   console.log('The computer threw: ' + computerChoice); //Prints computerChoice in the console
   console.log(determineWinner(userChoice, computerChoice)); //Prints the winner in the console
   checkWinner(); // Calls the check winner function
}








