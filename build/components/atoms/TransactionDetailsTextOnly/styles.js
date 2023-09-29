import styled from 'styled-components';
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1vik6bv-0"
})(["width:100%;display:flex;justify-content:space-evenly;align-items:center;background:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tab.background;
});
export var InnerWrapper = styled.div.withConfig({
  displayName: "styles__InnerWrapper",
  componentId: "sc-1vik6bv-1"
})(["width:100%;display:flex;align-items:center;margin:16px 0 16px 0;flex-wrap:wrap;gap:24px;"]);
export var LeftWrapper = styled.div.withConfig({
  displayName: "styles__LeftWrapper",
  componentId: "sc-1vik6bv-2"
})(["height:100%;display:flex;justify-content:center;align-items:center;color:", ";font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;margin-bottom:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.modalText;
}, function (_ref3) {
  var isMobile = _ref3.isMobile;
  return isMobile ? '8px' : '0px';
});
export var RightWrapper = styled.div.withConfig({
  displayName: "styles__RightWrapper",
  componentId: "sc-1vik6bv-3"
})(["height:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:8px;"]);
export var TokenInfo = styled.p.withConfig({
  displayName: "styles__TokenInfo",
  componentId: "sc-1vik6bv-4"
})(["font-family:", ";color:", ";font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.secondaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.default;
});