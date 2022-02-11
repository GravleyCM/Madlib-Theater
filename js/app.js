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
  inputValues = []
  winner = null
  resetBtn.setAttribute("hidden", true)
render()
}

function render() {
}

function submitInputs() {
  inputValues.push(document.getElementById("inp1").value +
  document.getElementById("inp2").value +
  document.getElementById("inp3").value +
  document.getElementById("inp4").value +
  document.getElementById("inp5").value +
  document.getElementById("inp6").value +
  document.getElementById("inp7").value +
  document.getElementById("inp8").value +
  document.getElementById("inp9").value)
}