import styled from "styled-components";
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-y8tr56-0"
})(["position:fixed;top:0;left:0;width:100%;height:100%;background:rgb(113,95,245,0.5);color:#FFFFFF;display:flex;z-index:999999;"]);
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-y8tr56-1"
})(["display:flex;padding:10px;align-items:center;justify-content:center;flex-direction:column;gap:30px;margin-top:10%;margin-left:auto;margin-right:auto;color:#FFFFFF;background:transparent;opacity:1;z-index:999999;"]);
export var ImageContainer = styled.div.withConfig({
  displayName: "styles__ImageContainer",
  componentId: "sc-y8tr56-2"
})([""]);
export var ButtonContainer = styled.div.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "sc-y8tr56-3"
})(["display:flex;width:", ";padding:16px 64px;justify-content:center;align-items:center;gap:4px;"], function (_ref) {
  var isMobile = _ref.isMobile;
  return isMobile ? '100%' : '366px';
});
export var Title = styled.h1.withConfig({
  displayName: "styles__Title",
  componentId: "sc-y8tr56-4"
})(["font-size:5.371vw;font-family:", ";font-style:normal;font-weight:800;line-height:", ";letter-spacing:2.75px;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.primaryFont;
}, function (_ref3) {
  var isMobile = _ref3.isMobile;
  return isMobile ? '20px' : '71px';
});
export var Subtitle = styled.h2.withConfig({
  displayName: "styles__Subtitle",
  componentId: "sc-y8tr56-5"
})(["font-size:5.371vw;font-family:", ";font-style:normal;font-weight:800;line-height:", ";letter-spacing:2.75px;text-align:center;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.primaryFont;
}, function (_ref5) {
  var isMobile = _ref5.isMobile;
  return isMobile ? '20px' : '71px';
});