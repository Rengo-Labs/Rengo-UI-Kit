import styled, { css } from 'styled-components';
import { Distribution, IconSize } from './types';
export var Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-i7hhaw-0"
})(["width:", ";display:flex;align-items:center;justify-content:", ";background:", ";&:hover{cursor:pointer;background-color:", ";}&:focus{cursor:pointer;background-color:", ";;}"], function (_ref) {
  var containerWidth = _ref.containerWidth;
  return containerWidth;
}, function (_ref2) {
  var distribution = _ref2.distribution;
  return distribution;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.tab.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.tab.hover;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.tab.hover;
});
export var TokenInnerWrapper = styled.div.withConfig({
  displayName: "styles__TokenInnerWrapper",
  componentId: "sc-i7hhaw-1"
})(["display:flex;justify-content:flex-start;align-items:center;gap:8px;padding:", ";"], function (_ref6) {
  var distribution = _ref6.distribution;
  if (Distribution.Center !== distribution) {
    return '16px 0 16px 0;';
  }
  return '16px 0 16px 0;';
});
export var Image = styled.img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-i7hhaw-2"
})(["height:", ";"], function (_ref7) {
  var iconSize = _ref7.iconSize;
  return iconSize === IconSize.Small ? "".concat(IconSize.Small, "px") : "".concat(IconSize.Large, "px");
});
export var LeftAdornmentWrapper = styled.div.withConfig({
  displayName: "styles__LeftAdornmentWrapper",
  componentId: "sc-i7hhaw-3"
})(["display:flex;align-items:center;margin-right:", ";cursor:pointer;"], function (_ref8) {
  var distribution = _ref8.distribution;
  return Distribution.Center !== distribution ? '5px' : '0px';
});
export var TokenDetailsWrapper = styled.div.withConfig({
  displayName: "styles__TokenDetailsWrapper",
  componentId: "sc-i7hhaw-4"
})(["display:flex;flex-direction:", ";align-items:flex-start;"], function (_ref9) {
  var tokenNameSymbol = _ref9.tokenNameSymbol;
  return !tokenNameSymbol ? 'column' : 'row';
});
export var TokenNamesWrapper = styled.div.withConfig({
  displayName: "styles__TokenNamesWrapper",
  componentId: "sc-i7hhaw-5"
})(["height:100%;display:flex;gap:5px;padding-left:", ";flex-direction:", ";"], function (_ref10) {
  var tokenNames = _ref10.tokenNames,
    distribution = _ref10.distribution;
  if (distribution !== Distribution.Center && distribution !== Distribution.SpaceEvenly) {
    return '0px;';
  }
  return '16px;';
}, function (_ref11) {
  var tokenNames = _ref11.tokenNames;
  if (tokenNames && (tokenNames === null || tokenNames === void 0 ? void 0 : tokenNames.length) > 1) {
    return 'column;';
  }
  return 'row;';
});
export var TokenName = styled.p.withConfig({
  displayName: "styles__TokenName",
  componentId: "sc-i7hhaw-6"
})(["font-family:", ";font-size:12px;line-height:16px;letter-spacing:0.02em;font-weight:400;color:", ";"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.typography.secondaryFont;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.color.keyPairText.keyTextColor;
});
export var TokenFullName = styled.p.withConfig({
  displayName: "styles__TokenFullName",
  componentId: "sc-i7hhaw-7"
})(["font-family:", ";font-weight:400;font-size:12px;line-height:16px;letter-spacing:0.02em;color:", ";text-align:start;overflow-wrap:anywhere;"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.typography.secondaryFont;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.color.default;
});
export var TokenNameSymbol = styled.p.withConfig({
  displayName: "styles__TokenNameSymbol",
  componentId: "sc-i7hhaw-8"
})(["font-family:", ";font-weight:400;font-size:12px;line-height:16px;letter-spacing:0.02em;color:", ";text-transform:uppercase;padding-left:5px;"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.typography.secondaryFont;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.color.textInactive;
});
export var TokenNameSymbolWrapper = styled.div.withConfig({
  displayName: "styles__TokenNameSymbolWrapper",
  componentId: "sc-i7hhaw-9"
})(["height:100%;display:flex;flex-direction:column;"]);
export var AmountWrapper = styled.div.withConfig({
  displayName: "styles__AmountWrapper",
  componentId: "sc-i7hhaw-10"
})(["height:100%;max-width:40%;display:flex;justify-content:flex-end;align-items:center;font-family:", ";font-weight:400;overflow-wrap:anywhere;padding:16px 0px 16px 0px;font-size:", ";line-height:", ";letter-spacing:0.02em;color:", ";"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.typography.secondaryFont;
}, function (_ref19) {
  var distribution = _ref19.distribution;
  if (distribution !== Distribution.Center) {
    return '14px;';
  }
  return '16px;';
}, function (_ref20) {
  var distribution = _ref20.distribution;
  if (distribution !== Distribution.Center) {
    return '16px;';
  }
  return '18px;';
}, function (_ref21) {
  var theme = _ref21.theme,
    containerWidth = _ref21.containerWidth;
  if (containerWidth !== '100%') {
    return theme.color.modalText;
  }
  return theme.color.default;
});
export var IconImage = styled.img.withConfig({
  displayName: "styles__IconImage",
  componentId: "sc-i7hhaw-11"
})(["", ""], function (_ref22) {
  var optIconExists = _ref22.optIconExists;
  if (optIconExists) {
    return css(["&:first-child{margin-right:-15px;}&:nth-child(2){margin-left:-15px;}"]);
  }
});
export var TokenNamesInnerContainer = styled.div.withConfig({
  displayName: "styles__TokenNamesInnerContainer",
  componentId: "sc-i7hhaw-12"
})(["display:flex;flex-wrap:wrap;"]);