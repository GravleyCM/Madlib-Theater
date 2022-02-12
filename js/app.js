/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/ 
let winner, inputValues
/*------------------------ Cached Element References ------------------------*/
const inputs = document.querySelectorAll("form#input-boxes")
const storyBtns = document.querySelector(".stories")
const resetBtn = document.querySelector(".reset-button")
const newMadLib = document.querySelector("#story")
const form = document.querySelector("form")
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
  console.log("hello")
  console.log(...formData)
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

function submitInputs() {
  inputValues.push(`${document.getElementById("inp1").value},${document.getElementById("inp2").value},${document.getElementById("inp3").value},${document.getElementById("inp4").value},${document.getElementById("inp5").value},${document.getElementById("inp6").value},${document.getElementById("inp7").value},${document.getElementById("inp8").value},${document.getElementById("inp9").value}`)
  console.log(inputValues)
}

function makeMadlib() {
  const madLib = document.createElement("div")
  madLib.classList.add("story1")
  madLib.innerHTML =
  `<div class="madlib1><p>${inputValues[0]}</p></div>`
  newMadLib.appendChild(madLib)
}