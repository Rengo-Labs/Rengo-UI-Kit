import styled, { css } from 'styled-components';
export var Wrapper = styled.div.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-5fztd1-0"
})(["display:flex;align-items:center;flex-direction:column;width:100%;"]);
export var Input = styled.input.withConfig({
  displayName: "style__Input",
  componentId: "sc-5fztd1-1"
})(["width:93%;-webkit-appearance:none;height:0px;background:#efefef;outline:none;-webkit-transition:.2s;border:", ";transition:transform 3s ease-in-out;animation:slideIn 3s ease-out;::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:8px;height:8px;border-radius:50%;background:", ";cursor:pointer;transition:transform 0.9s ease-in-out;}::-moz-range-thumb{width:8px;height:8px;border-radius:50%;background:", ";cursor:pointer;transition:transform 3s ease-in-out;animation:slideIn 3s ease-out;}"], function (_ref) {
  var theme = _ref.theme;
  return "0.5px solid ".concat(theme.border.slider, ";");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.background.sliderThumb;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.background.sliderThumb;
});
export var PercentageContainer = styled.div.withConfig({
  displayName: "style__PercentageContainer",
  componentId: "sc-5fztd1-2"
})(["display:flex;justify-content:space-between;width:100%;margin-top:1rem;"]);
export var PercentageLabel = styled.span.withConfig({
  displayName: "style__PercentageLabel",
  componentId: "sc-5fztd1-3"
})(["cursor:pointer;width:55px;text-align:center;font-size:14px;line-height:18px;font-weight:", ";letter-spacing:0.02em;font-family:", ";color:", ";", ""], function (_ref4) {
  var isSelected = _ref4.isSelected;
  return isSelected ? 600 : 400;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.secondaryFont;
}, function (_ref6) {
  var theme = _ref6.theme,
    isSelected = _ref6.isSelected;
  return isSelected ? theme.background.sliderThumb : theme.color.modalText;
}, function (_ref7) {
  var isSelected = _ref7.isSelected;
  return isSelected && css(["animation:slideIn 0.3s forwards ease-in-out;font-weight:bold;"]);
});