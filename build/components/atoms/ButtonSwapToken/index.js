import React from 'react';
import { IconStyled } from "./styles";
import swapIcon from '../../../assets/icons/swap-icon.svg';
export var ButtonSwapToken = function ButtonSwapToken(_ref) {
  var handleClick = _ref.handleClick;
  return /*#__PURE__*/React.createElement(IconStyled, {
    src: swapIcon,
    onClick: function onClick() {
      handleClick();
    }
  });
};