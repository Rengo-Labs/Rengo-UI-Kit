import React from "react";
import { Container, IconContainer, TokenFullName, TokenName, Image, TokenContainer, TokenNamesContainer } from "./styles";
/**
 A reusable component to display a token with its icon, name, and full name in a row format.
 @component
 @param {Object} props - The component props.
 @param {string} props.tokenName - The token name to be displayed.
 @param {string} props.tokenFullName - The full name of the token to be displayed.
 @param {string} props.Icon - The path to the icon image or the svg of the token to be displayed.
 @param {number} props.iconSize - The size of the token icon to be displayed.
 @param {function} [props.onSelectToken] - onSelectToken select token.
 @return {JSX.Element} - The JSX markup of the component.
 */

export var RowIcon = function RowIcon(_ref) {
  var tokenName = _ref.tokenName,
    tokenFullName = _ref.tokenFullName,
    Icon = _ref.Icon,
    iconSize = _ref.iconSize,
    onSelectToken = _ref.onSelectToken;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(TokenContainer, {
    onClick: onSelectToken
  }, /*#__PURE__*/React.createElement(IconContainer, null, /*#__PURE__*/React.createElement(Image, {
    src: Icon,
    alt: "token",
    iconSize: iconSize
  })), /*#__PURE__*/React.createElement(TokenNamesContainer, null, /*#__PURE__*/React.createElement(TokenName, null, tokenName), /*#__PURE__*/React.createElement(TokenFullName, null, tokenFullName))));
};