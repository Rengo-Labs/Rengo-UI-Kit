import styled from "styled-components";
export var WrapperStyled = styled.div.withConfig({
  displayName: "styles__WrapperStyled",
  componentId: "sc-8p1frh-0"
})(["display:flex;flex-direction:column;width:100%;margin-bottom:2px;align-items:center;justify-content:center;padding:8px 16px;gap:4px;border-radius:50px;background-color:", ";border:1px solid ", ";cursor:pointer;"], function (_ref) {
  var theme = _ref.theme;
  return theme.background.default;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.border.default;
});
export var InputWrapperContainer = styled.div.withConfig({
  displayName: "styles__InputWrapperContainer",
  componentId: "sc-8p1frh-1"
})(["display:flex;align-items:center;justify-content:center;gap:4px;"]);
export var Text = styled.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-8p1frh-2"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.secondaryFont;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.default;
});
export var InputWrapper = styled.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "sc-8p1frh-3"
})(["display:flex;align-items:center;justify-content:center;width:100%;"]);
export var InputOption = styled.input.withConfig({
  displayName: "styles__InputOption",
  componentId: "sc-8p1frh-4"
})(["width:100%;max-height:26px;border:none;background-color:transparent;font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;text-align:center;color:", ";&:focus{outline:none;}::placeholder{color:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.secondaryFont;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.default;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.default;
});