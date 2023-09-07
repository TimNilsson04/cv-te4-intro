import './style.css'
import {textChoices} from './textChoices.js'

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startCV() {
  state = {}
  showTextChoice(1)
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
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
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


