import styled from 'styled-components';
export var WrapperStyled = styled.div.withConfig({
  displayName: "styles__WrapperStyled",
  componentId: "sc-11893i6-0"
})(["display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem;max-width:105px;max-height:26px;"]);
export var KeyStyled = styled.div.withConfig({
  displayName: "styles__KeyStyled",
  componentId: "sc-11893i6-1"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.secondaryFont;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.keyPairText.keyTextColor;
});
export var ValueStyled = styled.div.withConfig({
  displayName: "styles__ValueStyled",
  componentId: "sc-11893i6-2"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:16px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.secondaryFont;
}, function (_ref4) {
  var isPorcentage = _ref4.isPorcentage,
    theme = _ref4.theme;
  return isPorcentage ? theme.color.keyPairText.valueIsPorcentageTextColor : theme.color.keyPairText.valueTextColor;
});