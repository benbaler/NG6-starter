import Calc from './calc';

class CalculatorController {
  /**
   * @param {Storage} storage
   */
  constructor(storage) {
    "ngInject"

    this.s = storage

    this.clearAll()
    
    // move this to numbers directive
    this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    // move this to operators directive
    this.operators =  {'+': '+', '-': '-', '×': '*', '÷': '/'}
  }

  addNumber(number) {
    this.number.push(number)
  }

  addOperator(operator) {
    this.s.addItem(this.prepareNumber())
    this.resetNumber()
    this.s.addItem(operator)
  }

  // Calculate the expression.
  calculate() {
    this.s.addItem(this.prepareNumber())
    this.c = new Calc(this.s.getItems())
    this.clearAll()
    this.number = this.c.calc()
  }

  prepareNumber() {
    return parseFloat(this.number.join(''))
  }

  // Reset calculator.
  clearAll() {
    this.s.clearItems()
    this.resetNumber()
  }

  resetNumber() {
    this.number = []
  }
}

export default CalculatorController
