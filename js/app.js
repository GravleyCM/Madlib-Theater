 /*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/ 
let winner
/*------------------------ Cached Element References ------------------------*/
const inputs = document.querySelectorAll("form#input-boxes")
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
      const storyOne = `Look, if ${name.value} had one ${noun.value}, one opportunity to ${verb.value} everything ${name.value} ever wanted - one moment, would ${name.value} ${verb2.value} it or just let it ${adv.value} slip? Yo his palms are ${adj2.value}, knees weak, ${adj.value} arms are heavy there's vomit on his ${noun2.value} sweater already - mom's spaghetti. ${name.value}'s nervous but on the surface ${name.value}'s calm and ready to ${adv2.value} drop bombs but ${name.value} keeps on forgetting.`
      newMadLib.append(`${storyOne}`)
      console.log(storyOne)
    } else if (btn.id === "story2") {
      const storyTwo = `${name.value} the ${adj.value} ${noun.value} was walking up the street to his ${noun2.value} in Chicago. As ${name.value}  ${adv.value} ${verb.value} inside ${name.value} saw that all their friends had been replaced by ${adj2.value} garden gnomes. ${name.value} was so mad that they ${adv2.value} ${verb2.value} into madness and ran into the woods, never to be seen again.`
      console.log(storyTwo)
    } else if (btn.id === "story3") {
      const storyThree = `After arriving at the ${adj.value} goliath village the elders ${adv.value} squabbled about allowing the ${adj2.value} ${noun.value} named ${name.value} to ${adv.value} ${verb.value} as much as they want.  The elders were worried that the sacred ${noun2.value} would be ${verb2.value} by the new resident evil of the village.`
      console.log(storyThree)
    } else if (btn.id === "story4") {
      const storyFour = `Imagine for just a second a majestic ${noun.value} named ${name.value}. If it could ${adv.value} ${verb.value} through the ${adj.value} ${noun2.value}, I bet everyone here would ${adv2.value} ${verb2.value} as fast as they could back to their homes.`
      console.log(storyFour)
    }
    resetBtn.removeAttribute("hidden")
    // madForm.setAttribute("hidden", true)
    // function makeMadLib() {
    //   const madOne = `${"story1"}`
    //   newMadLib.appendChild(madOne)
    // }
  })
  
  resetBtn.addEventListener("click", () => reset())
  
  
  /*-------------------------------- Functions --------------------------------*/
init()
  
function init() {
  winner = null
  resetBtn.setAttribute("hidden", true)
}

function render() {
  newMadLib.innerHTML = ""
  makeMadlib()
}

// function makeMadLib() {
//   madOne = `${this.story1}`
//   newMadLib.append(madOne)
// }

// const madOne = "story1"

// newMadLib.append(madOne)

// function makeMadlib(story) {
//   const madLib = document.createElement("div")
//   madLib.classList.add("mad-text")
//   madLib.innerHTML =
//   `<div class="madlib1>${story.text}</div>`
//   newMadLib.append(madLib)
// }

function reset() {
  init()
  madForm.removeAttribute("hidden")
}