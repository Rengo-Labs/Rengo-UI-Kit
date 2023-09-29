import styled from "styled-components";
export var ChartWrapper = styled.div.withConfig({
  displayName: "styles__ChartWrapper",
  componentId: "sc-1i4jarz-0"
})(["height:100%;max-height:270px;"]);
export var OptionsRow = styled.div.withConfig({
  displayName: "styles__OptionsRow",
  componentId: "sc-1i4jarz-1"
})(["display:flex;flex-direction:row;width:100%;margin-bottom:5px;"]);
export var EmptyCard = styled.div.withConfig({
  displayName: "styles__EmptyCard",
  componentId: "sc-1i4jarz-2"
})(["display:flex;align-items:center;justify-content:center;height:300px;border-radius:20px;color:", ";font-family:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.defaultColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
});
var Row = styled.div.withConfig({
  displayName: "styles__Row",
  componentId: "sc-1i4jarz-3"
})(["width:100%;display:flex;padding:0;align-items:center;border-radius:20px;justify-content:space-around;"]);
export var AutoRow = styled(Row).withConfig({
  displayName: "styles__AutoRow",
  componentId: "sc-1i4jarz-4"
})(["flex-wrap:nowrap;& > *{margin:6px !important;}justify-content:space-evenly;"]);
export var AutoRowJustify = styled(Row).withConfig({
  displayName: "styles__AutoRowJustify",
  componentId: "sc-1i4jarz-5"
})(["flex-wrap:nowrap;& > *{margin:6px !important;}justify-content:flex-end;gap:6px;"]);
export var OptionButton = styled.div.withConfig({
  displayName: "styles__OptionButton",
  componentId: "sc-1i4jarz-6"
})(["font-weight:500;font-family:", ";width:fit-content;white-space:nowrap;padding:6px;border-radius:6px;border:1px solid ", ";background-color:", ";color:", ";:hover{cursor:pointer;background-color:", ";}:active{background-color:", ";}:disabled{background-color:", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.secondaryFont;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.primary.default;
}, function (_ref5) {
  var theme = _ref5.theme,
    active = _ref5.active;
  return active ? theme.color.chart.active : theme.color.chart.inactive;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.chart.textColor;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.chart.active;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.chart.active;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.chart.inactive;
});