import {Directive, AfterContentInit, ElementRef} from '@angular/core';
import * as THREE from 'three';

@Directive({
  selector: 'three-renderer'
})
export class ThreeRendererDirective extends THREE.WebGLRenderer implements AfterContentInit {

  constructor(private element: ElementRef) {
    super();
  }

  ngAfterContentInit() {
    this.element.nativeElement.appendChild(this.domElement);
    this.setPixelRatio(Math.floor(window.devicePixelRatio));
  }

}
