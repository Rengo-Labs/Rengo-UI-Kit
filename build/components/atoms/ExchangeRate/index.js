import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import { ExchangeRateContainer, ExchangeRateRow, ExchangeRateColumn } from "./styles";
export var ExchangeRate = function ExchangeRate(_ref) {
  var tokenASymbol = _ref.tokenASymbol,
    tokenBSymbol = _ref.tokenBSymbol,
    exchangeRateA = _ref.exchangeRateA,
    exchangeRateB = _ref.exchangeRateB,
    className = _ref.className;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    switchRate = _React$useState2[0],
    switchRateSetter = _React$useState2[1];
  var handleUpdateTokens = function handleUpdateTokens() {
    switchRateSetter(!switchRate);
  };
  return /*#__PURE__*/React.createElement(ExchangeRateContainer, {
    className: className
  }, /*#__PURE__*/React.createElement(ExchangeRateRow, {
    "data-testid": switchRate,
    onClick: handleUpdateTokens
  }, switchRate ? /*#__PURE__*/React.createElement(ExchangeRateColumn, null, exchangeRateB ? exchangeRateB.toFixed(8) : '???', " ", tokenASymbol, " \u2248 1 ", tokenBSymbol) : /*#__PURE__*/React.createElement(ExchangeRateColumn, null, exchangeRateA ? exchangeRateA.toFixed(8) : '???', " ", tokenBSymbol, " \u2248 1 ", tokenASymbol)));
};