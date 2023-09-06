import './style.css'

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startCV() {
 state = {}
 showTextChoice(1)
}

function showTextChoice(textChoiceIndex){
  const textChoice = textChoices.find(textChoice => textChoice.id === textChoiceIndex)
  textElement.innerText  = textChoice.text
  while(optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textChoice.options.forEach(option =>{
    if(showOption(option)){
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    } 
  })
}

function showOption(option){
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
  const nextTextChoiceId = option.nextText
  if (nextTextChoiceId <= 0 ) {
    return startCV()
  }
  state = Object.assign(state, option.setState)
  showTextChoice(nextTextChoiceId)
}

// Koden nedan används för att avgöra vilka val man gör och hur valen kommer avgöra historians riktning.
const textChoices = [
  {
    id: 1,
    text:'Du heter Tim och du är på äventur för att hitta en utbildning just för dig, vad väljer du att göra?',
    options: [
      {
        text: 'börja skolan',
        setChoice: {skola: true},
        nextText: 2
      },
      {
        text: 'söka jobb',
        setChoice: {söka: true},
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text:'Du började skolan men du börjar bli mobbad vad kommer du göra?',
    options: [
      {
        text: 'Börja gymma',
        setChoice: {gymmar: true},
        nextText: 4
      },
      {
        text: 'Tänk inte på det och forsätt med studierna',
        setChoice: {studerar: true},
        nextText: 5
      }
    ]
  },
  {
  id: 3,
    text:'Du gick direkt till att leta efter jobb, det var ej så smart i dagens samhälle. Vad gör du nu?',
    options: [
      {
        text: 'Ta självmord',
        setChoice: {dör: true},
        nextText: 6
      },
      {
        text: 'Lev på andras skattepengar',
        setChoice: {skattepengar: true},
        nextText: 7
      }
    ]
  }
]

startCV()


