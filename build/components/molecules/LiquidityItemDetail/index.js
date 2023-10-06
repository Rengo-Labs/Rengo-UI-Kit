import React from 'react';
import { Chart, Dialog, TokenOption } from '../../atoms';
// @ts-ignore
import ethLogo from '../../../../example/src/assets/icons/eth-logo.svg';
import { Wrapper, KeyStyle, ValueStyle, CloseIcon, KeyPairWrapper, Container } from './styles';
export var LiquidityItemDetail = function LiquidityItemDetail(_ref) {
  var closeCallback = _ref.closeCallback,
    isOpen = _ref.isOpen,
    chartData = _ref.chartData,
    chart0Name = _ref.chart0Name,
    xAxisName = _ref.xAxisName;
  return /*#__PURE__*/React.createElement(Dialog, {
    isOpen: isOpen,
    onClose: closeCallback
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(TokenOption, {
    tokenImg: ethLogo,
    token: "ETH",
    option1: true,
    showColor: false
  }), /*#__PURE__*/React.createElement(KeyPairWrapper, null, /*#__PURE__*/React.createElement(KeyStyle, null, "Liquidity"), /*#__PURE__*/React.createElement(ValueStyle, null, "$5,789")), /*#__PURE__*/React.createElement(KeyPairWrapper, null, /*#__PURE__*/React.createElement(KeyStyle, null, "Actual Price"), /*#__PURE__*/React.createElement(ValueStyle, null, "$1.789")), /*#__PURE__*/React.createElement(CloseIcon, {
    size: 16,
    onClick: closeCallback
  })), /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Chart, {
    data: chartData,
    width: 400,
    height: 250,
    chart0Name: chart0Name,
    xAxisName: xAxisName
  }))));
};