import styled from 'styled-components';
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-t8zikx-0"
})(["width:100%;display:flex;flex-direction:", ";justify-content:space-between;align-items:", ";gap:", ";"], function (_ref) {
  var isMobile = _ref.isMobile;
  return isMobile ? 'column' : 'row';
}, function (_ref2) {
  var isMobile = _ref2.isMobile;
  return isMobile ? 'center' : 'stretch';
}, function (_ref3) {
  var isMobile = _ref3.isMobile;
  return isMobile ? '10px' : '0';
});
export var ActionsSubContainer = styled.div.withConfig({
  displayName: "styles__ActionsSubContainer",
  componentId: "sc-t8zikx-1"
})(["display:flex;justify-content:", ";width:", ";gap:24px;"], function (_ref4) {
  var isMobile = _ref4.isMobile;
  return isMobile ? 'space-between' : 'right';
}, function (_ref5) {
  var isMobile = _ref5.isMobile;
  return isMobile ? '100%' : '300px';
});
export var UpdateButtonContainer = styled.div.withConfig({
  displayName: "styles__UpdateButtonContainer",
  componentId: "sc-t8zikx-2"
})(["display:flex;padding-left:", ";"], function (_ref6) {
  var isMobile = _ref6.isMobile;
  return isMobile ? '10px' : '0px';
});