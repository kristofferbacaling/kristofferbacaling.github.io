// kris example button
// have button when press show print out a text example saying the dom in the works

function domButton() {
  document.getElementById('exampleText').innerHTML =
    'Hi this is the DOM in action with the help of Java'
}

document.getElementById('krisButton').onclick = domButton
