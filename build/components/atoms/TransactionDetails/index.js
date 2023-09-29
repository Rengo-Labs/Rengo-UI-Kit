import React from "react";
import { TokenInnerWrapper, TokenFullName, TokenName, TokenDetailsWrapper, Wrapper, TokenNameSymbol, LeftAdornmentWrapper, AmountWrapper, TokenNamesWrapper, IconImage, TokenNamesInnerContainer } from "./styles";
/**

  Displays details of a transaction, including the distribution of the components,
  an optional left adornment, an optional icon, and token information such as token names,
  full name, symbols, and amount.
  @component
  @param {object} props - The props object.
  @param {Distribution} props.distribution - Specifies how the components should be distributed along the main axis.
  Possible values are 'center', 'space-around', 'space-evenly', and 'space-between'.
  @param {ReactNode} [props.LeftAdornment] - Optional element to be displayed on the left side of the component. This could be a Feather Icon component.
  @param {function} [props.LeftAdornmentCallback] - Optional callback function to handle user click of the LeftAdornment. Consumer must implement the handler.
  @param {string} [props.Icon] - Icon component to be displayed on the component.
  @param {IconSize} [props.iconSize] - Size of the icon to be displayed on the component.
  Possible values are 'Small' (30px) and 'Large' (45px).
  @param {Array<string>} [props.tokenNames] - Optional array of token names to be displayed on the component.
  @param {string} [props.tokenFullName] - Optional full name of the token to be displayed on the component. This will be below the token name.
  @param {Array<string>} [props.tokenNameSymbols] - Optional array of token symbols to be displayed on the component. This will be to the right side of the token name.
  @param {string} [props.amount] - Amount of the token to be displayed on the component.
  @param {Boolean} [props.isLast] - isLast of the iteration elements.
  @param {function} [props.onSelectToken] - onSelectToken select token.
  @param {function} [props.containerWidth] - custom width of the component
  
  @return {JSX.Element} - Rendered TransactionDetails component.
*/
export var TransactionDetails = function TransactionDetails(_ref) {
  var distribution = _ref.distribution,
    LeftAdornment = _ref.LeftAdornment,
    LeftAdornmentCallback = _ref.LeftAdornmentCallback,
    Icon = _ref.Icon,
    OptIcon = _ref.OptIcon,
    iconSize = _ref.iconSize,
    tokenNames = _ref.tokenNames,
    tokenFullName = _ref.tokenFullName,
    tokenNameSymbols = _ref.tokenNameSymbols,
    amount = _ref.amount,
    isLast = _ref.isLast,
    onSelectToken = _ref.onSelectToken,
    _ref$iconHeight = _ref.iconHeight,
    iconHeight = _ref$iconHeight === void 0 ? 45 : _ref$iconHeight,
    _ref$iconWidth = _ref.iconWidth,
    iconWidth = _ref$iconWidth === void 0 ? 45 : _ref$iconWidth,
    containerWidth = _ref.containerWidth;
  return /*#__PURE__*/React.createElement(Wrapper, {
    distribution: distribution,
    isLast: isLast,
    onClick: onSelectToken,
    containerWidth: containerWidth
  }, /*#__PURE__*/React.createElement(TokenInnerWrapper, null, LeftAdornment && /*#__PURE__*/React.createElement(LeftAdornmentWrapper, {
    onClick: function onClick(e) {
      LeftAdornmentCallback && LeftAdornmentCallback();
      e.preventDefault();
      e.stopPropagation();
    }
  }, LeftAdornment), Icon && /*#__PURE__*/React.createElement(IconImage, {
    src: Icon,
    optIconExists: false,
    alt: "token",
    height: iconHeight,
    width: iconWidth
  }), OptIcon && /*#__PURE__*/React.createElement(IconImage, {
    src: OptIcon,
    optIconExists: true,
    alt: "optional token",
    height: iconHeight,
    width: iconWidth
  }), /*#__PURE__*/React.createElement(TokenDetailsWrapper, {
    tokenNameSymbol: tokenNameSymbols
  }, /*#__PURE__*/React.createElement(TokenNamesWrapper, {
    tokenNames: tokenNames,
    distribution: distribution
  }, tokenNames && (tokenNames === null || tokenNames === void 0 ? void 0 : tokenNames.length) > 0 && (tokenNames === null || tokenNames === void 0 ? void 0 : tokenNames.map(function (name, index) {
    return /*#__PURE__*/React.createElement(TokenNamesInnerContainer, null, /*#__PURE__*/React.createElement(TokenName, {
      key: "token-".concat(name)
    }, name), /*#__PURE__*/React.createElement(TokenNameSymbol, null, tokenNameSymbols && tokenNameSymbols[index]));
  }))), TokenFullName && /*#__PURE__*/React.createElement(TokenFullName, null, tokenFullName))), /*#__PURE__*/React.createElement(AmountWrapper, {
    distribution: distribution,
    containerWidth: containerWidth
  }, amount));
};