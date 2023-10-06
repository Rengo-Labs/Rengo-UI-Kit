import _extends from "@babel/runtime/helpers/esm/extends";
import React from "react";
import { Col } from "react-styled-flexboxgrid";
export var Column = function Column(_ref) {
  var children = _ref.children,
    className = _ref.className,
    props = _ref.props;
  return /*#__PURE__*/React.createElement(Col, _extends({
    className: className
  }, props), children);
};