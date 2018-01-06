import Operator from './operator';

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

export default Divide