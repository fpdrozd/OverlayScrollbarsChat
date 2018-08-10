import ScrollBehavior from './scrollBehavior';

function OverlayScrollbarsChat (defaultOptions, framework) {
  const scrollbar = this;
  const osChat = {};

  let scrollBehavior = () => {};

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

    scrollBehavior = ScrollBehavior(scrollbar, elements, content, oldContentHeight, appendScroll);
  };

  osChat.removed = function () { scrollBehavior = () => {}; };

  osChat.on = function (ev) {
    if (ev == 'contentSizeChanged') scrollBehavior();
  };

  return osChat;
}

export default OverlayScrollbarsChat;
