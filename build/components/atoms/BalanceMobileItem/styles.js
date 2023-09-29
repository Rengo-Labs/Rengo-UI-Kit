import styled from 'styled-components';
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-z2k0h9-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;border-radius:16px;background-color:", ";margin-bottom:10px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.table.header.background;
});
export var Header = styled.div.withConfig({
  displayName: "styles__Header",
  componentId: "sc-z2k0h9-1"
})(["display:flex;justify-content:space-between;width:100%;"]);
export var HeaderTitle = styled.div.withConfig({
  displayName: "styles__HeaderTitle",
  componentId: "sc-z2k0h9-2"
})(["display:flex;justify-content:center;align-items:center;gap:5px;padding:10px;"]);
export var HeaderSubtitle = styled.div.withConfig({
  displayName: "styles__HeaderSubtitle",
  componentId: "sc-z2k0h9-3"
})(["display:flex;flex-direction:column;justify-content:center;gap:5px;align-items:center;padding:10px;"]);
export var Footer = styled.div.withConfig({
  displayName: "styles__Footer",
  componentId: "sc-z2k0h9-4"
})(["display:flex;justify-content:space-evenly;gap:5px;width:100%;"]);
export var MiddleContainer = styled.div.withConfig({
  displayName: "styles__MiddleContainer",
  componentId: "sc-z2k0h9-5"
})(["display:flex;justify-content:space-between;width:100%;"]);
export var Title = styled.p.withConfig({
  displayName: "styles__Title",
  componentId: "sc-z2k0h9-6"
})(["font-family:", ";font-style:normal;font-weight:700;font-size:16px;line-height:18px;letter-spacing:0.02em;color:", ";", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.default;
}, function (props) {
  return props.linkable ? 'cursor: pointer;' : '';
}, function (props) {
  return props.linkable ? '&:hover {color: blue;}' : '';
});
export var Subtitle = styled.p.withConfig({
  displayName: "styles__Subtitle",
  componentId: "sc-z2k0h9-7"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:17px;letter-spacing:0.02em;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.secondaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.default;
});
export var SubtitleValue = styled.p.withConfig({
  displayName: "styles__SubtitleValue",
  componentId: "sc-z2k0h9-8"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:17px;letter-spacing:0.02em;color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.table.header.text;
});