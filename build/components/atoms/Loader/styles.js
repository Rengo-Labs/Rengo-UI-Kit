import styled, { css, keyframes } from 'styled-components';
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1s5qlg4-0"
})(["pointer-events:none;display:flex;align-items:center;justify-content:center;height:100%;width:100%;"]);
var pulse = function pulse(percentValues) {
  return keyframes(["", ""], percentValues.map(function (value, index) {
    if (index * 5 === 85 || index * 5 === 95) {
      return;
    }
    return "".concat(index * 5, "% { background-image: url(").concat(value, "); }");
  }));
};
export var AnimatedImg = styled.div.withConfig({
  displayName: "styles__AnimatedImg",
  componentId: "sc-1s5qlg4-1"
})(["animation:", ";width:130px;height:130px;display:flex;align-items:center;justify-content:center;img{width:48px;height:58px;}"], function (_ref) {
  var percentValues = _ref.percentValues;
  return css(["", " 800ms linear infinite"], pulse(percentValues));
});