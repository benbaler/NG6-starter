class CalculatorController {
  constructor() {
    this.exp = 0
    this.prevExp = 0
    this.tempAct = ''
  }

  num(number) {
  	this.exp = parseFloat(this.exp.toString() + number);
  }

  act(op) {
  	this.prevExp = this.exp
  	this.tempAct = op
  	this.exp = 0
  }

  equal() {
  	if (!this.tempAct) return
  	switch(this.tempAct) {
  		case '+':
  			this.exp = this.prevExp = this.prevExp + this.exp
  			break
  		case '-':
  			this.exp = this.prevExp = this.prevExp - this.exp
  			break
  		case '*':
  			this.exp = this.prevExp = this.prevExp * this.exp
  			break
  		case '/':
  			this.exp = this.prevExp = this.prevExp / this.exp
  			break
  	}
  	this.tempAct = ''
  }

  clear() {
  	this.exp = this.prevExp = 0
  	this.tempAct = ''
  }
}

export default CalculatorController
