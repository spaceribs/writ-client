import angular from 'angular';
import {writEditor} from './components/writEditor';

// import './index.scss';

export default angular
  .module('Writ.Editor', [])
  .component('writEditor', writEditor);
