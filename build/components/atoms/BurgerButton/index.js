import React from 'react';
import { BurgerButtonStyled } from "./styles";
export var BurgerButton = function BurgerButton(_ref) {
  var open = _ref.open,
    setOpen = _ref.setOpen;
  return /*#__PURE__*/React.createElement(BurgerButtonStyled, {
    open: open,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null));
};