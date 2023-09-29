import styled from 'styled-components';
export var ButtonWalletDesktop = styled.button.withConfig({
  displayName: "styles__ButtonWalletDesktop",
  componentId: "sc-sarzt2-0"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:14px 32px;gap:4px;background-color:", ";border-radius:8px;flex:none;order:1;flex-grow:0;border:none;cursor:pointer;:hover{background-color:", ";}:active{background-color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.btnbackgroundColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.btnbackgroundColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.btndisabledbackgroundColor;
});
export var ButtonWalletMobile = styled.button.withConfig({
  displayName: "styles__ButtonWalletMobile",
  componentId: "sc-sarzt2-1"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:8px;gap:4px;background-color:", ";border-radius:4px;flex:none;order:2;flex-grow:0;border:none;cursor:pointer;:hover{background-color:", ";}:active{background-color:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.btnbackgroundColor;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.btnbackgroundColor;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.btndisabledbackgroundColor;
});
export var ButtonWalletText = styled.p.withConfig({
  displayName: "styles__ButtonWalletText",
  componentId: "sc-sarzt2-2"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:#5B4BC9;"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.secondaryFont;
});
export var ButtonWalletIcon = styled.img.withConfig({
  displayName: "styles__ButtonWalletIcon",
  componentId: "sc-sarzt2-3"
})(["width:24px;height:24px;margin-right:2px;"]);