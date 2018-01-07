import CalculatorModule from './calculator';
import CalculatorController from './calculator.controller';
import CalculatorComponent from './calculator.component';
import CalculatorTemplate from './calculator.html';

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
});
