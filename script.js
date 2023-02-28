

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

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
 } 
 if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
        //set picture of result to Comp Winner
  } else {
    return 'You won!';
    //set picture of result to Human Winner
  }
 }
 if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
 }
 if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
 }
}
const playGame = (choice) => {
   const userChoice = getUserChoice(choice);
   const computerChoice = getComputerChoice();
   document.getElementById('result').style.display = "hi";
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};








