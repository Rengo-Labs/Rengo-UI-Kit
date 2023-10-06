import styled from 'styled-components';
export var Container = styled.section.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1gdq2pf-0"
})(["width:100%;height:100%;display:flex;flex-direction:row;background-color:", ";border-radius:16px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.table.header.background;
});
export var ContainerMobile = styled(Container).withConfig({
  displayName: "styles__ContainerMobile",
  componentId: "sc-1gdq2pf-1"
})(["flex-direction:column;background-color:transparent;border-radius:0px;gap:16px;overflow:scroll;"]);
export var Column = styled.div.withConfig({
  displayName: "styles__Column",
  componentId: "sc-1gdq2pf-2"
})(["width:100%;display:flex;flex-direction:column;"]);
export var ColumnMobile = styled(Column).withConfig({
  displayName: "styles__ColumnMobile",
  componentId: "sc-1gdq2pf-3"
})(["background-color:", ";border-radius:8px;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.table.header.background;
});
export var Row = styled.div.withConfig({
  displayName: "styles__Row",
  componentId: "sc-1gdq2pf-4"
})(["height:55px;display:flex;align-items:center;border-bottom:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return "1px solid ".concat(theme.border.default);
});
export var RowMobile = styled.div.withConfig({
  displayName: "styles__RowMobile",
  componentId: "sc-1gdq2pf-5"
})(["display:flex;flex-direction:", ";align-items:", ";padding:", ";border-bottom:", ";"], function (_ref4) {
  var isSubItem = _ref4.isSubItem;
  return isSubItem ? 'row' : 'column';
}, function (_ref5) {
  var isSubItem = _ref5.isSubItem;
  return isSubItem ? 'center' : 'none';
}, function (_ref6) {
  var isSubItem = _ref6.isSubItem;
  return isSubItem ? '0 8px 0 16px' : '0';
}, function (_ref7) {
  var theme = _ref7.theme,
    isLast = _ref7.isLast;
  return isLast ? 'none' : "1px solid ".concat(theme.border.default);
});
export var KeyItem = styled.div.withConfig({
  displayName: "styles__KeyItem",
  componentId: "sc-1gdq2pf-6"
})(["width:228px;display:flex;align-items:center;font-weight:", ";font-family:", ";font-style:normal;font-size:16px;line-height:32px;color:", ";letter-spacing:0.02em;gap:12px;padding:", ";"], function (_ref8) {
  var isStrong = _ref8.isStrong;
  return isStrong ? '600' : '400';
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.typography.secondaryFont;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.default;
}, function (_ref11) {
  var alignment = _ref11.alignment;
  return alignment === 'center' ? '4px 0 4px 48px' : '4px 0 4px 24px';
});
export var KeyItemMobile = styled(KeyItem).withConfig({
  displayName: "styles__KeyItemMobile",
  componentId: "sc-1gdq2pf-7"
})(["width:100%;padding:16px 0 4px 16px;font-size:16px;line-height:19px;font-weight:", ";"], function (_ref12) {
  var type = _ref12.type;
  return type === 'sub-item' ? '400' : '600';
});
export var ValueItem = styled.div.withConfig({
  displayName: "styles__ValueItem",
  componentId: "sc-1gdq2pf-8"
})(["font-style:normal;font-weight:400;font-size:16px;line-height:24px;font-family:", ";color:", ";letter-spacing:0.02em;padding-left:16px;a{color:", ";text-decoration:none;}"], function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.secondaryFont;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.color.default;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.color.default;
});
export var ValueItemMobile = styled(ValueItem).withConfig({
  displayName: "styles__ValueItemMobile",
  componentId: "sc-1gdq2pf-9"
})(["padding:4px 16px 8px 16px;line-height:19px;overflow-wrap:anywhere;"]);
export var ImgContainerMobile = styled.div.withConfig({
  displayName: "styles__ImgContainerMobile",
  componentId: "sc-1gdq2pf-10"
})(["height:100%;"]);
export var ContentContainer = styled.div.withConfig({
  displayName: "styles__ContentContainer",
  componentId: "sc-1gdq2pf-11"
})(["display:flex;flex-direction:column;"]);