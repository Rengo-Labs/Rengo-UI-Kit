import styled, { css } from 'styled-components';
export var Backdrop = styled.div.withConfig({
  displayName: "styles__Backdrop",
  componentId: "sc-dfq5ii-0"
})(["position:fixed;z-index:888;top:0;left:0;width:100%;height:100%;background-color:", ";opacity:0.5;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.primary.default;
});
export var Container = styled.dialog.withConfig({
  displayName: "styles__Container",
  componentId: "sc-dfq5ii-1"
})(["top:", ";left:", ";transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;padding:0px;z-index:900;background:", ";border:", ";box-shadow:0px 0px 15px 15px rgba(227,223,253,0.05);border-radius:", ";position:fixed;overflow-y:auto;max-height:75%;&::-webkit-scrollbar-track{display:none;}", " ", " display:", ";"], function (_ref2) {
  var withoutEffect = _ref2.withoutEffect;
  return withoutEffect ? '0px' : 'calc(50% + 43px)';
}, function (_ref3) {
  var withoutEffect = _ref3.withoutEffect;
  return withoutEffect ? '0px' : '50%';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.background.wallet.connectedOptions;
}, function (_ref5) {
  var theme = _ref5.theme;
  return "1px solid ".concat(theme.border.default);
}, function (_ref6) {
  var isMobile = _ref6.isMobile;
  return isMobile ? '0px' : '16px';
}, function (_ref7) {
  var isMobile = _ref7.isMobile;
  return isMobile && css(["margin-top:0;overflow-y:scroll;overflow-x:hidden;width:100%;height:100%;top:0;right:0;left:0;transition:transform 0.3s ease-in-out;z-index:9999;position:fixed;transform:none;max-height:none;"]);
}, function (_ref8) {
  var isMobile = _ref8.isMobile,
    isOpen = _ref8.isOpen;
  if (!isMobile) {
    return;
  }
  if (isOpen) {
    return css(["transform:translateX(0);"]);
  } else {
    return css(["transform:translateX(200vw);"]);
  }
}, function (_ref9) {
  var isMobile = _ref9.isMobile,
    isOpen = _ref9.isOpen;
  if (!isMobile && !isOpen) {
    return 'none';
  }
  return 'flex';
});