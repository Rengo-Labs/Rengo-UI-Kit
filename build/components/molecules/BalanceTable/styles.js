import styled from 'styled-components';
export var Body = styled.tbody.withConfig({
  displayName: "styles__Body",
  componentId: "sc-cn2nxh-0"
})(["width:100%;display:flex;flex-direction:column;"]);
export var Wrapper = styled.table.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-cn2nxh-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;width:100%;background-color:", ";border-radius:16px;"], function (_ref) {
  var theme = _ref.theme,
    isMobile = _ref.isMobile;
  return isMobile ? 'transparent' : theme.color.table.header.background;
});