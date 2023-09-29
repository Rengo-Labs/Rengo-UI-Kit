import React from 'react';
import { Text, IconWrapper, TR, TD, CheckIcon, TDInnerContainer, TDText, TextLink, AlertIcon } from './styles';
/**
 * Renders a body from deploy table
 * @param {number} id - Id of the transfer
 * @param {string} deploy_hash - Deploy hash of the transfer
 * @param {string} block_hash - Block hash of the transfer
 * @param {string} antiquity - Antiquity of the transfer
 * @param {string} contract - Contract of the transfer
 * @param {function} contractRedirect - Redirect to the telnet
 * @param {string} entry_point - Entry point of the transfer
 * @param {string} amount - Amount of the transfer
 * @param {string} cost - Cost of the transfer
 * @param {string} price - Price of the transfer
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Body from deploy table
 */

export var AccountDeployBody = function AccountDeployBody(_ref) {
  var deploy_hash = _ref.deploy_hash,
    block_hash = _ref.block_hash,
    antiquity = _ref.antiquity,
    contract = _ref.contract,
    contractRedirect = _ref.contractRedirect,
    entry_point = _ref.entry_point,
    amount = _ref.amount,
    amountSymbol = _ref.amountSymbol,
    cost = _ref.cost,
    price = _ref.price,
    widthIcon = _ref.widthIcon,
    heightIcon = _ref.heightIcon,
    errorMessage = _ref.errorMessage;
  return /*#__PURE__*/React.createElement(TR, null, /*#__PURE__*/React.createElement(TD, {
    isFirstItem: true
  }, /*#__PURE__*/React.createElement(IconWrapper, null, errorMessage ? /*#__PURE__*/React.createElement(AlertIcon, {
    width: widthIcon,
    height: heightIcon
  }) : /*#__PURE__*/React.createElement(CheckIcon, {
    width: widthIcon,
    height: heightIcon
  }), /*#__PURE__*/React.createElement(Text, null, deploy_hash))), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, block_hash)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, antiquity)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(TDInnerContainer, null, /*#__PURE__*/React.createElement(Text, null, entry_point), /*#__PURE__*/React.createElement(TextLink, {
    onClick: contractRedirect
  }, contract))), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, amount, " ", amountSymbol)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(TDInnerContainer, null, /*#__PURE__*/React.createElement(Text, null, cost, " CSPR"), /*#__PURE__*/React.createElement(TDText, null, "$", price))));
};