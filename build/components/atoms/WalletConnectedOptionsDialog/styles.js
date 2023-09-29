import styled, { css, keyframes } from 'styled-components';
var fadeIn = keyframes(["from{opacity:0;}to{opacity:1;}"]);
export var Container = styled.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-hyhqsc-0"
})(["display:flex;flex-direction:column;align-items:center;padding:0px;width:100%;background:", ";border-radius:16px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.background.wallet.connectedOptions;
});
export var DialogHeaderContainer = styled.div.withConfig({
  displayName: "styles__DialogHeaderContainer",
  componentId: "sc-hyhqsc-1"
})(["width:95%;display:flex;justify-content:center;height:50px;border-top-left-radius:", ";border-top-right-radius:", ";background:", ";padding:0 16px 0 16px;"], function (_ref2) {
  var isMobile = _ref2.isMobile;
  return isMobile ? '0px' : '16px';
}, function (_ref3) {
  var isMobile = _ref3.isMobile;
  return isMobile ? '0px' : '16px';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.background.wallet.connectedOptions;
});
export var DialogHeader = styled.div.withConfig({
  displayName: "styles__DialogHeader",
  componentId: "sc-hyhqsc-2"
})(["height:100%;width:100%;display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"]);
export var DialogTitle = styled.p.withConfig({
  displayName: "styles__DialogTitle",
  componentId: "sc-hyhqsc-3"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:18px;line-height:26px;letter-spacing:0.02em;color:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.secondaryFont;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.modalText;
});
export var CloseButton = styled.button.withConfig({
  displayName: "styles__CloseButton",
  componentId: "sc-hyhqsc-4"
})(["background:none;border:none;cursor:pointer;"]);
export var ToggleContainer = styled.div.withConfig({
  displayName: "styles__ToggleContainer",
  componentId: "sc-hyhqsc-5"
})(["width:100%;display:flex;justify-content:center;align-items:center;margin:16px 0 32px 0;"]);
export var Row = styled.div.withConfig({
  displayName: "styles__Row",
  componentId: "sc-hyhqsc-6"
})(["display:flex;flex-direction:row;justify-content:", ";align-items:center;padding:16px 32px;gap:10px;width:100%;height:56px;border-top:", ";cursor:pointer;background:", ";", ";", ";background:", ";"], function (_ref7) {
  var isMobile = _ref7.isMobile;
  return isMobile ? 'space-between;' : 'flex-end;';
}, function (_ref8) {
  var theme = _ref8.theme;
  return "1px solid ".concat(theme.border.wallet);
}, function (_ref9) {
  var isCopied = _ref9.isCopied,
    theme = _ref9.theme;
  return isCopied ? theme.background.wallet.copyOption : theme.background.wallet.white;
}, function (_ref10) {
  var isLast = _ref10.isLast,
    isMobile = _ref10.isMobile;
  if (isLast && !isMobile) {
    return css(["border-bottom-left-radius:16px;border-bottom-right-radius:16px;"]);
  }
}, function (_ref11) {
  var isCopied = _ref11.isCopied;
  return isCopied && css(["transition-property:background-color;transition-duration:0.2s;transition-timing-function:ease-in;animation:", " 0.5s ease-in;"], fadeIn);
}, function (_ref12) {
  var theme = _ref12.theme,
    isBeingHovered = _ref12.isBeingHovered,
    isLast = _ref12.isLast,
    isCopied = _ref12.isCopied;
  if (isBeingHovered && isLast) {
    return theme.background.wallet.onHoverDisconnect;
  }
  if (isBeingHovered && !isCopied) {
    return theme.background.wallet.onHover;
  }
  if (isCopied) {
    return theme.background.wallet.copyOption;
  }
  return theme.background.wallet.connectedOptions;
});
export var RowTitle = styled.p.withConfig({
  displayName: "styles__RowTitle",
  componentId: "sc-hyhqsc-7"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;color:", ";color:", ";"], function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.secondaryFont;
}, function (_ref14) {
  var isLast = _ref14.isLast,
    theme = _ref14.theme,
    isCopied = _ref14.isCopied;
  if (isCopied) {
    return theme.background.wallet.white;
  }
  if (isLast) {
    return theme.color.error.disconnect;
  } else {
    return theme.color.modalText;
  }
}, function (_ref15) {
  var theme = _ref15.theme,
    isBeingHovered = _ref15.isBeingHovered;
  return isBeingHovered ? theme.background.wallet.white : 'none;';
});
export var Image = styled.svg.withConfig({
  displayName: "styles__Image",
  componentId: "sc-hyhqsc-8"
})(["height:24px;width:24px;fill:white;background-color:", ";mask:", ";"], function (_ref16) {
  var isLast = _ref16.isLast,
    isBeingHovered = _ref16.isBeingHovered,
    theme = _ref16.theme;
  if (isLast && isBeingHovered) {
    return theme.background.wallet.white;
  }
  return theme.background.wallet.onHoverDisconnect;
}, function (_ref17) {
  var src = _ref17.src;
  return "url(".concat(src, ") no-repeat center");
});