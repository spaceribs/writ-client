import {Component, Input} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'writ-three-scene',
  template: require('./scene.html')
})
export class ThreeSceneComponent {
  @Input() public width: number;
  @Input() public height: number;

  scene: THREE.Scene = new THREE.Scene();
}
