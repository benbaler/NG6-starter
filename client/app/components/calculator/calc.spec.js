import Calc from './calc';

describe('Calc', () => {
  it('check if 1+2=3', () => {
    var c = new Calc([1, '+', 2])
    expect(c.calc()).to.have.all.members([3])
  })

  it('check if 1-2=-1', () => {
    var c = new Calc([1, '-', 2])
    expect(c.calc()).to.have.all.members([-1])
  })

  it('check if 1*2=2', () => {
    var c = new Calc([1, '*', 2])
    expect(c.calc()).to.have.all.members([2])
  })

  it('check if 1/2=0.5', () => {
    var c = new Calc([1, '/', 2])
    expect(c.calc()).to.have.all.members([0.5])
  })

  it('check if 1+2*3=7', () => {
    var c = new Calc([1, '+', 2, '*', 3])
    expect(c.calc()).to.have.all.members([7])
  })
});