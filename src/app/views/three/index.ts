import {Component} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'writ-three',
  template: require('./three.html')
})
export class ThreeViewComponent {
  public width: number;
  public height: number;
  public cameraPos: THREE.Vector3;
  public ratio: Function = function() {
    return this.width / this.height;
  };

  constructor() {
    this.width = 640;
    this.height = 480;
    this.cameraPos = new THREE.Vector3(0, 0, 1000);
  }
}
