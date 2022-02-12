/*-------------------------------- Variables --------------------------------*/ 
let winner, inputValues
/*------------------------ Cached Element References ------------------------*/
const inputs = document.querySelectorAll("form#input-boxes")
const storyBtns = document.querySelector(".stories")
const resetBtn = document.querySelector(".reset-button")
const newMadLib = document.querySelector("#story")
const form = document.querySelector("form")
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
// storyBtns.addEventListener("click", (evt) => {
  //   evt.preventDefault()
  //   let btn = evt.target
  //   console.log(btn)
  //   // submitInputs()
  //   // makeMadlib()
  // })
  
  document.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let formData = new FormData(form)
    submitInputs()
    // console.log(...formData)
  })
  
  resetBtn.addEventListener("click", () => {console.log(resetBtn)})
  
  
  /*-------------------------------- Functions --------------------------------*/
  init()
  
  function init() {
    inputValues = []
    winner = null
    resetBtn.setAttribute("hidden", true)
    render()
  }
  
  function render() {
  }
  
  // function submitInputs() {
    //   inputValues.push(`${document.getElementById("inp1").value},${document.getElementById("inp2").value},${document.getElementById("inp3").value},${document.getElementById("inp4").value},${document.getElementById("inp5").value},${document.getElementById("inp6").value},${document.getElementById("inp7").value},${document.getElementById("inp8").value},${document.getElementById("inp9").value}`)
    //   console.log(inputValues)
    // }
    
    function submitInputs() {
      inputValues.push(name.value, noun.value, noun2.value, verb.value, verb2.value, adj.value, adj2.value, adv.value, adv2.value)
    }
    
    function makeMadlib() {
      const madLib = document.createElement("div")
      madLib.classList.add("story1")
      madLib.innerHTML =
      `<div class="madlib1><p>${inputValues[0]}</p></div>`
      newMadLib.appendChild(madLib)
    }

    /*-------------------------------- Constants --------------------------------*/
    let storyOne = `Look, if ${name} had one ${noun}, one opportunity to ${verb} everything ${name} ever wanted - one moment, would ${name} ${verb2} it or just let it ${adv} slip? Yo his palms are ${noun2}, knees weak, ${adj} arms are heavy there's vomit on his ${adj2} sweater already - mom's spaghetti. ${name}'s nervous but on the surface ${name}'s calm and ready to ${adv2} drop bombs but ${name} keeps on forgetting.`
    
    let storyTwo = `${name} the ${adj} ${noun} was walking up the street to his ${noun2} in Chicago. As ${name}  ${adv} ${verb} inside ${name} saw that all their friends had been replaced by ${adj2} garden gnomes. ${name} was so mad that they ${adv2} ${verb2} into madness and ran into the woods, never to be seen again.`
    
    let storyThree = `After arriving at the ${adj} goliath village the elders ${adv} squabbled about allowing the ${adj2} ${noun} named ${name} to ${adv} ${verb} as much as they want.  The elders were worried that the sacred ${noun2} would be ${verb2} by the new resident evil of the village.`
    
    let storyFour = `Imagine for just a second a majestic ${noun} named ${name}. If it could ${adv} ${verb} through the ${adj} ${noun2}, I bet everyone here would ${adv2} ${verb2} as fast as they could back to their homes.`