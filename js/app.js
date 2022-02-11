/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/ 
let winner, inputValues
/*------------------------ Cached Element References ------------------------*/
const inputs = document.querySelector("div.input-boxes")
const storyBtns = document.querySelector("div.button-boxes")
const resetBtn = document.querySelector(".reset-button")
 /*----------------------------- Event Listeners -----------------------------*/ 

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