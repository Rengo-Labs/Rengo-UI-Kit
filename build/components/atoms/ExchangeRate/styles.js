import styled from 'styled-components';
export var ExchangeRateContainer = styled.section.withConfig({
  displayName: "styles__ExchangeRateContainer",
  componentId: "sc-mz2cps-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
export var ExchangeRateRow = styled.section.withConfig({
  displayName: "styles__ExchangeRateRow",
  componentId: "sc-mz2cps-1"
})(["position:relative;display:flex;width:100%;"]);
export var ExchangeRateColumn = styled.section.withConfig({
  displayName: "styles__ExchangeRateColumn",
  componentId: "sc-mz2cps-2"
})(["padding-right:10px;font-family:", ";font-style:normal;font-weight:400;font-size:22px;line-height:30px;letter-spacing:0.02em;text-align:right;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.secondaryFont;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.defaultColor;
});