import styled from 'styled-components';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-14nax2-0"
})(["width:450px;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:16px;"]);
export var InnerContainer = styled.div.withConfig({
  displayName: "styles__InnerContainer",
  componentId: "sc-14nax2-1"
})(["width:", ";height:100%;display:flex;flex-direction:column;justify-content:space-between;"], function (_ref) {
  var isMobile = _ref.isMobile;
  return isMobile ? '80%' : '386px';
});
export var SliderContainer = styled.div.withConfig({
  displayName: "styles__SliderContainer",
  componentId: "sc-14nax2-2"
})(["height:72px;width:100%;display:flex;justify-content:center;align-items:center;"]);
export var TransactionsContainer = styled.div.withConfig({
  displayName: "styles__TransactionsContainer",
  componentId: "sc-14nax2-3"
})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
export var DialogHeaderContainer = styled.div.withConfig({
  displayName: "styles__DialogHeaderContainer",
  componentId: "sc-14nax2-4"
})(["display:flex;justify-content:center;width:", ";height:50px;border-top-left-radius:16px;border-top-right-radius:16px;background:", ";padding:40px 0 33px 0;"], function (_ref2) {
  var isMobile = _ref2.isMobile;
  return isMobile ? '80%' : '100%';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.background.wallet.connectedOptions;
});
export var DialogHeader = styled.div.withConfig({
  displayName: "styles__DialogHeader",
  componentId: "sc-14nax2-5"
})(["height:100%;width:386px;display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"]);
export var DialogTitle = styled.p.withConfig({
  displayName: "styles__DialogTitle",
  componentId: "sc-14nax2-6"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.secondaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.modalText;
});
export var CloseButton = styled.button.withConfig({
  displayName: "styles__CloseButton",
  componentId: "sc-14nax2-7"
})(["background:none;border:none;cursor:pointer;"]);
export var TopSubContainer = styled.div.withConfig({
  displayName: "styles__TopSubContainer",
  componentId: "sc-14nax2-8"
})(["width:100%;display:flex;flex-direction:column;"]);
export var BottomSubContainer = styled.div.withConfig({
  displayName: "styles__BottomSubContainer",
  componentId: "sc-14nax2-9"
})(["width:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;"]);
export var ToggleContainer = styled.div.withConfig({
  displayName: "styles__ToggleContainer",
  componentId: "sc-14nax2-10"
})(["width:100%;display:flex;justify-content:center;align-items:center;margin:16px 0 0 0;"]);
export var TransactionsInnerContainer = styled.div.withConfig({
  displayName: "styles__TransactionsInnerContainer",
  componentId: "sc-14nax2-11"
})(["display:flex;justify-content:center;width:100%;border-bottom:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return "1px solid ".concat(theme.border.default);
});