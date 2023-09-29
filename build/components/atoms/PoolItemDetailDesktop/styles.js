import styled from 'styled-components';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-sgg6u1-0"
})(["width:450px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px 28px;"]);
export var InnerContainer = styled.div.withConfig({
  displayName: "styles__InnerContainer",
  componentId: "sc-sgg6u1-1"
})(["width:100%;margin-top:8px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:20px;"]);
export var DialogHeaderContainer = styled.div.withConfig({
  displayName: "styles__DialogHeaderContainer",
  componentId: "sc-sgg6u1-2"
})(["display:flex;justify-content:center;width:100%;height:50px;background:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tab.background;
});
export var DialogHeader = styled.div.withConfig({
  displayName: "styles__DialogHeader",
  componentId: "sc-sgg6u1-3"
})(["height:100%;width:100%;display:flex;justify-content:space-between;align-items:center;"]);
export var DialogTitle = styled.p.withConfig({
  displayName: "styles__DialogTitle",
  componentId: "sc-sgg6u1-4"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.modalText;
});
export var CloseButton = styled.button.withConfig({
  displayName: "styles__CloseButton",
  componentId: "sc-sgg6u1-5"
})(["background:none;border:none;cursor:pointer;"]);
export var FavoriteIcon = styled.img.withConfig({
  displayName: "styles__FavoriteIcon",
  componentId: "sc-sgg6u1-6"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;color:", ";&:active{transform:scale(0.9);filter:brightness(0.8);}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.default;
});
export var TokenPairWrapper = styled.div.withConfig({
  displayName: "styles__TokenPairWrapper",
  componentId: "sc-sgg6u1-7"
})(["display:flex;align-items:center;justify-content:flex-start;gap:8px;margin-right:-40px;"]);
export var IconWrapper = styled.div.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-sgg6u1-8"
})(["display:flex;justify-content:center;align-items:center;"]);
export var Icon = styled.img.attrs(function (_ref5) {
  var width = _ref5.width,
    height = _ref5.height;
  return {
    width: width,
    height: height
  };
}).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-sgg6u1-9"
})(["&:first-child{margin-right:-15px;}"]);
export var PoolText = styled.p.withConfig({
  displayName: "styles__PoolText",
  componentId: "sc-sgg6u1-10"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;text-align:center;letter-spacing:0.02em;color:", ";"], function (props) {
  return props.theme.typography.secondaryFont;
}, function (props) {
  return props.theme.color.default;
});
export var PoolKeyPairContainer = styled.div.withConfig({
  displayName: "styles__PoolKeyPairContainer",
  componentId: "sc-sgg6u1-11"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:4px;width:100%;"]);
export var PoolKey = styled.p.withConfig({
  displayName: "styles__PoolKey",
  componentId: "sc-sgg6u1-12"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:16px;line-height:32px;color:", ";"], function (props) {
  return props.theme.typography.secondaryFont;
}, function (props) {
  return props.theme.color.modalText;
});
export var PoolValue = styled.p.withConfig({
  displayName: "styles__PoolValue",
  componentId: "sc-sgg6u1-13"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:20px;line-height:27px;letter-spacing:0.02em;color:", ";"], function (props) {
  return props.theme.typography.secondaryFont;
}, function (props) {
  return props.theme.color.default;
});