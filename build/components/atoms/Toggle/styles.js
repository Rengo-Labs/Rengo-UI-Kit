import styled, { css } from "styled-components";
import { Variant } from "./types";
export var ToggleWrapper = styled.label.withConfig({
  displayName: "styles__ToggleWrapper",
  componentId: "sc-hcegk1-0"
})(["position:relative;display:inline-block;width:", ";height:", ";", " ", ";transition:background-color 0.2s ease-in-out;cursor:pointer;border-radius:46.4286px;"], function (_ref) {
  var variant = _ref.variant;
  return variant === Variant.ThemeSwitcher ? '65px;' : '37px';
}, function (_ref2) {
  var variant = _ref2.variant;
  return variant === Variant.ThemeSwitcher ? '30px;' : '22px';
}, function (_ref3) {
  var theme = _ref3.theme,
    variant = _ref3.variant,
    invertStyleWhenActive = _ref3.invertStyleWhenActive;
  return css(["background:", ""], function () {
    if (invertStyleWhenActive) {
      return "".concat(theme.background.toggle.inverted, ";");
    }
    if (variant === Variant.InvertedColors) {
      return "".concat(theme.background.toggle.inverted, ";");
    }
    if (variant === Variant.ThemeSwitcher) {
      return "".concat(theme.color.toggleButton.default, ";");
    }
    return "".concat(theme.border.veryLightPurple, ";");
  });
}, function (_ref4) {
  var theme = _ref4.theme,
    variant = _ref4.variant,
    invertStyleWhenActive = _ref4.invertStyleWhenActive;
  return css(["border:", ""], function () {
    if (invertStyleWhenActive) {
      return ';';
    }
    if (variant === Variant.Default) {
      return "1px solid ".concat(theme.color.primary.default, ";");
    }
    return ';';
  });
});
export var ToggleInput = styled.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "styles__ToggleInput",
  componentId: "sc-hcegk1-1"
})(["display:none;"]);
export var ToggleHandle = styled.span.withConfig({
  displayName: "styles__ToggleHandle",
  componentId: "sc-hcegk1-2"
})(["position:absolute;margin:", ";left:", ";width:", ";height:", ";background-color:", ";transition:transform 0.2s ease-in-out;transform:", ";display:flex;flex-direction:row;justify-content:center;align-items:center;padding:4.42857px;border-radius:28.7415px;gap:5.75px;"], function (_ref5) {
  var variant = _ref5.variant,
    invertStyleWhenActive = _ref5.invertStyleWhenActive;
  if (variant === Variant.ThemeSwitcher) {
    return '2.93px auto;';
  }
  if (variant === Variant.InvertedColors || invertStyleWhenActive) {
    return '2.3px auto;';
  }
  return '1.4px auto;';
}, function (_ref6) {
  var variant = _ref6.variant;
  return variant === Variant.ThemeSwitcher ? '4px;' : '2px;';
}, function (_ref7) {
  var variant = _ref7.variant;
  return variant === Variant.ThemeSwitcher ? '24px;' : '18px';
}, function (_ref8) {
  var variant = _ref8.variant;
  return variant === Variant.ThemeSwitcher ? '24px;' : '18px';
}, function (_ref9) {
  var theme = _ref9.theme,
    variant = _ref9.variant,
    invertStyleWhenActive = _ref9.invertStyleWhenActive;
  if (invertStyleWhenActive) {
    return theme.color.toggleButton.invertedActive;
  }
  if (variant === Variant.Default) {
    return theme.color.white;
  }
  if (variant === Variant.InvertedColors) {
    return theme.color.toggleButton.invertedActive;
  }
  return theme.color.toggleButton.active;
}, function (_ref10) {
  var isActive = _ref10.isActive,
    variant = _ref10.variant,
    invertStyleWhenActive = _ref10.invertStyleWhenActive;
  if (variant === Variant.ThemeSwitcher) {
    if (isActive) {
      return 'translateX(33px);';
    } else {
      return 'translateX(0px);';
    }
  }
  if (variant === Variant.InvertedColors || invertStyleWhenActive) {
    if (isActive) {
      return 'translateX(15px);';
    } else {
      return 'translateX(0px);';
    }
  } else {
    if (isActive) {
      return 'translateX(13px);';
    } else {
      return 'translateX(0px);';
    }
  }
});
export var ToggleButton = styled.button.withConfig({
  displayName: "styles__ToggleButton",
  componentId: "sc-hcegk1-3"
})(["background-color:", ";border:none;cursor:pointer;height:50px;width:50px;transition:background-color 0.3s ease;&:focus{outline:none;}"], function (_ref11) {
  var isActive = _ref11.isActive;
  return isActive ? 'green' : 'red';
});
export var LabelText = styled.span.withConfig({
  displayName: "styles__LabelText",
  componentId: "sc-hcegk1-4"
})(["font-family:", ";font-size:18px;line-height:26px;font-style:normal;font-weight:400;letter-spacing:0.02em;color:", ";"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.typography.secondaryFont;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.color.modalText;
});
export var SwitcherWrapper = styled.div.withConfig({
  displayName: "styles__SwitcherWrapper",
  componentId: "sc-hcegk1-5"
})(["display:flex;align-items:center;gap:16px;"]);