import angular from 'angular';

import './writRuntime';
import './writEditor';
import routesConfig from './routes';

// Views
import mainView from './views/main';

import './index.scss';

export default angular
  .module('Writ', [
    'Writ.Runtime',
    'Writ.Editor',
    'ui.router'
  ])
  .component('mainView', mainView)
  .config(routesConfig);
