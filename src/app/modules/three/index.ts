import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ThreeSceneComponent} from './scene';
import {ThreeCamPerspectiveDirective} from './camera/perspective';
import {ThreeMeshComponent} from './mesh';
import {ThreeRendererDirective} from './renderer';
import {ThreeGeoBoxDirective} from './geometry/box';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ThreeSceneComponent,
    ThreeCamPerspectiveDirective,
    ThreeGeoBoxDirective,
    ThreeRendererDirective,
    ThreeMeshComponent
  ],
  exports: [
    ThreeSceneComponent,
    ThreeCamPerspectiveDirective,
    ThreeGeoBoxDirective,
    ThreeRendererDirective,
    ThreeMeshComponent
  ]
})
export class ThreeModule {}
