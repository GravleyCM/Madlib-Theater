/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/ 
let winner, inputValues
/*------------------------ Cached Element References ------------------------*/
const inputs = document.querySelector("form#input-boxes")
const storyBtns = document.querySelector("div#button-boxes")
const resetBtn = document.querySelector(".reset-button")
 /*----------------------------- Event Listeners -----------------------------*/ 
storyBtns.addEventListener("click", (evt) => {
  evt.preventDefault()
  let btn = evt.target
  console.log(btn)
  submitInputs()
})
resetBtn.addEventListener("click", () => {console.log(resetBtn)})
/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  inputValues = [null, null, null, null, null, null, null, null, null]
  winner = null
  resetBtn.setAttribute("hidden", true)
render()
}

function render() {
}

function submitInputs() {
  let name = document.getElementById("inp1").value
  let noun = document.getElementById("inp2").value
  let noun2 = document.getElementById("inp3").value
  let name = document.getElementById("inp4").value
  let name = document.getElementById("inp5").value
  let name = document.getElementById("inp6").value
  let name = document.getElementById("inp7").value
  let name = document.getElementById("inp8").value
  let name = document.getElementById("inp9").value
}