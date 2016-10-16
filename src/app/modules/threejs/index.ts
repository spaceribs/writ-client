import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThreeJsService} from '../../services/threejs';

import {ThreeSceneComponent} from './scene';

@NgModule({
  imports: [CommonModule],
  providers: [ThreeJsService],
  declarations: [ThreeSceneComponent],
  exports: []
})
export class ThreeJSModule {
  THREE: any;

  constructor (t: ThreeJsService) {
    this.THREE = t.THREE;
  }
}
