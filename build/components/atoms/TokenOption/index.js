import React from 'react';
import { Ellipse, TokenStyled, WrapperStyled } from './styles';
/**
 * Render a Token Tag.
 * @param {any} tokenImg - The image value to display in the img field.
 * @param {string} token - The token text to display in the token field.
 * @param {boolean} option1 - The grafic color to show in the ellipse.
 * @returns  {JSX.Element} The rendered the key-value text.
 */

export var TokenOption = function TokenOption(_ref) {
  var tokenImg = _ref.tokenImg,
    token = _ref.token,
    option1 = _ref.option1,
    onClick = _ref.onClick,
    _ref$showColor = _ref.showColor,
    showColor = _ref$showColor === void 0 ? true : _ref$showColor,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 35 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 35 : _ref$width;
  return /*#__PURE__*/React.createElement(WrapperStyled, {
    onClick: onClick
  }, /*#__PURE__*/React.createElement("img", {
    src: tokenImg,
    alt: token,
    height: height,
    width: width
  }), /*#__PURE__*/React.createElement(TokenStyled, null, token), showColor && /*#__PURE__*/React.createElement(Ellipse, {
    isOption1: option1
  }));
};