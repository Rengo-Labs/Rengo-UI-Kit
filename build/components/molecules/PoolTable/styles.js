import styled, { css } from 'styled-components';
export var Wrapper = styled.table.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1hek7rg-0"
})(["width:100%;background-color:", ";border-radius:16px;border-collapse:collapse;"], function (_ref) {
  var theme = _ref.theme,
    isMobile = _ref.isMobile;
  return isMobile ? 'transparent' : theme.color.table.header.background;
});
export var Body = styled.tbody.withConfig({
  displayName: "styles__Body",
  componentId: "sc-1hek7rg-1"
})(["", ""], function (_ref2) {
  var isMobile = _ref2.isMobile;
  return isMobile && css(["display:flex;flex-direction:column;gap:16px;"]);
});