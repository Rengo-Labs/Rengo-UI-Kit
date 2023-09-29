import styled from 'styled-components';
export var WrapperStyled = styled.div.withConfig({
  displayName: "styles__WrapperStyled",
  componentId: "sc-1dgvu3a-0"
})(["display:flex;align-items:center;justify-content:center;padding:8px 16px;gap:4px;border-radius:50px;background-color:", ";border:1px solid ", ";cursor:pointer;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.background.default;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.border.default;
}, function (_ref3) {
  var isSelect = _ref3.isSelect,
    theme = _ref3.theme;
  return isSelect && "\n        background-color: ".concat(theme.color.primary.default, ";\n        p {\n         color:  ").concat(theme.color.white, ";\n        }\n        border: 1px solid ").concat(theme.color.primary.default, ";\n    ");
});
export var Text = styled.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1dgvu3a-1"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.secondaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.default;
});
export var InputWrapper = styled.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "sc-1dgvu3a-2"
})(["display:flex;align-items:center;justify-content:center;"]);
export var Input = styled.input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-1dgvu3a-3"
})(["max-width:48px;max-height:26px;border:none;background-color:transparent;font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;text-align:center;color:", ";&:focus{outline:none;}::placeholder{color:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.default;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.default;
});