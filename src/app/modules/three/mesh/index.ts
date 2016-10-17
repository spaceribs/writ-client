import {Component, ContentChildren, QueryList, OnChanges, SimpleChanges} from '@angular/core';
import * as THREE from 'three';
import {ThreeGeoBoxDirective} from '../geometry/box';

@Component({
  selector: 'three-mesh',
  template: `<ng-content></ng-content>`
})
export class ThreeMeshComponent extends THREE.Mesh implements OnChanges {
  @ContentChildren(ThreeGeoBoxDirective) public geometries: QueryList<ThreeGeoBoxDirective>;

  constructor() {
    let defaultGeo = new THREE.BoxGeometry(200, 200, 200);
    let defaultMat = new THREE.MeshBasicMaterial({
      color: 0xff0000, wireframe: true
    });
    super(defaultGeo, defaultMat);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    // if (_.has(changes, '_position')) {
    //   var pos = _.get<THREE.Vector3>(changes, '_position.currentValue');
    //   this.position.set(pos.x, pos.y, pos.z);
    // }
  }

}
