import styled, { css } from 'styled-components';
export var Head = styled.thead.withConfig({
  displayName: "styles__Head",
  componentId: "sc-1mpxn59-0"
})(["width:100%;display:flex;border-bottom:1px solid ", ";padding:20px 0px 20px 0;th{text-align:left;white-space:nowrap;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.table.header.text;
});
export var TR = styled.tr.withConfig({
  displayName: "styles__TR",
  componentId: "sc-1mpxn59-1"
})(["width:100%;gap:15px;display:grid;", " grid-template-columns:", ";", ""], function (_ref2) {
  var centerItems = _ref2.centerItems;
  return centerItems && css(["justify-items:center;"]);
}, function (_ref3) {
  var columnsQty = _ref3.columnsQty;
  var gridColumns = '';
  Array.from({
    length: columnsQty - 1
  }, function (_, index) {
    gridColumns += ' 1fr';
  });
  if (columnsQty <= 7) {
    return "1fr ".concat(gridColumns);
  }
  return "2fr ".concat(gridColumns);
}, function (_ref4) {
  var columnsQty = _ref4.columnsQty;
  return columnsQty <= 6 && css(["justify-items:center;"]);
});
export var TD = styled.th.withConfig({
  displayName: "styles__TD",
  componentId: "sc-1mpxn59-2"
})(["", " min-height:32px;display:flex;align-items:center;justify-content:", ";gap:10px;"], function (_ref5) {
  var customWidth = _ref5.customWidth;
  return !customWidth && css(["flex:1;"]);
}, function (_ref6) {
  var isFirstColumn = _ref6.isFirstColumn,
    lastColumn = _ref6.lastColumn;
  return isFirstColumn || lastColumn ? 'center' : 'flex-start';
});
export var Text = styled.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1mpxn59-3"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:16px;line-height:32px;letter-spacing:0.02em;color:", ";"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.secondaryFont;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.table.header.text;
});
export var Icon = styled.span.withConfig({
  displayName: "styles__Icon",
  componentId: "sc-1mpxn59-4"
})(["color:", ";display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.table.header.text;
});