import React from 'react';
import { TextStyle, WrapperStyle } from './styles';
/**
 * Render a header with title and balance.
 * @param {string} text - The title text to display in the title field.
 * @param {string} balance - The balance to display in the balance field.
 * @returns  {JSX.Element} The rendered the key-value text.
 */

export var Header = function Header(_ref) {
  var text = _ref.text,
    balance = _ref.balance;
  return /*#__PURE__*/React.createElement(WrapperStyle, null, /*#__PURE__*/React.createElement(TextStyle, {
    isTitle: true
  }, text), /*#__PURE__*/React.createElement(TextStyle, null, "Balance: ", balance));
};