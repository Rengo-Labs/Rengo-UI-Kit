import React from "react";
import { WrapperContainer } from "./styles";
export var ContainerLayout = function ContainerLayout(_ref) {
  var children = _ref.children,
    props = _ref.props,
    className = _ref.className;
  return /*#__PURE__*/React.createElement(WrapperContainer, {
    props: props,
    className: className
  }, children);
};