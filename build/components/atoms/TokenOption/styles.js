import styled from 'styled-components';
export var WrapperStyled = styled.div.withConfig({
  displayName: "styles__WrapperStyled",
  componentId: "sc-pk9qsg-0"
})(["display:flex;align-items:center;justify-content:space-evenly;min-width:80px;max-height:43px;padding:5px;border-radius:50px;gap:5px;background-color:", ";&:hover{cursor:pointer;}&:active{background-color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.tokenOption.tokenOptionBackgroundColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.background.default;
});
export var TokenStyled = styled.div.withConfig({
  displayName: "styles__TokenStyled",
  componentId: "sc-pk9qsg-1"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.secondaryFont;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.tokenOption.tokenOptionTextColor;
});
export var Ellipse = styled.div.withConfig({
  displayName: "styles__Ellipse",
  componentId: "sc-pk9qsg-2"
})(["width:13px;height:13px;border-radius:50%;background-color:", ";"], function (_ref5) {
  var theme = _ref5.theme,
    isOption1 = _ref5.isOption1;
  return isOption1 ? theme.color.tokenOption.tokenOption1Color : theme.color.tokenOption.tokenOption2Color;
});