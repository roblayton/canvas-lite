'use strict';

// Boilerplate
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// Core
var Core = require('./core/Core');

// Renderers
var Renderer2D = require('./renderers/Renderer2D');

// Input
var MouseTracker = require('./input/MouseTracker');

// Shapes
var Ball = require('./shapes/Ball');

var r2d;

exports.init = function(canvas) {
  r2d = new Renderer2D(canvas);
  animloop();
};

// createShape Factory
exports.createShape = function(type, options) {
  switch(type) {
    case 'Ball':
      var b = new Ball(options);
      r2d.add(b);
      return b;
  } 
};

// Animation
function animloop(){
  requestAnimationFrame(animloop);
  r2d.render();
};

exports.Core = Core;
exports.Ball = Ball;
exports.MouseTracker = MouseTracker;
