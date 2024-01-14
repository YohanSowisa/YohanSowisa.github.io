let body = document.querySelector('body')
let input = document.querySelector('input')
let btnChange = document.querySelector('#change')
let btnDef = document.querySelector('#def')

btnChange.onclick = function() {
  body.style.background = input.value

  const split = new Array(...input.value)
  if (split.filter(Number)) {
    body.style.background = `#${input.value}`
  }

  input.value = ''
}
btnDef.onclick = function() {
  body.style.background = 'initial'
}

console.log('yang baca ganteng ih ❤️')
