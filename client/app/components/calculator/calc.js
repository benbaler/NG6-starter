import Operator from './operator';
import Plus from './plus';
import Minus from './minus';
import Multiplay from './multiplay';
import Divide from './divide';

const MAX_PRIORITY = 2

class Calc {
	constructor(stack) {
		this.stack = []
    this.prepareStack(stack)
	}

  prepareStack(stack) {
    for (var x of stack) {
      var value = x

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
    var i = MAX_PRIORITY

    while (i >= 1) {
      stack = this.calcByPriority(stack, 0, i)
      i--
    }

    return stack
	}

  calcByPriority(stack, i, priority) {
    if (i >= stack.length)
      return stack

    if (stack[i] instanceof Operator && stack[i].priority === priority) {
      stack.splice(i-1, 3, stack[i].calc(stack[i-1], stack[i+1]))
      return this.calcByPriority(stack, i, priority)
    } else {
      return this.calcByPriority(stack, i+1, priority)
    }
  }
}

export default Calc