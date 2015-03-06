'use strict';

var Shape = require('./Shape');

var Ball = function(options) {
  var self = this;
  var options = options !== undefined ? options : {};

  Shape.call(this, options);

  this.radius = options.radius !== undefined ? options.radius : 10;

  this.render = function(ctx) {
    ctx.beginPath();
    ctx.arc(self.x, self.y, self.radius, 0, 6.283185307179586, true);
    ctx.fillStyle = self.fillStyle;
    ctx.fill();
  };
};

module.exports = Ball;
