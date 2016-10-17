import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as THREE from 'three';
import * as _ from 'lodash';

@Directive({
  selector: 'three-cam-perspective'
})
export class ThreeCamPerspectiveDirective extends THREE.PerspectiveCamera implements OnChanges {
  @Input() public fov: number;
  @Input() public aspect: number;
  @Input() public near: number;
  @Input() public far: number;
  @Input('position') public _position: THREE.Vector3;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (_.has(changes, '_position')) {
      var pos = _.get<THREE.Vector3>(changes, '_position.currentValue');
      this.position.set(pos.x, pos.y, pos.z);
    }
    this.updateProjectionMatrix();
  }

}
