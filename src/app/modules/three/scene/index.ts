import {
  Component,
  Input,
  HostBinding,
  ContentChild,
  ContentChildren,
  AfterContentInit,
  QueryList
} from '@angular/core';
import * as THREE from 'three';
import {ThreeCamPerspectiveDirective} from '../camera/perspective';
import {ThreeMeshComponent} from '../mesh';
import {ThreeRendererDirective} from '../renderer';

@Component({
  selector: 'three-scene',
  template: `<ng-content></ng-content>`
})
export class ThreeSceneComponent extends THREE.Scene implements AfterContentInit {
  @HostBinding('style.width.px') @Input() public width: number;
  @HostBinding('style.height.px') @Input() public height: number;

  @ContentChild(ThreeCamPerspectiveDirective) public camera: ThreeCamPerspectiveDirective;
  @ContentChild(ThreeRendererDirective) public renderer: ThreeRendererDirective;
  @ContentChildren(ThreeMeshComponent) public meshes: QueryList<ThreeMeshComponent>;

  constructor () {
    super();
  }

  public tick: Function = function() {
    this.meshes.forEach((mesh) => {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;
    });
    this.renderer.render(this, this.camera);
    let vm: ThreeSceneComponent = this;
    requestAnimationFrame(function(){
      vm.tick(vm);
    });
  };

  ngAfterContentInit() {
    this.add(this.camera);

    this.meshes.forEach((mesh) => {
      this.add(mesh);
    });

    this.renderer.setSize(this.width, this.height);
    this.tick();
  }
}
