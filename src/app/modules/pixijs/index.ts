import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PixiRendererDirective} from './renderer';

// import * as PIXI from 'pixi.js';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PixiRendererDirective
  ],
  exports: [
    PixiRendererDirective
  ]
})
export class PixijsModule {}
