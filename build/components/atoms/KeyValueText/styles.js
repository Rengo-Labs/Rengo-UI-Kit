import styled from 'styled-components';
export var WrapperStyled = styled.div.withConfig({
  displayName: "styles__WrapperStyled",
  componentId: "sc-tpkpf8-0"
})(["display:flex;justify-content:space-between;align-items:center;padding:12px 24px;"]);
export var KeyStyle = styled.div.withConfig({
  displayName: "styles__KeyStyle",
  componentId: "sc-tpkpf8-1"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.secondaryFont;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.default;
});
export var ValueStyle = styled.div.withConfig({
  displayName: "styles__ValueStyle",
  componentId: "sc-tpkpf8-2"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.secondaryFont;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.default;
});