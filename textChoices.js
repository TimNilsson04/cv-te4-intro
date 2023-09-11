
// Koden nedan används för att avgöra vilka val man gör och hur valen kommer avgöra historians riktning.
export const textChoices = [
    {
        id: 1,
        text: "Detta CV är en samling av Tim's historier. Allting började med skolan, Tim har alltid gått skolan med när det kom till högstadiet så var det ett mycket viktigt val man behövde göra som skulle avgöra hela livets gång.\
       Det viktiga som pratas om är valet av vilket gymnasie och vilken linje han skall gå. Tim har alltid varit mycket intresserad av teknik och kemi som liten och så ett val mellan teknik linjen och naturlinjen en självklarhet. \
       \nVad väljer du att göra?",
        options: [
            {
                text: 'Börja Teknik på NTI gymnasiet',
                setState: { teknik: true },
                nextText: 2
            },
            {
                text: 'Börja Natur på Maja Beskow gymnasiet',
                setState: { natur: true },
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: "Tim var en ung student med en passion för teknik som beslutade sig för att gå på tekniklinjen på gymnasiet. Han hade alltid varit nyfiken av sig och älskade att plocka isär gamla elektronikprylar hemma för att se hur de fungerade. \
       Hans föräldrar hade alltid uppmuntrat hans intresse för teknik och hade till och med omvandlat källaren till ett slags teknikverkstad för honom. Men till slut så kom det fruktade andra året med matte 4 och då behövde Tim göra något åt detta.\
     \nVad gör Tim?",
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
       Men det Tim inte visste var att biologin på den här linjen skulle vara extra svår.\
       \nVad väljer Tim att göra?",
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
       \nVilket jobb väljer han?",
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
                nextText: 16
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
                setState: {Mycket_bra_utbildning: true },
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
       \nVad väljer Tim att göra?",
        options: [
            {
                text: 'Köp spö och rulle med volvo pengar',
                requiredState: (currentState) => currentState.pengar,
                requiredState: (currentState) => currentState.utbildning_teknik,
                setState: { pengar: false, mindre_pengar: true },
                nextText: 11
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
                setState: { suicidal: true },
                nextText: 7
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
                nextText: 12
            },
        ]
    },
    {
        id: 11,
        text: "Normal ending\
        \n Du har valt att gå en decent utbildning och har kommit in i jobbar livet du kommer leva ett normalt liv.",
        options: [
            {
                text: 'restart',
                setState: {},
                nextText: -1
            },
        ]
    },
    {
        id: 16,
        text: "Bad ending\
        \n Du klarade inte av studerandet",
        options: [
            {
                text: 'restart',
                setState: {},
                nextText: -1
            },
        ]
    },
    {
        id: 12,
        text: "Business ending\
        \n Därför du aldrig gav upp med ding utbildning och blev en mäster manipulerare så blev du extra bra vid skapande av ett företag.\
        \n Du fick en bra start som ledde till att ditt företag ligger top 10 i världen.",
        options: [
            {
                text: 'restart',
                setState: {},
                nextText: -1
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
                nextText: 15
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
            {
                text: 'restart',
                setState: {},
                nextText: -1
            },
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
                setState: {},
            },
        ]
    },
    {
        id: 13,
        text: "Best ending \
        \n Du fick allt du ville ha i livet och mer, ingenting i livet kan bli bättre.",
        options: [
            {
                text: 'restart',
                setState: {},
                nextText: -1
            },
        ]
    },
    {
        id: 14,
        text: "Worst ending\
        \n Du kommer bli torterad i helvetet för all evighet.",
        options: [
            {
                text: 'restart',
                setState: {},
                nextText: -1
            },
        ]
    },
    {
        id: 15,
        text: "NEJ GÖR DET NU!",
        options: [
            {
                text: 'Kör russian roulette',
                setState: {},
            },
        ]
    },
    {
        id: 17,
        text: "GUD SÅ TUR DU HAR\
        \n säger Tim's röster",
        options: [
            {
                text: 'Kör russian roulette',
                setState: {},
            },
        ]
    },
    {
        id: 18,
        text: "NEJ ASSÅ NU GER JAG DIG EN REVOLVER MED FEM SKOTT",
        options: [
            {
                text: 'Kör russian roulette',
                setState: {},
            },
        ]
    },
    {
        id: 19,
        text: "Om du har klarat dig ända hit så förtjänar du bästa ending.",
        options: [
            {
                text: 'You deserve it',
                setState: {},
                nextText: 13
            },
        ]
    },
]
