// CSS Module
import '../../node_modules/ui-select/dist/select.min.css';
import 'normalize.css';

import 'bootstrap-loader';
import 'font-awesome-loader';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';

import Common from './common/common';
import Components from './components/components';
import Filters from './filters/filters';

import AppComponent from './app.component';
import angularUi from 'angular-ui-bootstrap';
import uiSelect from 'ui-select'
import ngMap from 'ngmap'

angular.module('app', [ngSanitize, uiRouter, Common, Components, Filters, angularUi, uiSelect, ngMap]).config(($locationProvider) => {
  "ngInject";
  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(true).hashPrefix('!');

}).constant('appConfig', {
  'IHUB_SVR': 'http://ihub.iapp.co.th',
  'IHUB_UPLOAD_API_SVR': 'http://ihub.iapp.co.th/api/images/',
  'IHUB_API_SVR': 'http://ihub.iapp.co.th/api/datas',
  'IHUB_PROMOTION_API_SVR': 'http://ihub.iapp.co.th/api/promotions',
  'SOURCE_TYPE': {
    'ACCOMMODATION': 'accommodation',
    'ATTRACTION': 'attraction',
    'EVENT': 'event',
    'OTOP': 'otop',
    'RESTAURANT': 'restaurant',
    'SHOP': 'shop',
    'BUSINESS': 'business'
  }
}).component('app', AppComponent);
