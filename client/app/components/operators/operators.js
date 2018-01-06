import angular from 'angular';
import uiRouter from 'angular-ui-router';
import operatorsComponent from './operators.component';

let operatorsModule = angular.module('operators', [
  uiRouter
])

.component('operators', operatorsComponent)

.name;

export default operatorsModule;
