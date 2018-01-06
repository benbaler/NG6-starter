import template from './operators.html';
import controller from './operators.controller';
import './operators.scss';

let operatorsComponent = {
  bindings: {
  	operator: '=',
  	addOperator: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default operatorsComponent;
