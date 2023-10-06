import styled from "styled-components";
export var MenuWrapper = styled.div.withConfig({
  displayName: "styles__MenuWrapper",
  componentId: "sc-ex3zkb-0"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;position:fixed;top:0;left:0;background:", ";padding:18px ", ";z-index:1000;margin-bottom:95px;gap:20px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.background.menu;
}, function (props) {
  return props.isTablet ? '10px' : '70px';
});
export var LeftTextContainer = styled.div.withConfig({
  displayName: "styles__LeftTextContainer",
  componentId: "sc-ex3zkb-1"
})(["display:flex;justify-content:center;align-items:center;gap:10px;cursor:pointer;"]);
export var CenterTextContainer = styled.div.withConfig({
  displayName: "styles__CenterTextContainer",
  componentId: "sc-ex3zkb-2"
})(["display:flex;justify-content:center;align-items:center;gap:30px;"]);
export var MenuItem = styled.div.withConfig({
  displayName: "styles__MenuItem",
  componentId: "sc-ex3zkb-3"
})(["display:flex;justify-content:center;align-items:center;", " ", ""], function (props) {
  return props.clickable != null && props.clickable ? 'cursor: pointer; transition: all 0.2s ease-in-out;' : 'cursor: auto;';
}, function (props) {
  return props.clickable != null && props.clickable ? '&:active { transform: scale(0.95); filter: brightness(0.9);}' : '';
});
export var MenuItemText = styled.p.withConfig({
  displayName: "styles__MenuItemText",
  componentId: "sc-ex3zkb-4"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:", "px;line-height:24px;display:flex;align-items:center;letter-spacing:0.02em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
}, function (_ref3) {
  var size = _ref3.size;
  return size || 16;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.white;
});
export var MenuWrapperMobile = styled.div.withConfig({
  displayName: "styles__MenuWrapperMobile",
  componentId: "sc-ex3zkb-5"
})(["display:flex;justify-content:space-between;align-items:center;height:88px;width:100%;position:fixed;top:0;left:0;padding:18px;background:", ";z-index:1000;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.background.menu;
});
export var MobileMenuIcon = styled.div.withConfig({
  displayName: "styles__MobileMenuIcon",
  componentId: "sc-ex3zkb-6"
})(["display:flex;justify-content:center;align-items:center;margin-right:20px;"]);
export var MobileMenuWrapper = styled.div.withConfig({
  displayName: "styles__MobileMenuWrapper",
  componentId: "sc-ex3zkb-7"
})(["display:", ";flex-direction:column;justify-content:space-between;align-items:center;position:fixed;transform:", ";transition:transform 0.3s ease-in-out;width:100%;height:100%;background:", ";z-index:999;:first-child{transform:", ";}:nth-child(2){transform:", ";}"], function (props) {
  return props.isOpen ? 'flex' : 'none';
}, function (_ref6) {
  var isOpen = _ref6.isOpen;
  return isOpen ? 'translateY(0)' : 'translateY(100vh)';
}, function (props) {
  return props.theme.background.menu;
}, function (props) {
  return props.isOpen ? '-100%' : '0%';
}, function (props) {
  return props.isOpen ? '0%' : '-100%';
});
export var MobileMenuItemContainer = styled.div.withConfig({
  displayName: "styles__MobileMenuItemContainer",
  componentId: "sc-ex3zkb-8"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;margin-top:100px;height:100%;width:100%;"]);
export var Icon = styled.img.attrs(function (_ref7) {
  var width = _ref7.width,
    height = _ref7.height;
  return {
    width: width,
    height: height
  };
}).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-ex3zkb-9"
})(["cursor:pointer;"]);