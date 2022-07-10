// kris example button
// have button when press show print out a text example saying the dom in the works

let i = false

function domButton() {
  if (i === false) {
    i = true
    document.getElementById('exampleText').innerHTML =
      'Hi this is the DOM in action with the help of Javascript'
  } else {
    i = false
    document.getElementById('exampleText').innerHTML = ''
  }
}

document.getElementById('krisButton').onclick = domButton

let arrayNames = ['Kris', 'Ryan', 'John', 'Alice']
//                   0       1       2       3
//This is an array array work like this the fors name in this list is kris but is gvein the index number as 0
// as array start counting at 0 note that when ask how many names are in this array it will say 4

let objectsInfo = {
  coustomerOne: {
    name: 'Kris',
    email: 'kris@email.com',
  },

  coustomerTwo: {
    name: 'Ryan',
    email: 'ryan@email.com',
  },

  coustomerThree: {
    name: 'John',
    email: 'John@email.com',
  },

  coustomerFour: {
    name: 'Alice',
    email: 'alice@email.com',
  },
}
