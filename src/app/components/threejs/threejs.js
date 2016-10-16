"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ThreeSceneComponent = (function () {
    function ThreeSceneComponent() {
        this.scene = new THREE.Scene();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ThreeSceneComponent.prototype, "width");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ThreeSceneComponent.prototype, "height");
    ThreeSceneComponent = __decorate([
        core_1.Component({
            selector: 'writ-threejs',
            template: require('./threejs.html')
        }), 
        __metadata('design:paramtypes', [])
    ], ThreeSceneComponent);
    return ThreeSceneComponent;
}());
exports.ThreeSceneComponent = ThreeSceneComponent;
//# sourceMappingURL=threejs.js.map