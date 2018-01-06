class Calculate {
  calc(items) {
    return eval(items.join(''))
  }
}

class Numbers {
  concatNumbers(num1, num2) {
    return parseFloat(num1.toString().concat(num2))
  }
}

class Point {
  concatPoint(num) {
    return num.toString() + '.'
  }
}

class CalculatorController {
  /**
   * @param {Storage} storage
   */
  constructor(storage) {
    "ngInject";
    this.storage = storage

    this.clearAll()
    
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    this.operators =  {'+': '+', '-': '-', '×': '*', '÷': '/'}

    this.c = new Calculate()
    this.n = new Numbers();
    this.p = new Point();
  }

  addNumber(number) {
    if (this.calculated) {
      this.clearTempNumber()
      this.calculated = false
    }
    this.tempNumber = this.n.concatNumbers(this.tempNumber, number)
    this.operatorAdded = false
  }

  addPoint() {
    this.tempNumber = this.p.concatPoint(this.tempNumber)
  }

  addOperator(operator) {
    if (this.operatorAdded) return
    this.storage.addItem(this.tempNumber)
    this.storage.addItem(operator.toString())
    this.clearTempNumber()
    this.operatorAdded = true
  }

  calculate() {
    this.storage.addItem(this.tempNumber)
    this.tempNumber = this.c.calc(this.storage.getItems())
    this.calculated = true
    this.operatorAdded = false
    this.storage.clearItems()
  }

  clearAll() {
    this.storage.clearItems()
    this.clearTempNumber()
    this.calculated = false
    this.operatorAdded = false
  }

  clearTempNumber() {
    this.tempNumber = 0
  }
}

export default CalculatorController
