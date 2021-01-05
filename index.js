function writeCards(array, event) {
  let result = []
  for (let i = 0; i < array.length; i++ ) {
    result.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)  
  }
  return result
}

function countDown(number) {
  while (number > -1) {
    console.log(number--)
  }
}