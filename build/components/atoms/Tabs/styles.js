import styled from 'styled-components';
export var WrapperStyle = styled.div.withConfig({
  displayName: "styles__WrapperStyle",
  componentId: "sc-1e3gkvr-0"
})(["display:flex;justify-content:space-between;width:100%;max-height:42px;"]);
export var Tab = styled.div.withConfig({
  displayName: "styles__Tab",
  componentId: "sc-1e3gkvr-1"
})(["display:flex;width:100%;justify-content:center;align-items:center;padding:8px 0px;background-color:", ";border-bottom:", ";cursor:pointer;&:first-child{border-radius:16px 0 0 0;};&:last-child{border-radius:0 16px 0 0;};&:focus{background-color:", "};&:hover{background-color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tab.background;
}, function (_ref2) {
  var theme = _ref2.theme,
    isActive = _ref2.isActive;
  return "4px solid ".concat(isActive ? theme.color.tab.borderActive : theme.color.tab.borderInactive);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.tab.borderInactive;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.tab.borderInactive;
});
export var TabText = styled.p.withConfig({
  displayName: "styles__TabText",
  componentId: "sc-1e3gkvr-2"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;color:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.secondaryFont;
}, function (_ref6) {
  var theme = _ref6.theme,
    isActive = _ref6.isActive;
  return isActive ? theme.color.tab.textActive : theme.color.tab.textInactive;
});