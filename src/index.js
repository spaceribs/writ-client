import angular from 'angular';

import './writRuntime';
import routesConfig from './routes';

// Components
import writBackground from './components/writBackground';

// Views
import mainView from './views/main';

import './index.scss';

export default angular
  .module('Writ', [
    'Writ.Runtime',
    'ui.router'
  ])
  .component('writBackground', writBackground)
  .component('mainView', mainView)
  .config(routesConfig);
