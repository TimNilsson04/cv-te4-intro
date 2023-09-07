import './style.css'

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

function random(){
  if(Math.random() < 0.5){
    return true
  } else{
    return false
  }
}

// Koden nedan används för att avgöra vilka val man gör och hur valen kommer avgöra historians riktning.
const textChoices = [
  {
    id: 1,
    text: "Detta CV är en samling av Tim's historier. \n Allting började med skolan, Tim har alltid gått skolan med när det kom till högstadiet så var det ett mycket viktigt val man behövde göra som skulle avgöra hela livets gång.\
    \n Det viktiga som pratas om är valet av vilket gymnasie och vilken linje han skall gå. Tim har alltid varit mycket intresserad av teknik och kemi som liten och så ett val mellan teknik linjen och naturlinjen en självklarhet. \
    \n Vad väljer du att göra?",
    options: [
      {
        text: 'Börja Teknik på NTI gymnasiet',
        setState: { teknik: true },
        nextText: 2
      },
      {
        text: 'Börja Natur på Maja Beskow gymnasiet',
        setState: { natur: true },
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "Tim var en ung student med en passion för teknik som beslutade sig för att gå på tekniklinjen på gymnasiet. Han hade alltid varit nyfiken av sig och älskade att plocka isär gamla elektronikprylar hemma för att se hur de fungerade. \
    \n Hans föräldrar hade alltid uppmuntrat hans intresse för teknik och hade till och med omvandlat källaren till ett slags teknikverkstad för honom. Men till slut så kom det fruktade andra året med matte 4 och då behövde Tim göra något åt detta.\
    \n Vad gör Tim?",
    options: [
      {
        text: 'Fokuserar extra hårt på matten',
        setState: { depression: true, utbildning_teknik: true },
        nextText: 4
      },
      {
        text: 'Lägger ner minimum tid för att klara matten',
        setState: { glad: true },
        nextText: 4
      },
    ]
  },
  {
    id: 3,
    text: "På naturvetenskapslinjen på gymnasiet hade Tim möjlighet att fördjupa sin förståelse för fysik, kemi, biologi och geologi. Han kunde äntligen utforska vetenskapen bakom de fenomen som alltid hade fascinerat honom.\
    \n Men det Tim inte visste var att biologin på den här linjen skulle vara extra svår.\
    \n Vad väljer Tim att göra?",
    options: [
      {
        text: 'Fokuserar extra hårt på biologin',
        setState: { depression: true, utbildning_natur: true },
        nextText: 4
      },
      {
        text: 'Lägger ner minimum tid för att klara biologin',
        setState: { glad: true },
        nextText: 4
      },
    ]
  },
  {
    id: 4,
    text: "Nu har Tim kommit förbi andra året på gymnasiet och har äntligen fått sommarlov. Men Tim känner inte att han vill bara ta det lugnt utan han vill sommarjobba.\
    \n Vilket jobb väljer han?",
    options: [
      {
        text: 'Jobba på volvo',
        requiredState: (currentState) => currentState.utbildning_teknik,
        setState: { pengar: true },
        nextText: 5
      },
      {
        text: 'Ta livet av dig',
        requiredState: (currentState) => currentState.depression,
        setState: { depression: false, död: true },
        nextText: -1
      },
      {
        text: 'Du har tur och vinner lotto',
        requiredState: (currentState) => currentState.glad,
        setState: { glad: false, super_glad: true, pengar: true },
        nextText: 5
      },
      {
        text: 'Du väljer att plugga under sommaren',
        requiredState: (currentState) => currentState.utbildning_natur,
        setState: { utbildning_natur: false, Mycket_bra_utbildning: true },
        nextText: 5
      },
      {
        text: 'Du orkar inte jobba något på sommaren',
        setState: { depression: false },
        nextText: 5
      },
    ]
  },
  {
    id: 5,
    text: "Tim har alltid haft ett stort intresse i att fiska så han vill lägga ner pengar på ett nytt fiske spö och rulle. \
    \n Vad väljer Tim att göra?",
    options: [
      {
        text: 'Köp spö och rulle med volvo pengar',
        requiredState: (currentState) => currentState.pengar,
        requiredState: (currentState) => currentState.utbildning_teknik,
        setState: { pengar: false, mindre_pengar: true },
        nextText: 6
      },
      {
        text: 'Köp spö och rulle med lotto pengar',
        requiredState: (currentState) => currentState.pengar,
        requiredState: (currentState) => currentState.super_glad,
        setState: { pengar: false, super_glad: false, super_duper_glad: true },
        nextText: 9
      },
      {
        text: 'Köp ingen rulle',
        setState: {},
        nextText: 6
      },
      {
        text: 'Vara hemma i sängen och gråta',
        requiredState: (currentState) => currentState.depression,
        setState: { depression: false, suicidal: true },
        nextText: 7
      },
      {
        text: 'Du väljer att använda din höga utbildning för att manipulera butiken till att ge dig fiskespö?',
        requiredState: (currentState) => currentState.Mycket_bra_utbildning,
        setState: { depression: false },
        nextText: 6
      },
    ]
  },
  {
    id: 7,
    text: "DÖDA DIG SJÄLV NU\
    \n 'Oh no the voices have begun said' Tim\
    \n Vad gör Tim nu?",
    options: [
      {
        text: 'Gör det snabbt',
        setState: {},
        nextText: 8
      },
      {
        text: 'Jag vill inte',
        setState: {},
        nextText: 7
      }
    ]
  },
  {
    id: 8,
    text: "You got a bad ending.\
    \n The depression ending\
    \n I den här avslutningen så valde du att plugga hårt i skolan som led till depression och jobbade direkt efter på volvo och sedan gav upp.\
    \n detta ledde till att du var hemma hela tiden och gjorde ingenting med ditt liv tills du började höra röster som gjorde att du tog självmord",
    options: [
      // stoppa in gråtande banan katt gif
    ]
  },
  {
    id: 9,
    text: "Du har haft lady luck på din sida under hela ditt liv men nu finns det ett val som kommer avgör hela ditt liv\
    Vad väljer Tim?",
    options: [
      {
        // chans att få bästa slutet eller att dö direkt, if(getRandomInt(2) == 0 {Bästa ending}
        text: '50/50',
        setState: {best_ending: random()},
        nextText: 10
      },
    ]
  },
  {
    id: 10,
    text: "",
    options: [
      {
        text: 'best ending',
        requiredState: (currentState) => currentState.best_ending,
        setState: {},
        nextText: 10
      },
      {
        text: 'worst ending',
        setState: {},
        nextText: 10
      },
    ]
  },
  
]

startCV()


