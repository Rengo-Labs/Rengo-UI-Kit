import styled from 'styled-components';
export var Body = styled.tbody.withConfig({
  displayName: "styles__Body",
  componentId: "sc-1l5l6oy-0"
})(["width:100%;display:flex;"]);
export var TR = styled.tr.withConfig({
  displayName: "styles__TR",
  componentId: "sc-1l5l6oy-1"
})(["gap:15px;width:100%;display:grid;grid-template-columns:", ";"], function (_ref) {
  var cryptoColumnWidth = _ref.cryptoColumnWidth;
  return "".concat(cryptoColumnWidth.join(' '));
});
export var TD = styled.td.withConfig({
  displayName: "styles__TD",
  componentId: "sc-1l5l6oy-2"
})(["flex:1;min-height:60px;padding:10px 0 10px 10px;display:flex;align-items:center;justify-content:", ";flex-wrap:wrap;gap:2px;overflow-wrap:anywhere;flex-wrap:nowrap;"], function (_ref2) {
  var isCryptoColumn = _ref2.isCryptoColumn;
  return isCryptoColumn ? 'flex-start' : 'center';
});
export var Text = styled.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1l5l6oy-3"
})(["", " font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;color:", ";", ""], function (props) {
  return props.linkable ? 'cursor: pointer;' : '';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.secondaryFont;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.table.body.text;
}, function (props) {
  return props.linkable ? '&:hover{color: blue;}' : '';
});
export var Icon = styled.img.withConfig({
  displayName: "styles__Icon",
  componentId: "sc-1l5l6oy-4"
})(["margin-right:5px;"]);