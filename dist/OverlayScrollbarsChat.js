/*! overlayscrollbarschat v0.1.0 | (c) 2018-2018 fpdrozd | MIT license (see LICENSE) */
function scrollBehavior (scrollbar, elements, content, oldContentHeight, appendScroll) {
  const calculate = () => {
    const position = scrollbar.scroll().y.position;
    const hostHeight = elements.host.clientHeight;
    const contentHeight = content.clientHeight;

    if (!position) scrollbar.scroll({ y: contentHeight - oldContentHeight });
    else if (position + hostHeight == oldContentHeight) scrollbar.scroll({ y: contentHeight - hostHeight }, appendScroll.duration, appendScroll.easing);

    oldContentHeight = contentHeight;
  };
  return calculate;
}

function OverlayScrollbarsChat (defaultOptions, framework) {
  const scrollbar = this;
  const osChat = {};

  let scrollBehavior$$1 = () => {};

  osChat.added = function (options) {
    const appendScroll = framework.extend(true, {}, {
      appendScroll: {
        duration: 200,
        easing: 'linear'
      }
    }, options).appendScroll;

    const elements = scrollbar.getElements();
    const content = elements.content.querySelector('div');

    let oldContentHeight = content.clientHeight;

    scrollBehavior$$1 = scrollBehavior(scrollbar, elements, content, oldContentHeight, appendScroll);
  };

  osChat.removed = function () { scrollBehavior$$1 = () => {}; };

  osChat.on = function (ev) {
    if (ev == 'contentSizeChanged') scrollBehavior$$1();
  };

  return osChat;
}

export default OverlayScrollbarsChat;
