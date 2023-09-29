import styled from 'styled-components';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-ibcd8u-0"
})(["position:fixed;top:0;right:0;width:100%;height:100vh;transform:", ";transition:transform 0.3s ease-in-out;z-index:1000;background:", ";overflow-y:scroll;"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'translateX(0)' : 'translateX(200vw)';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.tab.background;
});
export var Content = styled.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-ibcd8u-1"
})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:16px 28px;"]);
export var InnerContainer = styled.div.withConfig({
  displayName: "styles__InnerContainer",
  componentId: "sc-ibcd8u-2"
})(["width:100%;margin-top:8px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:20px;"]);
export var DialogHeaderContainer = styled.div.withConfig({
  displayName: "styles__DialogHeaderContainer",
  componentId: "sc-ibcd8u-3"
})(["display:flex;justify-content:center;width:100%;height:50px;border-top-left-radius:16px;border-top-right-radius:16px;background:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.tab.background;
});
export var DialogHeader = styled.div.withConfig({
  displayName: "styles__DialogHeader",
  componentId: "sc-ibcd8u-4"
})(["height:100%;width:100%;display:flex;justify-content:space-between;align-items:center;"]);
export var DialogTitle = styled.p.withConfig({
  displayName: "styles__DialogTitle",
  componentId: "sc-ibcd8u-5"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.secondaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.modalText;
});
export var CloseButton = styled.button.withConfig({
  displayName: "styles__CloseButton",
  componentId: "sc-ibcd8u-6"
})(["background:none;border:none;cursor:pointer;"]);
export var FavoriteIcon = styled.img.withConfig({
  displayName: "styles__FavoriteIcon",
  componentId: "sc-ibcd8u-7"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;color:", ";&:active{transform:scale(0.9);filter:brightness(0.8);}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.default;
});
export var TokenPairWrapper = styled.div.withConfig({
  displayName: "styles__TokenPairWrapper",
  componentId: "sc-ibcd8u-8"
})(["display:flex;align-items:center;justify-content:flex-start;gap:8px;margin-right:-40px;"]);
export var IconWrapper = styled.div.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-ibcd8u-9"
})(["display:flex;justify-content:center;align-items:center;"]);
export var Icon = styled.img.attrs(function (_ref7) {
  var width = _ref7.width,
    height = _ref7.height;
  return {
    width: width,
    height: height
  };
}).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-ibcd8u-10"
})(["&:first-child{margin-right:-15px;}"]);
export var PoolText = styled.p.withConfig({
  displayName: "styles__PoolText",
  componentId: "sc-ibcd8u-11"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;text-align:center;letter-spacing:0.02em;color:", ";"], function (props) {
  return props.theme.typography.secondaryFont;
}, function (props) {
  return props.theme.color.default;
});
export var PoolKeyPairContainer = styled.div.withConfig({
  displayName: "styles__PoolKeyPairContainer",
  componentId: "sc-ibcd8u-12"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:4px;width:100%;"]);
export var PoolKey = styled.p.withConfig({
  displayName: "styles__PoolKey",
  componentId: "sc-ibcd8u-13"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:16px;line-height:32px;color:", ";"], function (props) {
  return props.theme.typography.secondaryFont;
}, function (props) {
  return props.theme.color.modalText;
});
export var PoolValue = styled.p.withConfig({
  displayName: "styles__PoolValue",
  componentId: "sc-ibcd8u-14"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:20px;line-height:27px;letter-spacing:0.02em;color:", ";"], function (props) {
  return props.theme.typography.secondaryFont;
}, function (props) {
  return props.theme.color.default;
});