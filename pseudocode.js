// Create a var called numString equal to an empty string
// Create a var array called numArray equal to an empty array
// Create a let var called display - find and set to the same HTML element
// Create a let var called isPreviousResult - set equal to 'false'

var numString = ''
var numArray = []
let display = document.getElementById('display')
let isPreviousResult = false

// listen function - add event listeners here

listen()

function listen () {
  document.addEventListener('click', getButtonValue)
}

// Create a getButtonValue function

// Create let var 'button' equal to event.target.value
// If button is a number or is equal to a "." return number function 
// Else if button is equal to 'AC' return allClear function
// Else if button is equal to 'CE' return clear function
// Else if button is equal to '=' return calculate function
// Otherwise return storeNumber(button)

function getButtonValue () {
    let button = event.target.value
    if (!isNaN(button) || button === '.') {
      number(button)
    } else if (button === 'AC') {
      allClear()
    } else if (button === 'CE') {
      clear()
    } else if (button === '=') {
      calculate()
    } else {
      storeNumber(button)
    }
  }

// Create a function called number with the parameter of 'button'

// If button is equal to '.' and numString includes '.' return to exit function
// Else if the first index of numString is equal to '0' and the length is equal to 1, 
// and button is equal to '0' - return to exit function
// Otherwise, if isPreviousResult is equal to 'true', numString is equal to ' ', 
// and isPreviousResult is false...
// numString add to button
// display.value = numString

function number (button) {
  if (button === '.' && numString.includes('.')) {
    return
  } else if (numString.charAt(0) === '0' && numString.length === 1 && button === '0') {
    return
  } else {
    if (isPreviousResult === true){
      numString = ''
      isPreviousResult = false
    }
    numString += button
    display.value = numString
  }
}

// Create allClear function with empty parameters

// Give a allClear the properties of empty numString, empty numArray and display.value equal to '0'

function allClear () {
  numString = ''
  numArray = []
  display.value = '0'
}

// Create clear function empty parameters
// Give clear properties of numString and display.value equal to '0'

function clear () {
  numString = ''
  display.value = '0'
}

// Create a function called storeNumber with the parameter of 'button'

// If numString is equal to '' and numArray.length is equal to 0 return/exit function
// Else if numString is equal to '', numArray.length = numArray.length -1, push array to button
// Otherwise push array to numString, push array to button, numString equals ''

function storeNumber (button) {
  if (numString === '' && numArray.length === 0) {
    return
  } else if (numString === '') {
    numArray.length = numArray.length - 1
    numArray.push(button)
  } else {
    numArray.push(numString)
    numArray.push(button)
    numString = ''
  }
}

// Create a function called calculate with empty parameters

// push array to numString
// create let variable called currentNumber that is equal to Number (and the first index of numArray)
// Make a for loop that loops through numArray
// inside the parenthesus create a let variable called nextNumber that adds the numArray + 1 to Number 
// make a variable called symbol that is equal to numArray[i]
// if symbol is '+', add currentNumber to nextNumber 
// else if symbol is '-', subtract currentNumber to nextNumber 
// else if symbol is '*', multiply currentNumber to nextNumber 
// else if symbol is '/', divide currentNumber to nextNumber 


// if the currentNumber is less than 0, use Math.abs on current number and add to '-'



function calculate () {
  numArray.push(numString)
  let currentNumber = Number(numArray[0])
  for (var i = 0; i < numArray.length; i++) {
    let nextNumber = Number(numArray[i + 1])
    let symbol = numArray[i]
    if (symbol === '+') {
      currentNumber += nextNumber
    } else if (symbol === '-') {
      currentNumber -= nextNumber
    } else if (symbol === '*') {
      currentNumber *= nextNumber
    } else if (symbol === '/') {
      currentNumber /= nextNumber
    }
  }
  if (currentNumber < 0) {
    currentNumber = Math.abs(currentNumber) + '-'
  }

// display value should equal current number
// numString = stringfify
// isPreviousResult = true
// numArray equals empty array

  display.value = currentNumber
  numString = JSON.stringify(currentNumber)
  isPreviousResult = true
  numArray = []
}
