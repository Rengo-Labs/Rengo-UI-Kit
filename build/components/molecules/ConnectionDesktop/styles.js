import styled from 'styled-components';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1dfmca6-0"
})(["width:380px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
export var InnerContainer = styled.div.withConfig({
  displayName: "styles__InnerContainer",
  componentId: "sc-1dfmca6-1"
})(["width:348px;margin-top:16px;"]);
export var DialogHeaderContainer = styled.div.withConfig({
  displayName: "styles__DialogHeaderContainer",
  componentId: "sc-1dfmca6-2"
})(["display:flex;justify-content:center;width:100%;height:50px;box-shadow:0px 0px 15px 15px rgba(227,223,253,0.05);border-top-left-radius:16px;border-top-right-radius:16px;background:", ";padding:40px 0 33px 0;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tab.background;
});
export var DialogHeader = styled.div.withConfig({
  displayName: "styles__DialogHeader",
  componentId: "sc-1dfmca6-3"
})(["height:100%;width:380px;display:flex;justify-content:space-between;align-items:center;padding:0 16px;"]);
export var DialogTitle = styled.p.withConfig({
  displayName: "styles__DialogTitle",
  componentId: "sc-1dfmca6-4"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.modalText;
});
export var DialogBodyText = styled.p.withConfig({
  displayName: "styles__DialogBodyText",
  componentId: "sc-1dfmca6-5"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;text-align:center;letter-spacing:0.02em;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.secondaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.default;
});
export var CloseButton = styled.button.withConfig({
  displayName: "styles__CloseButton",
  componentId: "sc-1dfmca6-6"
})(["background:none;border:none;cursor:pointer;"]);
export var WalletsContainer = styled.div.withConfig({
  displayName: "styles__WalletsContainer",
  componentId: "sc-1dfmca6-7"
})(["display:grid;grid-template-columns:1fr 1fr;gap:5px;padding:16px 0;"]);
export var DialogFooter = styled.div.withConfig({
  displayName: "styles__DialogFooter",
  componentId: "sc-1dfmca6-8"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;padding:8px 0;cursor:pointer;color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.modalText;
});