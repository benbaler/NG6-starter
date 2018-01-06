import Operator from './operator';

class Minus extends Operator {
  constructor() {
    super()
  }

  calc(one, two) {
    super.calc(one, two)

    return one - two
  }
}

export default Minus