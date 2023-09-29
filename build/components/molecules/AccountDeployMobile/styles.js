import { AlertTriangle, CheckCircle, Copy } from 'react-feather';
import styled from 'styled-components';
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1p4zbz6-0"
})(["display:flex;flex-direction:column;align-items:center;width:100%;"]);
export var InnerContainer = styled.div.withConfig({
  displayName: "styles__InnerContainer",
  componentId: "sc-1p4zbz6-1"
})(["display:flex;flex-direction:column;align-items:flex-start;gap:5px;width:100%;padding:16px;border-bottom:1px solid ", ";&:last-child{border-bottom:3px solid ", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.defaultColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.defaultColor;
});
export var Title = styled.p.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1p4zbz6-2"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:14px;line-height:17px;letter-spacing:0.02em;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.secondaryFont;
}, function (_ref4) {
  var theme = _ref4.theme,
    isPrimary = _ref4.isPrimary;
  return isPrimary ? theme.color.modalText : theme.color.default;
});
export var SubtilteLink = styled(Title).withConfig({
  displayName: "styles__SubtilteLink",
  componentId: "sc-1p4zbz6-3"
})(["color:", ";cursor:pointer;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.modalText;
});
export var Subtitle = styled(Title).withConfig({
  displayName: "styles__Subtitle",
  componentId: "sc-1p4zbz6-4"
})(["color:", ";font-weight:400;"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.default;
});
export var H5 = styled.p.withConfig({
  displayName: "styles__H5",
  componentId: "sc-1p4zbz6-5"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:12px;line-height:14px;letter-spacing:0.02em;color:", ";"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.secondaryFont;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.primary.text;
});
export var IconWrapper = styled.div.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-1p4zbz6-6"
})(["display:flex;justify-content:space-between;align-items:center;gap:7px;width:100%;&:first-child{margin-bottom:5px;}"]);
export var CheckIcon = styled(CheckCircle).withConfig({
  displayName: "styles__CheckIcon",
  componentId: "sc-1p4zbz6-7"
})(["color:", ";fill:", ";"], function (props) {
  return props.theme.background.searchInput;
}, function (props) {
  return props.theme.border.greenMalachite;
});
export var CopyIcon = styled(Copy).withConfig({
  displayName: "styles__CopyIcon",
  componentId: "sc-1p4zbz6-8"
})(["color:", ";cursor:pointer;"], function (props) {
  return props.theme.color.modalText;
});
export var AlertIcon = styled(AlertTriangle).withConfig({
  displayName: "styles__AlertIcon",
  componentId: "sc-1p4zbz6-9"
})(["color:", ";fill:red;"], function (props) {
  return props.theme.background.searchInput;
});