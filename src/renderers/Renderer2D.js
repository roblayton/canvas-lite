'use strict'

var Renderer2D = function(canvas) {
  this.ctx = canvas.getContext('2d');
  this.w = canvas.width;
  this.h = canvas.height;
  this.shapes = [];
};

Renderer2D.prototype.add = function(shape){
  this.shapes.push(shape); 
};

Renderer2D.prototype.render = function(ctx) {
  // prerender
  this.ctx.clearRect(0, 0, this.w, this.h);

  // render
  for(var i = 0, len = this.shapes.length; i < len; i++) {
    this.shapes[i].render(this.ctx);
  }

  // post render
};

module.exports = Renderer2D;
