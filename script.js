const myAge = 15
let guess = 0

while (guess !== myAge) {
  guess = prompt('Guess my age between 1 and 20')
  if (myAge > guess) {
    alert('Guess a higher number!')
  } else if (myAge < guess) {
    alert('Guess a lower number!')
  } else {
    alert('You have guessed my age correctly!')
  }
}
