import styled, { keyframes } from 'styled-components';
var spin = keyframes(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-16wcbdp-0"
})(["display:flex;justify-content:center;align-items:center;height:10vh;width:70vw;"]);
export var Loader = styled.div.withConfig({
  displayName: "styles__Loader",
  componentId: "sc-16wcbdp-1"
})(["width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid ", ";border-radius:50%;animation:", " 1.5s linear infinite;"], function (_ref) {
  var theme = _ref.theme;
  return theme.background.menu;
}, spin);