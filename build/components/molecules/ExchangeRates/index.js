import React from 'react';
import { ButtonSwapToken, ExchangeRate, ButtonUpdateCircle } from "../../atoms";
import { Container } from './styles';
export var ExchangeRates = function ExchangeRates(_ref) {
  var handleClickSwap = _ref.handleClickSwap,
    tokenASymbol = _ref.tokenASymbol,
    tokenBSymbol = _ref.tokenBSymbol,
    exchangeRateA = _ref.exchangeRateA,
    exchangeRateB = _ref.exchangeRateB,
    getProgress = _ref.getProgress,
    clearProgress = _ref.clearProgress,
    strokeWidth = _ref.strokeWidth,
    handlerButtonCircle = _ref.handlerButtonCircle;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(ButtonSwapToken, {
    handleClick: handleClickSwap
  }), /*#__PURE__*/React.createElement(ExchangeRate, {
    tokenASymbol: tokenASymbol,
    tokenBSymbol: tokenBSymbol,
    exchangeRateA: exchangeRateA,
    exchangeRateB: exchangeRateB
  }), /*#__PURE__*/React.createElement(ButtonUpdateCircle, {
    getProgress: getProgress,
    clearProgress: clearProgress,
    strokeWidth: strokeWidth,
    handlerAction: handlerButtonCircle
  }));
};