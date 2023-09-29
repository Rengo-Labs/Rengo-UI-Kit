import React from 'react';
import { Column, Divider, KeyValueInput, KeyValueText } from '../../atoms';
import { Wrapper } from './styles';
import { InputType } from '../../atoms/KeyValueInput/types';
/**
 * Render a More info component.
 *  @param {string} firstSymbolToken - The first token symbol.
 *  @param {number} firstTokenAmount - The first token amount.
 *  @param {string} secondSymbolToken - The second token symbol.
 *  @param {number} secondTokenAmount - The second token amount.
 *  @param {string} priceImpactMessage - The price impact message.
 *  @param {number | string} priceImpact - The price impact value.
 *  @param {number} gasFee - The gas fee value.
 *  @param {number} slippageTolerance - The slippage tolerance value.
 *  @param {array} pairPath - The pair path value.
 *  @param {function} calculateMinimumTokenReceived - The calculate minimum token received value.
 *  @param {function} gasFeeSetter - The gas fee setter value.
 *  @param {function} slippageSetter - The slippage setter value.
 *  @returns  {JSX.Element} The rendered a list of key-value text and inputs.
 */

export var SwapMoreInfo = function SwapMoreInfo(_ref) {
  var firstSymbolToken = _ref.firstSymbolToken,
    firstTokenAmount = _ref.firstTokenAmount,
    secondSymbolToken = _ref.secondSymbolToken,
    secondTokenAmount = _ref.secondTokenAmount,
    priceImpactMessage = _ref.priceImpactMessage,
    priceImpact = _ref.priceImpact,
    platformGasFee = _ref.platformGasFee,
    networkGasFee = _ref.networkGasFee,
    networkGasFeeSetter = _ref.networkGasFeeSetter,
    slippageTolerance = _ref.slippageTolerance,
    slippageSetter = _ref.slippageSetter,
    pairPath = _ref.pairPath,
    calculateMinimumTokenReceived = _ref.calculateMinimumTokenReceived,
    _ref$editableSlippage = _ref.editableSlippage,
    editableSlippage = _ref$editableSlippage === void 0 ? true : _ref$editableSlippage;
  var parirPathValue = pairPath.length > 0 ? pairPath.map(function (item, index) {
    return index === pairPath.length - 1 ? item : "".concat(item, " > ");
  }).join('') : "".concat(firstSymbolToken, " > ").concat(secondSymbolToken);
  return /*#__PURE__*/React.createElement(Column, {
    props: {
      xs: 12
    }
  }, /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "Swapping Through",
    valueText: "CasperSwap Pool"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "Minimum received",
    valueText: "".concat(calculateMinimumTokenReceived(secondTokenAmount, slippageTolerance), " ").concat(secondSymbolToken)
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "".concat(priceImpactMessage),
    valueText: "".concat(priceImpact, " %")
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueInput, {
    keyText: "Slippage Tolerance",
    value: slippageTolerance,
    inputType: InputType.SLIPPAGETOLERANCE,
    onChange: slippageSetter,
    editable: editableSlippage
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "Swap Fee",
    valueText: "".concat(firstTokenAmount * platformGasFee, " CSPR")
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueInput, {
    keyText: "Network gas fee",
    value: networkGasFee,
    inputType: InputType.GASFEE,
    onChange: networkGasFeeSetter
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueText, {
    keyText: "Route",
    valueText: parirPathValue.toString()
  })));
};