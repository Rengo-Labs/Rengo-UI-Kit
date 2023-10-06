import styled from 'styled-components';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1y0e5j8-0"
})(["width:", ";height:", ";display:flex;flex-direction:column;align-items:center;justify-content:space-between;"], function (_ref) {
  var isMobile = _ref.isMobile;
  return isMobile ? '100vw' : '450px';
}, function (_ref2) {
  var isMobile = _ref2.isMobile;
  return isMobile ? '100vh' : 'none';
});
export var TopSubContainer = styled.div.withConfig({
  displayName: "styles__TopSubContainer",
  componentId: "sc-1y0e5j8-1"
})(["width:90%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
export var DialogHeaderContainer = styled.div.withConfig({
  displayName: "styles__DialogHeaderContainer",
  componentId: "sc-1y0e5j8-2"
})(["display:flex;justify-content:center;width:100%;height:58px;border-top-left-radius:16px;border-top-right-radius:16px;background:", ";border-bottom:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.background.wallet.connectedOptions;
}, function (_ref4) {
  var theme = _ref4.theme;
  return "1px solid ".concat(theme.border.dialog);
});
export var DialogHeader = styled.div.withConfig({
  displayName: "styles__DialogHeader",
  componentId: "sc-1y0e5j8-3"
})(["height:100%;width:", ";display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"], function (_ref5) {
  var isMobile = _ref5.isMobile;
  return isMobile ? '100%' : '386px';
});
export var DialogTitle = styled.p.withConfig({
  displayName: "styles__DialogTitle",
  componentId: "sc-1y0e5j8-4"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.modalText;
});
export var CloseButton = styled.button.withConfig({
  displayName: "styles__CloseButton",
  componentId: "sc-1y0e5j8-5"
})(["background:none;border:none;cursor:pointer;"]);
export var InnerContainer = styled.div.withConfig({
  displayName: "styles__InnerContainer",
  componentId: "sc-1y0e5j8-6"
})(["width:", ";"], function (_ref8) {
  var isMobile = _ref8.isMobile;
  return isMobile ? '100%' : '386px';
});
export var BottomContainer = styled.div.withConfig({
  displayName: "styles__BottomContainer",
  componentId: "sc-1y0e5j8-7"
})(["width:100%;height:50px;display:flex;justify-content:center;align-items:center;border-top:", ";"], function (_ref9) {
  var theme = _ref9.theme;
  return "1px solid ".concat(theme.border.default);
});
export var ViewTokenListTitle = styled.p.withConfig({
  displayName: "styles__ViewTokenListTitle",
  componentId: "sc-1y0e5j8-8"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";cursor:pointer;"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.typography.secondaryFont;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.tab.textActive;
});
export var PopularTokens = styled.div.withConfig({
  displayName: "styles__PopularTokens",
  componentId: "sc-1y0e5j8-9"
})(["height:auto;display:flex;flex-direction:column;align-items:flex-start;border-bottom:", ";margin:16px auto;overflow-x:scroll;height:100px;::-webkit-scrollbar{width:10px;height:10px;}::-webkit-scrollbar:window-inactive{display:none;}::-webkit-scrollbar-thumb{height:5px;width:4px;background-color:", ";border-radius:6px;}::-webkit-scrollbar-corner{background:transparent;}"], function (_ref12) {
  var theme = _ref12.theme;
  return "1px solid ".concat(theme.border.default);
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.color.modalText;
});
export var PopularTokensTitle = styled.p.withConfig({
  displayName: "styles__PopularTokensTitle",
  componentId: "sc-1y0e5j8-10"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:14px;line-height:18px;color:", ";letter-spacing:0.02em;"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.typography.secondaryFont;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.color.tab.textActive;
});
export var PopularTokensItemsContainer = styled.div.withConfig({
  displayName: "styles__PopularTokensItemsContainer",
  componentId: "sc-1y0e5j8-11"
})(["display:flex;height:100%;justify-content:flex-start;gap:16px;padding-top:30px;"]);
export var PopularTokensItem = styled.div.withConfig({
  displayName: "styles__PopularTokensItem",
  componentId: "sc-1y0e5j8-12"
})(["max-width:133px;height:42px;flex-shrink:0;"]);
export var TokenListContainer = styled.div.withConfig({
  displayName: "styles__TokenListContainer",
  componentId: "sc-1y0e5j8-13"
})(["display:flex;flex-direction:column;text-align:end;margin-top:24px;"]);
export var SectionTitle = styled.p.withConfig({
  displayName: "styles__SectionTitle",
  componentId: "sc-1y0e5j8-14"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:14px;line-height:18px;color:", ";letter-spacing:0.02em;position:fixed;"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.typography.secondaryFont;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.color.tab.textActive;
});
export var BalanceSectionTitle = styled.p.withConfig({
  displayName: "styles__BalanceSectionTitle",
  componentId: "sc-1y0e5j8-15"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:14px;line-height:18px;color:", ";letter-spacing:0.02em;"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.typography.secondaryFont;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.color.tab.textActive;
});
export var SearchInputContainer = styled.div.withConfig({
  displayName: "styles__SearchInputContainer",
  componentId: "sc-1y0e5j8-16"
})(["margin:16px auto;"]);
export var TokenNotFoundText = styled.p.withConfig({
  displayName: "styles__TokenNotFoundText",
  componentId: "sc-1y0e5j8-17"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:", ";letter-spacing:0.02em;text-align:center;margin:16px auto;"], function (_ref20) {
  var theme = _ref20.theme;
  return theme.typography.secondaryFont;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.color.tab.textActive;
});
export var TokenItemContainer = styled.div.withConfig({
  displayName: "styles__TokenItemContainer",
  componentId: "sc-1y0e5j8-18"
})(["width:'100%';border-bottom:", ";"], function (_ref22) {
  var theme = _ref22.theme;
  return "1px solid ".concat(theme.border.default);
});