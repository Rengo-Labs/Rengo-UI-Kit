import _extends from "@babel/runtime/helpers/esm/extends";
import React from "react";
import { Row as RowContainer } from "react-styled-flexboxgrid";
export var Row = function Row(_ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$props = _ref.props,
    props = _ref$props === void 0 ? {} : _ref$props;
  return /*#__PURE__*/React.createElement(RowContainer, _extends({
    className: className
  }, props), children);
};