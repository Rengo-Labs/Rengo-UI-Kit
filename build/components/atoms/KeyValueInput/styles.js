import styled from 'styled-components';
export var WrapperStyled = styled.div.withConfig({
  displayName: "styles__WrapperStyled",
  componentId: "sc-rot4ew-0"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;padding:12px 24px;"]);
export var Text = styled.div.withConfig({
  displayName: "styles__Text",
  componentId: "sc-rot4ew-1"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.secondaryFont;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.default;
});
export var InputWrapper = styled.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "sc-rot4ew-2"
})(["display:flex;align-items:center;justify-content:center;color:", ";padding:4px 16px;background-color:", ";border-radius:4px;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.default;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.background.gasFeeInput;
});
export var Input = styled.input.attrs({
  type: 'number'
}).withConfig({
  displayName: "styles__Input",
  componentId: "sc-rot4ew-3"
})(["::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}background-color:transparent;color:", ";font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;width:35px;border:none;&:focus{outline:none;}&[type='number']{-moz-appearance:textfield;}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.default;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
});