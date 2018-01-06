class Operator {
	constructor() {
		this.priority = 1
	}

	calc(one, two) {
		if (!this.validate(one, two))
			return new Error("one, this, two")

		return 0
	}

	validate(one, two) {
		if (one instanceof Operator || two instanceof Operator)
			return false

		return true
	}
}

class Plus extends Operator {
  constructor() {
    super()
  }

	calc(one, two) {
		super.calc(one, two)

		return one + two
	}
}

class Minus extends Operator {
  constructor() {
    super()
  }

  calc(one, two) {
    super.calc(one, two)

    return one - two
  }
}

class Multiplay extends Operator {
  constructor() {
    super()
    this.priority = 2
  }

  calc(one, two) {
    super.calc(one, two)

    return one * two
  }
}

class Divide extends Operator {
  constructor() {
    super()
    this.priority = 2
  }

  calc(one, two) {
    super.calc(one, two)

    return one / two
  }
}

class Calc {
	constructor(stack) {
    this.MAX_PRIORITY = 2
		this.stack = []
    this.prepareStack(stack)
	}

  prepareStack(stack) {
    for (var x of stack) {
      var value = parseFloat(x)

      switch (x) {
        case '+':
          value = new Plus()
          break
        case '-':
          value = new Minus()
          break
        case '*':
          value = new Multiplay()
          break
        case '/':
          value = new Divide()
      }

      this.stack.push(value)
    }
  }

	calc() {
    var stack = this.stack.slice()
    var i = this.MAX_PRIORITY

    while (i >= 1) {
      stack = this.calcStack(stack, 0, i)
      i--
    }

    return stack
	}

  calcStack(stack, i, priority) {
    if (i === stack.length)
      return stack

    if (stack[i] instanceof Operator && stack[i].priority === priority) {
      console.log(stack[i].calc(stack[i-1], stack[i+1]))
      stack.splice(i-1, 3, stack[i].calc(stack[i-1], stack[i+1]))
      return this.calcStack(stack, i-1, priority)
    } else {
      return this.calcStack(stack, i+1, priority)
    }
  }
}

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

  addPoint() {
    return
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
    return this.number.join('')
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
