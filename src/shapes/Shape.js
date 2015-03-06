'use strict';

var Shape = function(options) {
  this.x = options.x !== undefined ? options.x : 0;
  this.y = options.y !== undefined ? options.y : 0;
  this.fillStyle = options.fillStyle !== undefined ? options.fillStyle : '#000';
};

module.exports = Shape;
