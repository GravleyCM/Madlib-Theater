 /*-------------------------------- Constants --------------------------------*/
let startTime = 20
/*-------------------------------- Variables --------------------------------*/ 
let winner
/*------------------------ Cached Element References ------------------------*/
// const inputs = document.querySelectorAll("form#input-boxes")
const countDown = document.getElementById("timer")
const storyBtns = document.querySelector("#button-boxes")
const resetBtn = document.querySelector(".reset-button")
const newMadLib = document.querySelector("#story")
const madForm = document.querySelector("form")
const name = document.getElementById("inp1")
const noun = document.getElementById("inp2")
const noun2 = document.getElementById("inp3")
const verb = document.getElementById("inp4")
const verb2 =document.getElementById("inp5")
const adj = document.getElementById("inp6")
const adj2 = document.getElementById("inp7")
const adv = document.getElementById("inp8")
const adv2 = document.getElementById("inp9")

/*----------------------------- Event Listeners -----------------------------*/ 
storyBtns.addEventListener("click", (evt) => {
    evt.preventDefault()
    let btn = evt.target
    if(btn.id === "story1") {
      const storyOne = `Look, if ${name.value.toUpperCase()} had one ${noun.value.toUpperCase()}, one opportunity to ${verb.value.toUpperCase()} everything ${name.value.toUpperCase()} ever wanted - one moment, would ${name.value.toUpperCase()} ${verb2.value.toUpperCase()} it or just let it ${adv.value.toUpperCase()} slip? Yo his palms are ${adj2.value}, knees weak, ${adj.value.toUpperCase()} arms are heavy there's vomit on his ${noun2.value.toUpperCase()} sweater already - mom's spaghetti. ${name.value.toUpperCase()}'s nervous but on the surface ${name.value.toUpperCase()}'s calm and ready to ${adv2.value.toUpperCase()} drop bombs but ${name.value.toUpperCase()} keeps on forgetting.`
      newMadLib.append(`${storyOne}`)
    } else if (btn.id === "story2") {
      const storyTwo = `${name.value.toUpperCase()} the ${adj.value.toUpperCase()} ${noun.value.toUpperCase()} was walking up the street to his ${noun2.value.toUpperCase()} in Chicago. As ${name.value.toUpperCase()}  ${adv.value.toUpperCase()} ${verb.value.toUpperCase()} inside, ${name.value.toUpperCase()} saw that all their friends had been replaced by ${adj2.value.toUpperCase()} garden gnomes. ${name.value.toUpperCase()} was so mad that they ${adv2.value.toUpperCase()} ${verb2.value.toUpperCase()} into madness and ran into the woods, never to be seen again.`
      newMadLib.append(`${storyTwo}`)
    } else if (btn.id === "story3") {
      const storyThree = `After arriving at the ${adj.value.toUpperCase()} goliath village the elders ${adv.value.toUpperCase()} squabbled about allowing the ${adj2.value.toUpperCase()} ${noun.value.toUpperCase()} named ${name.value.toUpperCase()} to ${adv2.value.toUpperCase()} ${verb.value.toUpperCase()} as much as they want.  The elders were worried that the sacred ${noun2.value.toUpperCase()} would be ${verb2.value.toUpperCase()} by the new resident evil of the village.`
      newMadLib.append(`${storyThree}`)
    } else if (btn.id === "story4") {
      const storyFour = `Imagine for just a second a ${adj2.value.toUpperCase()} ${noun.value.toUpperCase()} named ${name.value.toUpperCase()}. If it could ${adv.value.toUpperCase()} ${verb.value.toUpperCase()} through the ${adj.value.toUpperCase()} ${noun2.value.toUpperCase()}, I bet everyone here would ${adv2.value.toUpperCase()} ${verb2.value.toUpperCase()} as fast as they could back to their homes.`
      newMadLib.append(`${storyFour}`)
    }
    madForm.setAttribute("hidden", true)
    resetBtn.removeAttribute("hidden")
  })
  
  resetBtn.addEventListener("click", () => init(), reset())
  
  
/*-------------------------------- Functions --------------------------------*/
init()
  
function init() {
  winner = null
  render()
}

function render() {
  madForm.removeAttribute("hidden")
  resetBtn.setAttribute("hidden", true)
  newMadLib.innerHTML = ""
}

function reset() {
  render()
}

function timer() {
  setTimeout
}

setInterval(getCountDown, 1000)

function getCountDown () {
  startTime--
  countDown.innerHTML = `${startTime}`
}