import React from 'react';
import { WrapperStyled, NameStyled } from './styles';
export var TextIconTouchable = function TextIconTouchable(_ref) {
  var startIcon = _ref.startIcon,
    name = _ref.name,
    endIcon = _ref.endIcon,
    actionCallBack = _ref.actionCallBack,
    background = _ref.background,
    color = _ref.color,
    _ref$iconHeight = _ref.iconHeight,
    iconHeight = _ref$iconHeight === void 0 ? 30 : _ref$iconHeight,
    _ref$iconWidth = _ref.iconWidth,
    iconWidth = _ref$iconWidth === void 0 ? 30 : _ref$iconWidth,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 0 : _ref$padding,
    _ref$isUpperCase = _ref.isUpperCase,
    isUpperCase = _ref$isUpperCase === void 0 ? true : _ref$isUpperCase;
  return /*#__PURE__*/React.createElement(WrapperStyled, {
    background: background,
    onClick: function onClick() {
      return actionCallBack();
    }
  }, startIcon && /*#__PURE__*/React.createElement("img", {
    src: startIcon,
    height: iconHeight,
    width: iconWidth,
    alt: "".concat(name, " left icon")
  }), /*#__PURE__*/React.createElement(NameStyled, {
    titleColor: color,
    isUpperCase: isUpperCase
  }, name), endIcon && /*#__PURE__*/React.createElement("img", {
    src: endIcon,
    height: iconHeight,
    width: iconWidth,
    alt: "".concat(name, " right icon")
  }));
};