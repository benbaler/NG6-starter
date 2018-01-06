// 1+2*5
sum(1,mul(2,5))


1, +, 4, *, 2, +, *, 2

1, new Plus(+), 4, Mul(*), 2

// first loop (priority 2)
1, new Plus(+), 8
// second loop (priority 1)
9

class Operator {
	constructor() {
		this.priority = 1;
	}

	calc(one, two) {
		if (!validate(one, two))
			return new Error("one, this, two");

		return 0;
	}

	validate(one, two) {
		if (one instanceof Opertator || )
			return false;

		return true;
	}
}

class Plus extends Operator {
	calc(one, two) {
		super.calc(one, two);

		return one + two;
	}
}

class Mul;
// this.priority = 2;

MAX_PRIORITY = 2;

class Calc {
	constructor(stack) {
		this.stack = [];

		for (var x of stack) {
			var value = x;

			switch (x) {
				case '+':
					value = new Plus(x);
					break;				
			}

			this.stack.push(value);
		}
	}

	calc() {
		var foo = ;
		var result = null

		while {

		}
		for (var i = MAX_PRIORITY, --) {
			var operator_num = 0;

			for (var j = 0; j < this.stack.length) {
				if (this.stack[j] instanceof Opertator && this.stack[j].priotiry == i) {
					results[opertaor_num] = this.stack[j].calc( , );			\
					operator_num++;
				}
			}	
		}


	}
}

null, 


class Calculate {
  calc(items) {
    return eval(items.join(''))
  }
}

class Numbers {
  concatNumbers(num1,	 num2) {
    return parseFloat(num1.toString() + num2.toString())
  }
}

class Point {
  concatPoint(num) {
    return num.toString() + '.'
  }
}

class Operator {
	calc() {

	}
}

class Sum extends Operator{
	calc(num1, num2) {
		return num1+num2
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
    
    // move this to numbers directive
    this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    
    // move this to operators directive
    this.operators =  {'+': '+', '-': '-', '×': '*', '÷': '/'}

    this.c = new Calculate()
    this.n = new Numbers()
    this.p = new Point()
  }

  // add the number to array [1,2,3...]
  addNumber(number) {
    if (this.calculated) {
      this.clearTempNumber()
      this.calculated = false
    }
    this.tempNumber = this.n.concatNumbers(this.tempNumber, number)
    this.operatorAdded = false
  }

  addPoint() {
    if (this.pointAdded) return
    this.tempNumber = this.p.concatPoint(this.tempNumber)
    this.pointAdded = true
  }

  // push the number array.join ->stack, push operator to stack
  addOperator(operator) {
    if (this.operatorAdded) return
    this.storage.addItem(this.tempNumber)
    this.storage.addItem(operator.toString())
    this.clearTempNumber()
    this.operatorAdded = true
    this.pointAdded = false
  }

  // Calculate the expression.
  // this.c = new Calc()
  // this.c.calc(stack)
  calculate() {
    this.storage.addItem(this.tempNumber)
    this.tempNumber = this.c.calc(this.storage.getItems())
    this.calculated = true
    this.operatorAdded = false
    this.pointAdded = false
    this.storage.clearItems()
  }

  // Reset calculator.
  clearAll() {
    this.storage.clearItems()
    this.clearTempNumber()
    this.calculated = false
    this.operatorAdded = false
    this.pointAdded = false
  }

  clearTempNumber() {
    this.tempNumber = '0'
  }
}

export default CalculatorController
