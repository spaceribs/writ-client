const PIXI = require('pixi.js');

export default {
  template: require('./writBackground.html'),
  controller($element, $log) {

    const $ctrl = this;
    $ctrl.hello = 'Hello World!';

    $ctrl.$postLink = function () {

      this.renderer = PIXI.autoDetectRenderer(240, 85, {
        transparent: false,
        antialias: true,
        resolution: 2
      });

      this.stage = new PIXI.Container();

      $element[0].appendChild(this.renderer.view);

      const plane = new PIXI.mesh.Plane(PIXI.Texture.EMPTY, 100, 100);

      this.stage.addChild(plane);

      this.renderer.render(this.stage);
      $log.log($element, PIXI, this.renderer);
    };
  }
};
