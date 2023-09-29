import styled from "styled-components";
export var WrapperStyled = styled.div.withConfig({
  displayName: "styles__WrapperStyled",
  componentId: "sc-rbwimd-0"
})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:center;gap:10px;order:0;flex-grow:0;cursor:pointer;user-select:none;background:", ";border-radius:8px;padding:", ";@media (min-width:430px){align-items:center;}"], function (props) {
  return props.background ? props.background : props.theme.background.default;
}, function (props) {
  return props.padding ? props.background : 0;
});
export var NameStyled = styled.p.withConfig({
  displayName: "styles__NameStyled",
  componentId: "sc-rbwimd-1"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:12px;line-height:16px;letter-spacing:0.02em;color:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.secondaryFont;
}, function (props) {
  var _props$titleColor;
  return (_props$titleColor = props.titleColor) !== null && _props$titleColor !== void 0 ? _props$titleColor : props.theme.color.default;
}, function (_ref2) {
  var isUpperCase = _ref2.isUpperCase;
  return isUpperCase && " text-transform: uppercase;";
});