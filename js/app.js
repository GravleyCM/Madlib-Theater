/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/ 
let winner, inputValues
/*------------------------ Cached Element References ------------------------*/
const inputs = document.querySelector("form#input-boxes")
const storyBtns = document.querySelector("div#button-boxes")
const resetBtn = document.querySelector(".reset-button")
 /*----------------------------- Event Listeners -----------------------------*/ 
storyBtns.addEventListener("click", (evt) => {
  let btn = evt.target
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
  resetBtn.removeAttribute("hidden")
  inputValues = document.getElementById("inp1").value
  console.log(inputValues)
}