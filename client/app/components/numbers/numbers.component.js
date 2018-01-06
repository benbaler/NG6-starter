import template from './numbers.html';
import controller from './numbers.controller';
import './numbers.scss';

let numbersComponent = {
  bindings: {
  	'number': '=',
  	'addNumber': '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default numbersComponent;
