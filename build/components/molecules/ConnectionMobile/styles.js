import styled from 'styled-components';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-7sbkkn-0"
})(["position:fixed;top:0;right:0;width:100%;height:100vh;transform:", ";transition:transform 0.3s ease-in-out;z-index:1000;background:", ";"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'translateX(0)' : 'translateX(200vw)';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.tab.background;
});
export var Content = styled.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-7sbkkn-1"
})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
export var InnerContainer = styled.div.withConfig({
  displayName: "styles__InnerContainer",
  componentId: "sc-7sbkkn-2"
})(["width:100%;margin-top:16px;padding:0 16px;display:flex;flex-direction:column;flex:1;"]);
export var DialogHeaderContainer = styled.div.withConfig({
  displayName: "styles__DialogHeaderContainer",
  componentId: "sc-7sbkkn-3"
})(["display:flex;justify-content:center;width:100%;height:50px;box-shadow:0px 0px 15px 15px rgba(227,223,253,0.05);padding:40px 0 33px 0;"]);
export var DialogHeader = styled.div.withConfig({
  displayName: "styles__DialogHeader",
  componentId: "sc-7sbkkn-4"
})(["height:100%;width:380px;display:flex;justify-content:space-between;align-items:center;padding:0 16px;background:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.background.searchInput;
});
export var DialogTitle = styled.p.withConfig({
  displayName: "styles__DialogTitle",
  componentId: "sc-7sbkkn-5"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.secondaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.modalText;
});
export var DialogBodyText = styled.p.withConfig({
  displayName: "styles__DialogBodyText",
  componentId: "sc-7sbkkn-6"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;text-align:center;letter-spacing:0.02em;color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.default;
});
export var CloseButton = styled.button.withConfig({
  displayName: "styles__CloseButton",
  componentId: "sc-7sbkkn-7"
})(["background:none;border:none;cursor:pointer;"]);
export var WalletsContainer = styled.div.withConfig({
  displayName: "styles__WalletsContainer",
  componentId: "sc-7sbkkn-8"
})(["display:flex;flex-direction:column;justify-content:center;gap:10px;padding:16px 0;"]);
export var DialogFooter = styled.div.withConfig({
  displayName: "styles__DialogFooter",
  componentId: "sc-7sbkkn-9"
})(["font-family:", ";display:flex;justify-content:center;font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;padding:16px 0;cursor:pointer;color:", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.typography.secondaryFont;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.modalText;
});