class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        //console.log(`calculator created and set this.currentOperandTextElement to value [${currentOperandTextElement.innerText}]`)
        this.clear() // look this up - reset the inputs clear all inpouts and set values to defaults
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        //console.log(`Appending Number [${this.currentOperand.toString() + number.toString()}] replacing [${this.currentOperand}]`)
        if (number === '.' && this.currentOperand.includes('.')) return // checks if we use '.' and if we don't have a period then returns it when you already clicked it once
        this.currentOperand = this.currentOperand.toString() + number.toString() // this will make the numbers show up in the output (display)
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {  // like a bunch of if statements chained after each other but allows you to do a bunch of if statements on a single object
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        //const floatNumber = parseFloat(number)
        //if (isNaN(floatNumber)) return ''
        //return floatNumber.toLocaleString('en')
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        //console.log(`Updating display to [${this.currentOperand}] replacing [${this.currentOperandTextElement.innerText}]`)
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand) // allows us to set the text to white in the output (display)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
            //this.previousOperandTextElement.innerText = this.previousOperand + ' ' + this.operation // does not show the operator but does show the blank space so you can input a new number
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}