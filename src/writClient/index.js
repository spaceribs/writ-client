import angular from 'angular';

import {hello} from './components/hello';
import routesConfig from './routes';

import './index.scss';

export default angular
  .module('WritClient', [
    'ui.router'
  ])
  .config(routesConfig)
  .component('app', hello);

