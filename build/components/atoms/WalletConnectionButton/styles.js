import styled from 'styled-components';
export var ButtonWrapper = styled.button.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-1i9r4i0-0"
})(["display:flex;align-items:center;gap:4px;background-color:", ";color:", ";padding:", ";border-radius:5px;border:none;cursor:pointer;height:", ";max-width:", ";font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;overflow:hidden;"], function (_ref) {
  var theme = _ref.theme;
  return theme.btnbackgroundColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primarybtntextColor;
}, function (_ref3) {
  var isMobile = _ref3.isMobile;
  return isMobile ? '8px' : '10px';
}, function (_ref4) {
  var isMobile = _ref4.isMobile;
  return isMobile ? '36px' : '52px';
}, function (_ref5) {
  var isMobile = _ref5.isMobile;
  return isMobile ? '101px' : '184px';
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
});
export var TextIconTouchable = styled.img.withConfig({
  displayName: "styles__TextIconTouchable",
  componentId: "sc-1i9r4i0-1"
})(["width:24px;height:24px;color:", ";background-color:", ";"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.primarybtntextColor;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.btnbackgroundColor;
});