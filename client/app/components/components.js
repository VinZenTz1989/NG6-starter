import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Travel from './travel/index/travel'

let componentModule = angular.module('app.components', [Home, Travel, About]).name;

export default componentModule;
