import styled from 'styled-components';
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-b37w3q-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:16px;background-color:", ";width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.table.header.background;
});
export var Header = styled.div.withConfig({
  displayName: "styles__Header",
  componentId: "sc-b37w3q-1"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;"]);
export var HeaderTitle = styled.div.withConfig({
  displayName: "styles__HeaderTitle",
  componentId: "sc-b37w3q-2"
})(["display:flex;justify-content:center;align-items:center;padding:10px;"]);
export var HeaderSubtitle = styled.div.withConfig({
  displayName: "styles__HeaderSubtitle",
  componentId: "sc-b37w3q-3"
})(["display:flex;flex-direction:column;justify-content:center;gap:5px;align-items:flex-start;padding:10px;"]);
export var Footer = styled.div.withConfig({
  displayName: "styles__Footer",
  componentId: "sc-b37w3q-4"
})(["display:flex;justify-content:space-around;gap:5px;width:100%;"]);
export var Title = styled.p.withConfig({
  displayName: "styles__Title",
  componentId: "sc-b37w3q-5"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:18px;letter-spacing:0.02em;color:", ";", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.default;
}, function (props) {
  return props.linkable ? 'cursor: pointer;' : '';
}, function (props) {
  return props.linkable ? '&:hover{ color: blue; }' : '';
});
export var Subtitle = styled.p.withConfig({
  displayName: "styles__Subtitle",
  componentId: "sc-b37w3q-6"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.secondaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.default;
});
export var SubtitleValue = styled.p.withConfig({
  displayName: "styles__SubtitleValue",
  componentId: "sc-b37w3q-7"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:14px;line-height:18px;letter-spacing:0.02em;overflow-wrap:anywhere;color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.table.header.text;
});
export var FavoriteIcon = styled.img.withConfig({
  displayName: "styles__FavoriteIcon",
  componentId: "sc-b37w3q-8"
})(["user-select:none;cursor:pointer;transition:all 0.2s ease-in-out;color:", ";margin-right:8px;&:active{transform:scale(0.9);filter:brightness(0.8);}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.default;
});
export var Table = styled.table.withConfig({
  displayName: "styles__Table",
  componentId: "sc-b37w3q-9"
})(["width:100%;border-radius:16px;background-color:", ";"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.table.header.background;
});
export var TR = styled.tr.withConfig({
  displayName: "styles__TR",
  componentId: "sc-b37w3q-10"
})(["display:flex;justify-content:space-between;"]);
export var TH = styled.th.withConfig({
  displayName: "styles__TH",
  componentId: "sc-b37w3q-11"
})(["display:flex;justify-content:flex-start;"]);
export var BTR = styled.tr.withConfig({
  displayName: "styles__BTR",
  componentId: "sc-b37w3q-12"
})(["display:flex;"]);
export var TD = styled.td.withConfig({
  displayName: "styles__TD",
  componentId: "sc-b37w3q-13"
})(["text-align:start;flex:1;"]);