import NumbersModule from './numbers';
import NumbersController from './numbers.controller';
import NumbersComponent from './numbers.component';
import NumbersTemplate from './numbers.html';

describe('Numbers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NumbersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NumbersController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
    // component/directive specs
    let component = NumbersComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NumbersTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NumbersController);
    });
  });
});
