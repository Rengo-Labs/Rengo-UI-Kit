import styled from 'styled-components';
import { IconSize } from './types';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-rpvpd4-0"
})(["height:100%;display:flex;justify-content:space-between;"]);
export var IconContainer = styled.div.withConfig({
  displayName: "styles__IconContainer",
  componentId: "sc-rpvpd4-1"
})(["height:100%;display:flex;justify-content:space-between;align-items:center;"]);
export var TokenContainer = styled.div.withConfig({
  displayName: "styles__TokenContainer",
  componentId: "sc-rpvpd4-2"
})(["display:flex;justify-content:flex-start;align-items:center;gap:8px;&:hover{cursor:pointer;background-color:", ";}&:focus{cursor:pointer;background-color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tab.hover;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.tab.hover;
});
export var TokenNamesContainer = styled.div.withConfig({
  displayName: "styles__TokenNamesContainer",
  componentId: "sc-rpvpd4-3"
})([""]);
export var TokenName = styled.p.withConfig({
  displayName: "styles__TokenName",
  componentId: "sc-rpvpd4-4"
})(["font-family:", ";font-size:14px;line-height:18px;letter-spacing:0.02em;font-weight:600;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.secondaryFont;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.default;
});
export var TokenFullName = styled.p.withConfig({
  displayName: "styles__TokenFullName",
  componentId: "sc-rpvpd4-5"
})(["font-family:", ";font-weight:400;font-size:12px;line-height:16px;letter-spacing:0.02em;color:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.secondaryFont;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.default;
});
export var Image = styled.img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-rpvpd4-6"
})(["height:", ";"], function (_ref7) {
  var iconSize = _ref7.iconSize;
  return iconSize === IconSize.Small ? "".concat(IconSize.Small, "px") : "".concat(IconSize.Large, "px");
});