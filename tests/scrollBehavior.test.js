import ScrollBehavior from './../src/scrollBehavior';

describe('ScrollBehavior', () => {
  const osHost = document.createElement('div');
  Object.defineProperty(osHost, 'clientHeight', {
    value: 400
  });
  const fakeElements = {
    host: osHost
  };
  const fakeContent = document.createElement('div');
  Object.defineProperty(fakeContent, 'clientHeight', {
    value: 1100
  });
  const fakeOldContentHeight = 800;

  it('Stays at the same position when prepending content', () => {
    const fakeScrollbar = {
      scroll: jest.fn(() => ({ position: {y: 0} }))
    };

    const scrollBehavior = ScrollBehavior(fakeScrollbar, fakeElements, fakeContent, fakeOldContentHeight);

    scrollBehavior();

    return expect(fakeScrollbar.scroll).toHaveBeenCalledWith({ y: 300 });
  });

  it('Follows appended content', () => {
    const fakeScrollbar = {
      scroll: jest.fn(() => ({ position: { y: 400 } }))
    };
    const fakeAppendScroll = {
      duration: 200,
      easing: 'linear'
    };

    const scrollBehavior = ScrollBehavior(fakeScrollbar, fakeElements, fakeContent, fakeOldContentHeight, fakeAppendScroll);

    scrollBehavior();

    return expect(fakeScrollbar.scroll).toHaveBeenCalledWith({ y: 700 }, 200, 'linear');
  });

  it('Does not follow appended content when scroll position is in the middle of the content', () => {
    const fakeScrollbar = {
      scroll: jest.fn(() => ({ position: { y: 300 } }))
    };

    const scrollBehavior = ScrollBehavior(fakeScrollbar, fakeElements, fakeContent, fakeOldContentHeight);

    scrollBehavior();

    return expect(fakeScrollbar.scroll).not.toHaveBeenCalledTimes(2);
  });
});
