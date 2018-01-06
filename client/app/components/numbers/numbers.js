import angular from 'angular';
import uiRouter from 'angular-ui-router';
import numbersComponent from './numbers.component';

let numbersModule = angular.module('numbers', [
  uiRouter
])

.component('numbers', numbersComponent)

.name;

export default numbersModule;
