import angular from 'angular';
import Calculator from './calculator/calculator';
import Numbers from './numbers/numbers';
import Operators from './operators/operators';

let componentModule = angular.module('app.components', [
	Calculator,
	Numbers,
	Operators
])

.name;

export default componentModule;
