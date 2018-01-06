import CalculatorModule from './calculator';
import CalculatorController from './calculator.controller';
import CalculatorComponent from './calculator.component';
import CalculatorTemplate from './calculator.html';
import Calc from './calc';

describe('Calculator', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CalculatorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CalculatorController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
    // component/directive specs
    let component = CalculatorComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CalculatorTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CalculatorController);
    });
  });

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
});
