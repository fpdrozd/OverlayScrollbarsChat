/*! overlayscrollbarschat v0.1.0 | (c) 2018-2018 fpdrozd | MIT license (see LICENSE) */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.OverlayScrollbarsChat = factory());
}(this, (function () { 'use strict';

  function scrollBehavior(scrollbar, elements, content, oldContentHeight, appendScroll) {
    var calculate = function calculate() {
      var position = scrollbar.scroll().y.position;
      var hostHeight = elements.host.clientHeight;
      var contentHeight = content.clientHeight;
      if (!position) scrollbar.scroll({
        y: contentHeight - oldContentHeight
      });else if (position + hostHeight == oldContentHeight) scrollbar.scroll({
        y: contentHeight - hostHeight
      }, appendScroll.duration, appendScroll.easing);
      oldContentHeight = contentHeight;
    };

    return calculate;
  }

  function OverlayScrollbarsChat(defaultOptions, framework) {
    var scrollbar = this;
    var osChat = {};

    var scrollBehavior$$1 = function scrollBehavior$$1() {};

    osChat.added = function (options) {
      var appendScroll = framework.extend(true, {}, {
        appendScroll: {
          duration: 200,
          easing: 'linear'
        }
      }, options).appendScroll;
      var elements = scrollbar.getElements();
      var content = elements.content.querySelector('div');
      var oldContentHeight = content.clientHeight;
      scrollBehavior$$1 = scrollBehavior(scrollbar, elements, content, oldContentHeight, appendScroll);
    };

    osChat.removed = function () {
      scrollBehavior$$1 = function scrollBehavior$$1() {};
    };

    osChat.on = function (ev) {
      if (ev == 'contentSizeChanged') scrollBehavior$$1();
    };

    return osChat;
  }

  return OverlayScrollbarsChat;

})));
