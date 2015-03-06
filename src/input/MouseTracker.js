'use strict';

var MouseTracker = function(el, callbacks) {
  // Detect if the browser is IE or not.
  // If it is not IE, we assume that the browser is NS.
  var IE = document.all ? true: false;

  // If NS -- that is, !IE -- then set up for mouse capture
  //if (!IE) document.captureEvents(Event.MOUSEMOVE)

  // Temporary variables to hold mouse x-y pos.s
  var tempX = 0;
  var tempY = 0;

  var getMouseXY = function(evt) {
    if (IE) { // grab the x-y pos.s if browser is IE
      tempX = evt.clientX + document.body.scrollLeft;
      tempY = evt.clientY + document.body.scrollTop;
    } else { // grab the x-y pos.s if browser is NS
      tempX = evt.pageX;
      tempY = evt.pageY;
    }
    // catch possible negative values in NS4
    if (tempX < 0) {
      tempX = 0;
    }
    if (tempY < 0) {
      tempY = 0;
    }

    if (callbacks.onMouseMove) {
        callbacks.onMouseMove(evt, tempX, tempY);
    }
  };

  // Main function to retrieve mouse x-y pos.s

  var onMouseDownHandler = function(evt, x, y) {
      callbacks.onMouseDown(evt, tempX, tempY);
  };

  var getX = function() {
      return tempX;
  };

  var getY = function() {
      return tempY;
  };

  if (callbacks.onMouseDown) {
      el.onmousedown = onMouseDownHandler;
  }

  el.onmousemove = getMouseXY;

  return {
    getX: getX,
    getY: getY
  }

};

module.exports = MouseTracker;
