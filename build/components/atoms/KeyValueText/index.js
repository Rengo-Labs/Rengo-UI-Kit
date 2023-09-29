import React from 'react';
import { KeyStyle, ValueStyle, WrapperStyled } from './styles';
/**
 * Render a key-value text.
 * @param {string} keyText - The key text to display in the key field.
 * @param {string} valueText - The value text to display in the value field.
 * @returns  {JSX.Element} The rendered the key-value text.
 */

export var KeyValueText = function KeyValueText(_ref) {
  var keyText = _ref.keyText,
    valueText = _ref.valueText,
    isMoney = _ref.isMoney;
  return /*#__PURE__*/React.createElement(WrapperStyled, null, /*#__PURE__*/React.createElement(KeyStyle, null, keyText), /*#__PURE__*/React.createElement(ValueStyle, null, isMoney && '$', valueText));
};