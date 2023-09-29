import React from 'react';
import { Divider, KeyValueInput, KeyValueText } from '../../atoms';
import { InputType } from '../../atoms/KeyValueInput/types';
import { Wrapper } from './styles';
/**
 * Render a Liquidity Details.
 * @returns  {JSX.Element} The rendered a list of key-value text and inputs.
 */

export var LiquidityDetails = function LiquidityDetails(_ref) {
  var firstSymbol = _ref.firstSymbol,
    secondSymbol = _ref.secondSymbol,
    baseAmount = _ref.baseAmount,
    minAmount = _ref.minAmount,
    firstTotalLiquidity = _ref.firstTotalLiquidity,
    secondTotalLiquidity = _ref.secondTotalLiquidity,
    totalSupply = _ref.totalSupply,
    slippage = _ref.slippage,
    setSlippage = _ref.setSlippage,
    networkFee = _ref.networkFee,
    setNetworkFee = _ref.setNetworkFee;
  var handleSlippageTolerance = function handleSlippageTolerance(value) {
    setSlippage(value);
  };
  var handleNetworkGasFee = function handleNetworkGasFee(value) {
    setNetworkFee(value);
  };
  var handleNullOrUndefined = function handleNullOrUndefined(value) {
    if (value === undefined || value === null || value === '') {
      return 0;
    }
    return value;
  };
  return /*#__PURE__*/React.createElement(Wrapper, {
    props: {
      xs: 12
    }
  }, /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "Min Amount",
    valueText: "".concat(baseAmount, " ").concat(firstSymbol)
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "Min Token Amount",
    valueText: "".concat(minAmount, " ").concat(secondSymbol)
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "Pool Liquidity (".concat(firstSymbol, ")"),
    valueText: "".concat(firstTotalLiquidity, " ").concat(firstSymbol)
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "Pool Liquidity (".concat(secondSymbol, ")"),
    valueText: "".concat(secondTotalLiquidity, " ").concat(secondSymbol)
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "LP supply",
    valueText: "".concat(handleNullOrUndefined(totalSupply), " ").concat(firstSymbol, "-").concat(secondSymbol)
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueInput, {
    keyText: "Slippage Tolerance",
    value: slippage,
    inputType: InputType.SLIPPAGETOLERANCE,
    onChange: handleSlippageTolerance
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueInput, {
    keyText: "Network gas fee",
    value: networkFee,
    inputType: InputType.GASFEE,
    onChange: handleNetworkGasFee
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "Route",
    valueText: "".concat(firstSymbol, " > ").concat(secondSymbol)
  }));
};