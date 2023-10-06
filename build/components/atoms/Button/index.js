import React from "react";
import { SmallButtonStyled, ButtonStyled } from "./styles";
export var Button = function Button(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'large' : _ref$type,
    _ref$props = _ref.props,
    props = _ref$props === void 0 ? {} : _ref$props,
    children = _ref.children;
  return type === "large" ? /*#__PURE__*/React.createElement(ButtonStyled, props, children) : /*#__PURE__*/React.createElement(SmallButtonStyled, props, children);
};