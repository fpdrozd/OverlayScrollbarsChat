import OverlayScrollbarsChat from './../src/OverlayScrollbarsChat';
import * as ScrollBehavior from './../src/scrollBehavior';

describe('OverlayScrollbarsChat', () => {
  let fakeScrollBehaviorInstance = jest.fn();
  let osChatIntance;

  it('Initiates instance correctly', () => {
    const osContent = document.createElement('div');
    osContent.innerHTML = `<div></div>`;
    const content = osContent.querySelector('div');
    Object.defineProperty(content, 'clientHeight', { value: 0 });

    const getElementsResult = { content: osContent };

    const osInstance = { getElements: () => getElementsResult };

    const parsedAppendScroll = () => {};
    const fakeFramework = { extend: jest.fn(() => ({
      appendScroll: parsedAppendScroll
    })) };

    ScrollBehavior.default = jest.fn(() => (fakeScrollBehaviorInstance));

    const osChat = OverlayScrollbarsChat.bind(osInstance);
    osChatIntance = osChat(null, fakeFramework);

    osChatIntance.added({
      appendScroll: { duration: 300, easing: 'swing' }
    });

    expect(fakeFramework.extend).toHaveBeenCalledWith(true, {}, {
      appendScroll: {
        duration: 200,
        easing: 'linear'
      }
    }, {
      appendScroll: {
        duration: 300,
        easing: 'swing'
      }
    });
    return expect(ScrollBehavior.default).toHaveBeenCalledWith(osInstance, getElementsResult, content, 0, parsedAppendScroll);
  });

  it('Calls scrollBehavior when content size changed', () => {
    osChatIntance.on('onScroll');
    expect(fakeScrollBehaviorInstance).not.toHaveBeenCalled();

    osChatIntance.on('contentSizeChanged');
    return expect(fakeScrollBehaviorInstance).toHaveBeenCalled();
  });
});
