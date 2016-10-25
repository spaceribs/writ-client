import angular from 'angular';

import writClient from './writClient';
import routesConfig from './routes';

import './index.scss';

export default angular
  .module('WritApp', [
    'WritClient'
  ])
  .config(routesConfig);
