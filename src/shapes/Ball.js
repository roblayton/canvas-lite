'use strict';

var Ball = function(options) {
  var self = this;
  var options = options !== undefined ? options : {};
  this.x = options.x !== undefined ? options.x : 0;
  this.y = options.y !== undefined ? options.y : 0;
  this.radius = options.radius !== undefined ? options.radius : 10;
  this.fillStyle = options.fillStyle !== undefined ? options.fillStyle : '#000';

  this.render = function(ctx) {
    ctx.beginPath();
    ctx.arc(self.x, self.y, self.radius, 0, 6.283185307179586, true);
    ctx.fillStyle = self.fillStyle;
    ctx.fill();
  };
};

Ball.prototype

module.exports = Ball;
