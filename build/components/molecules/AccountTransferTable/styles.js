import styled from 'styled-components';
export var Wrapper = styled.table.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-45n5rc-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;background-color:", ";border-radius:16px;"], function (_ref) {
  var theme = _ref.theme,
    isMobile = _ref.isMobile;
  return isMobile ? 'transparent' : theme.color.table.header.background;
});
export var Body = styled.tbody.withConfig({
  displayName: "styles__Body",
  componentId: "sc-45n5rc-1"
})(["display:flex;flex-direction:column;align-items:center;width:100%;overflow-y:scroll;height:20.5rem;"]);