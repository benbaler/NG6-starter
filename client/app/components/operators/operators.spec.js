import OperatorsModule from './operators';
import OperatorsController from './operators.controller';
import OperatorsComponent from './operators.component';
import OperatorsTemplate from './operators.html';

describe('Operators', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OperatorsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OperatorsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(OperatorsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = OperatorsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OperatorsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OperatorsController);
    });
  });
});
