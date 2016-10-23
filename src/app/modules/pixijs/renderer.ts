import {Input, Directive, AfterContentInit, ElementRef} from '@angular/core';
import * as PIXI from 'pixi.js/bin/pixi.js';

@Directive({
  selector: 'pixi-renderer'
})
export class PixiRendererDirective extends PIXI.WebGLRenderer implements AfterContentInit {
  @Input() public width: number = 200;
  @Input() public height: number = 200;

  constructor(private element: ElementRef) {
    super();
  }

  ngAfterContentInit() {
    console.log(this);
    this.element.nativeElement.appendChild(this.view);
    this.resize(this.width, this.height);
    // this.setPixelRatio(Math.floor(window.devicePixelRatio));
  }

}
