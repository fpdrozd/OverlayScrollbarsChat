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

export default scrollBehavior;
