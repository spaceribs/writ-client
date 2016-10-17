import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as THREE from 'three';
import * as _ from 'lodash';

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
    
    // if (_.has(changes, '_position')) {
    //   var pos = _.get<THREE.Vector3>(changes, '_position.currentValue');
    //   this.position.set(pos.x, pos.y, pos.z);
    // }
  }

}
