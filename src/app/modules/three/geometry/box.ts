import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as THREE from 'three';

@Directive({
  selector: 'three-geo-box'
})
export class ThreeGeoBoxDirective extends THREE.BoxGeometry implements OnChanges {

  @Input() public width: number;
  @Input() public height: number;
  @Input() public depth: number;

  constructor() {
    super(1, 1, 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
