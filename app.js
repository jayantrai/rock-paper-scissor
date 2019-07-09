let userScore = 0
let computerScore = 0
const userScoreSpan = document.getElementById('user-score')
const computerScoreSpan = document.getElementById('computer-score')
const scoreBoardDiv = document.querySelector('.score-board')
const resultP = document.querySelector('.result > p')
const rockDiv = document.getElementById('r')
const paperDiv = document.getElementById('p')
const scissorsDiv = document.getElementById('s')

function getComputerChoice () {
  const choices = ['r', 'p', 's']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

function convertToWord (letter) {
  if (letter === 'r') return 'Rock'
  if (letter === 'p') return 'Paper'
  if (letter === 's') return 'Scissors'
}

function win (userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice)
  userScore++
  userScoreSpan.innerHTML = userScore
  computerScoreSpan.innerHTML = computerScore
  resultP.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
  userChoiceDiv.classList.add('green-glow')
  setTimeout(function () { userChoiceDiv.classList.remove('green-glow') }, 300)
}

function lose (userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice)
  computerScore++
  userScoreSpan.innerHTML = userScore
  computerScoreSpan.innerHTML = computerScore
  resultP.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose...`
  userChoiceDiv.classList.add('red-glow')
  setTimeout(function () { userChoiceDiv.classList.remove('red-glow') }, 300)
}

function draw (userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice)
  resultP.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. Its a draw.`
  userChoiceDiv.classList.add('gray-glow')
  setTimeout(function () { userChoiceDiv.classList.remove('gray-glow') }, 300)
}

function game (userChoice) {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice)
      break
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice)
      break
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice)
      break
  }
}

function main () {
  rockDiv.addEventListener('click', function () {
    game('r')
  })
  paperDiv.addEventListener('click', function () {
    game('p')
  })
  scissorsDiv.addEventListener('click', function () {
    game('s')
  })
}

main()
