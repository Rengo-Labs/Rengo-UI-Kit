import styled, { css } from "styled-components";
import { IconSize, Status, TYPES_WITH_ICON } from "./types";
export var InputWrapper = styled.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "sc-1kdn6jr-0"
})(["width:100%;position:relative !important;display:flex;flex-direction:column;align-items:flex-start;gap:4px;"]);
export var InputInnerWrapper = styled.div.withConfig({
  displayName: "styles__InputInnerWrapper",
  componentId: "sc-1kdn6jr-1"
})(["position:relative;width:100%;"]);
export var LabelStyled = styled.label.withConfig({
  displayName: "styles__LabelStyled",
  componentId: "sc-1kdn6jr-2"
})(["display:block;position:relative;width:100%;color:", ";font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;"], function (_ref) {
  var status = _ref.status,
    theme = _ref.theme;
  var color = theme.color;
  if (status === Status.Error) {
    return color.error.default;
  }
  if (status === Status.Success) {
    return color.success.default;
  }
  return color.primary.default;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.secondaryFont;
});
export var HelperText = styled.span.withConfig({
  displayName: "styles__HelperText",
  componentId: "sc-1kdn6jr-3"
})(["font-family:", ";font-style:normal;font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.02em;color:", ""], function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.secondaryFont;
}, function (_ref4) {
  var status = _ref4.status,
    theme = _ref4.theme;
  var color = theme.color;
  if (status === Status.Error) {
    return color.error.default;
  }
  if (status === Status.Success) {
    return color.success.default;
  }
  return color.default;
});
export var InputStyled = styled.input.withConfig({
  displayName: "styles__InputStyled",
  componentId: "sc-1kdn6jr-4"
})(["width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:4px;height:50px;background:", ";border-radius:50px;flex:none;order:1;align-self:stretch;flex-grow:0;font-family:", ";font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;text-align:", ";color:", ";::placeholder{color:", ";}@media (min-width:800px){", " ", "}color:", ";border:", ";", ";&:focus{outline:none;border:", "}&:active{border:none;outline:", "}&:hover{border:", "}&:active:hover{border:none;}&:disabled{}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.background.default;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.secondaryFont;
}, function (_ref7) {
  var textAlign = _ref7.textAlign;
  return textAlign;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.default;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.default;
}, function (_ref10) {
  var theme = _ref10.theme,
    hasBackground = _ref10.hasBackground;
  return css(["background-color:", ";"], hasBackground ? theme.background.default : theme.background.searchInput);
}, function (_ref11) {
  var theme = _ref11.theme;
  return css(["color:", ";"], theme.color.default);
}, function (_ref12) {
  var status = _ref12.status,
    theme = _ref12.theme;
  var color = theme.color;
  if (status === Status.Error) {
    return color.error.default;
  }
  return color.default;
}, function (_ref13) {
  var status = _ref13.status,
    theme = _ref13.theme;
  var color = theme.color,
    border = theme.border;
  if (status === Status.Error) {
    return "1px solid ".concat(color.error.default, ";");
  }
  if (status === Status.Success) {
    return "1px solid ".concat(color.success.default, ";");
  }
  return "1px solid".concat(border.default, ";");
}, function (_ref14) {
  var type = _ref14.type,
    iconSize = _ref14.iconSize;
  if (!type || !iconSize) {
    return 0;
  }
  if (TYPES_WITH_ICON.includes(type)) {
    return css(["padding-left:calc(1em + ", ");"], function () {
      if (iconSize === IconSize.Large) {
        return "110px";
      }
      return "48px";
    });
  }
}, function (_ref15) {
  var status = _ref15.status,
    theme = _ref15.theme;
  var border = theme.border;
  if (status === Status.Error) {
    return "2px solid ".concat(border.redCinnabar);
  }
  if (status === Status.Success) {
    return "2px solid ".concat(border.greenMalachite);
  }
  return "2px solid ".concat(border.veryLightPurple);
}, function (_ref16) {
  var status = _ref16.status,
    theme = _ref16.theme;
  var border = theme.border;
  if (status === Status.Error) {
    return "2px solid ".concat(border.red);
  }
  if (status === Status.Success) {
    return "2px solid ".concat(border.green);
  }
  return "2px solid ".concat(border.lightBlue);
}, function (_ref17) {
  var status = _ref17.status,
    theme = _ref17.theme;
  var border = theme.border;
  if (status === Status.Error) {
    return "2px solid ".concat(border.redValencia);
  }
  if (status === Status.Success) {
    return "2px solid ".concat(border.greenMantis);
  }
  return "2px solid ".concat(border.darkLilac);
});
export var IconWrapper = styled.div.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-1kdn6jr-5"
})(["position:absolute;top:0;bottom:0;margin:auto 8px;display:flex;align-items:center;flex-direction:row;justify-content:center;gap:4px;height:", ";width:", ";border-radius:60px;&:hover{background-color:", ";}&:active{background-color:", ";}@media (min-width:430px){margin:auto 16px;}background:", ""], function (_ref18) {
  var iconSize = _ref18.iconSize;
  return iconSize === IconSize.Small ? '32px;' : 'auto;';
}, function (_ref19) {
  var iconSize = _ref19.iconSize;
  return iconSize === IconSize.Small ? '32px;' : 'auto;';
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.background.default;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.background.default;
}, function (_ref22) {
  var status = _ref22.status,
    theme = _ref22.theme,
    iconSize = _ref22.iconSize,
    iconWrapperBackground = _ref22.iconWrapperBackground;
  var background = theme.background;
  if (iconWrapperBackground) {
    return iconWrapperBackground;
  }
  if (iconSize === IconSize.Large) {
    return 'none';
  }
  if (status === Status.Error) {
    return background.palePink;
  }
  if (status === Status.Success) {
    return background.teaGreen;
  }
  return background.lightGray;
});
export var RightAdornmentWrapper = styled.div.withConfig({
  displayName: "styles__RightAdornmentWrapper",
  componentId: "sc-1kdn6jr-6"
})(["height:100%;position:absolute;top:0;right:0;background:", ";border-radius:0 50px 50px 0;border:", ";border-left:none;display:flex;justify-content:center;align-items:center;padding:0 16px;"], function (_ref23) {
  var theme = _ref23.theme;
  return theme.background.default;
}, function (_ref24) {
  var theme = _ref24.theme;
  return "1px solid ".concat(theme.border.default);
});