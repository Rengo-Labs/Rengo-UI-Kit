import styled, { css, keyframes } from 'styled-components';
import { NoticationTypes, NotificationPositions } from './types';
var fadeIn = keyframes(["from{opacity:0;}to{opacity:1;}"]);
export var Backdrop = styled.div.withConfig({
  displayName: "styles__Backdrop",
  componentId: "sc-49xv20-0"
})(["position:fixed;z-index:9999;top:0;left:0;width:100%;height:100%;background-color:", ";opacity:0.5;"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.primary.default;
});
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-49xv20-1"
})(["position:fixed;z-index:99999;top:137px;border-radius:8px;padding:15px 13.75px 10px 27px;gap:10px;display:flex;justify-content:space-between;animation:", " 0.2s ease-in;", " ", " border:", ";background-color:", ""], fadeIn, function (_ref2) {
  var isMobile = _ref2.isMobile;
  return isMobile && css(["width:90%;"]);
}, function (_ref3) {
  var position = _ref3.position,
    isMobile = _ref3.isMobile;
  if (isMobile) {
    return css(["left:50%;transform:translateX(-50%);"]);
  }
  if (NotificationPositions.TopRight === position) {
    return css(["right:20px;"]);
  }
  if (NotificationPositions.TopCenter === position) {
    return css(["left:50%;transform:translateX(-50%);"]);
  }
  if (NotificationPositions.TopLeft === position) {
    return css(["left:20px;"]);
  }
}, function (_ref4) {
  var type = _ref4.type,
    theme = _ref4.theme;
  if (NoticationTypes.Error === type) {
    return "2px solid ".concat(theme.border.notification.error);
  }
  if (NoticationTypes.Success === type) {
    return "2px solid ".concat(theme.border.notification.success);
  }
  if (NoticationTypes.Info === type) {
    return "2px solid ".concat(theme.border.notification.info);
  }
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.background.notification.default;
});
export var SubContainer = styled.div.withConfig({
  displayName: "styles__SubContainer",
  componentId: "sc-49xv20-2"
})(["gap:8px;display:flex;align-items:flex-start;"]);
export var Title = styled.p.withConfig({
  displayName: "styles__Title",
  componentId: "sc-49xv20-3"
})(["font-family:", ";font-style:normal;font-weight:600;font-size:16px;line-height:32px;letter-spacing:0.02em;color:", ";margin-right:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.notification.title;
}, function (_ref8) {
  var isMobile = _ref8.isMobile;
  return isMobile ? '0px' : '120px';
});
export var Message = styled.p.withConfig({
  displayName: "styles__Message",
  componentId: "sc-49xv20-4"
})(["font-family:", ";color:", ";font-style:normal;font-weight:400;font-size:12px;line-height:16px;letter-spacing:0.02em;a{color:", ";text-decoration:none;}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.typography.secondaryFont;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.notification.message;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.notification.anchor;
});
export var ContentContainer = styled.div.withConfig({
  displayName: "styles__ContentContainer",
  componentId: "sc-49xv20-5"
})(["display:flex;flex-direction:column;flex-wrap:wrap;"]);
export var IconWrapper = styled.div.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-49xv20-6"
})(["padding-top:5px;"]);
export var CloseIcon = styled.div.withConfig({
  displayName: "styles__CloseIcon",
  componentId: "sc-49xv20-7"
})(["cursor:pointer;"]);