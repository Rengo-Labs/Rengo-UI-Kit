import React from 'react';
import { KeyStyled, ValueStyled, WrapperStyled } from './styles';
/**
 * Render a key-value text.
 * @param {string} keyText - The key text to display in the key field.
 * @param {string} pairText - The value text to display in the value field.
 * @param {boolean} isPorcentage - Show the value as a percentage or $
 * @returns  {JSX.Element} The rendered the key-value text.
 */

export var KeyPairText = function KeyPairText(_ref) {
  var keyText = _ref.keyText,
    pairText = _ref.pairText,
    isPorcentage = _ref.isPorcentage;
  return /*#__PURE__*/React.createElement(WrapperStyled, null, /*#__PURE__*/React.createElement(KeyStyled, null, keyText), /*#__PURE__*/React.createElement(ValueStyled, {
    isPorcentage: isPorcentage
  }, !isPorcentage && '$', pairText, isPorcentage && '%'));
};