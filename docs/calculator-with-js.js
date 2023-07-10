const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

/* ========THESE DO THE SAME EXACT THING==========
function screenFunc(button) {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
}

function addButtonActions(button) {
    button.addEventListener('click', screenFunc(button));
}

numberButtons.forEach(button => addButtonActions(button))
*/// ========THESE DO THE SAME EXACT THING==========

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button \'${button.innerText}\' clicked!`);
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})
// ========THESE DO THE SAME EXACT THING==========

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

// THIS ONE DOES NOT WORK
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})