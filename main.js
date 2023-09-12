import './style.css'
import {textChoices} from './textChoices.js'

var Choice = localStorage.getItem('Choice');


const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

var number
function numberRandom() {
    if (Math.random() < 0.5) {
        number = 13
    } else {
        number = 14
    }
    return number
}
var roulette
function russianRoulette() {
    if (Math.random() < 0.166666) {
        number = 8
    } else {
        number = 17
    }
    return number
}
var svårRoulette
function svårRussianRoulette() {
    if (Math.random() < 0.5) {
        number = 8
    } else {
        number = 18
    }
    return number
}
var svårasteRoulette
function svårasteRussianRoulette() {
    if (Math.random() < 0.8333333) {
        number = 8
    } else {
        number = 19
    }
    return number
}

let state = {}
function startCV() {
  state = {}
  showTextChoice(parseInt(Choice))
}

function showTextChoice(textChoiceIndex) {
  const textChoice = textChoices.find(textChoice => textChoice.id === textChoiceIndex)
  textElement.innerText = textChoice.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textChoice.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      if(textChoice.id == 9){option.nextText = numberRandom()}
      if(textChoice.id == 15){option.nextText = russianRoulette()}
      if(textChoice.id == 17){option.nextText = svårRussianRoulette()}
      if(textChoice.id == 18){option.nextText = svårasteRussianRoulette()}
      if(textChoice.id == 1){document.body.style.backgroundColor = "#242424"}
      if(textChoice.id == 14 || textChoice.id == 16){button.style.backgroundImage="url('/banana.gif')"
    button.style.height = "400px"
    button.style.width = "350px"
    document.body.style.backgroundColor = "red"
    Choice = 1}
    if(textChoice.id == 8 ){button.style.backgroundImage="url('/voices.gif')"
    button.style.height = "550px"
    button.style.width = "600px"
    document.body.style.backgroundColor = "black"
    Choice = 1}
    if(textChoice.id == 13 ){button.style.backgroundImage="url('/happyCat.gif')"
    button.style.height = "550px"
    button.style.width = "600px"
    document.body.style.backgroundColor = "green"
    Choice = 1}
    if(textChoice.id == 12 ){button.style.backgroundImage="url('/laserCat.gif')"
    button.style.height = "370px"
    button.style.width = "200px"
    document.body.style.backgroundColor = "crimson"
    Choice = 1}
    if(textChoice.id == 11 ){button.style.backgroundImage="url('/bellyCat.gif')"
    button.style.height = "550px"
    button.style.width = "600px"
    document.body.style.backgroundColor = "blue"
    Choice = 1}
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)


      window.addEventListener("beforeunload", function (e) {
        localStorage['Choice'] = textChoice.id
        window.addEventListener("load", function (e) {
           Choice = localStorage.getItem('Choice');

       });
     });
    }
  })
}



function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextChoiceId = option.nextText
  if (nextTextChoiceId <= 0) {
    return startCV()
  }
  state = Object.assign(state, option.setState)
  showTextChoice(nextTextChoiceId)
}

startCV()


