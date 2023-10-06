import React from 'react';
import { Text, IconWrapper, TR, TD, CheckIcon, TDInnerContainer, TDText } from './styles';
/**
 * Renders a body from transfer table
 * @param {number} id - Id of the transfer
 * @param {string} deploy_hash - Deploy hash of the transfer
 * @param {string} block_hash - Block hash of the transfer
 * @param {string} antiquity - Antiquity of the transfer
 * @param {string} of - Of of the transfer
 * @param {string} forValue - For of the transfer
 * @param {string} transference_id - Transference id of the transfer
 * @param {string} amount - Amount of the transfer
 * @param {string} price - Price of the transfer
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Body from transfer table
 */

export var AccountTransferBody = function AccountTransferBody(_ref) {
  var deploy_hash = _ref.deploy_hash,
    block_hash = _ref.block_hash,
    antiquity = _ref.antiquity,
    of = _ref.of,
    forValue = _ref.forValue,
    transference_id = _ref.transference_id,
    amount = _ref.amount,
    price = _ref.price,
    widthIcon = _ref.widthIcon,
    heightIcon = _ref.heightIcon;
  return /*#__PURE__*/React.createElement(TR, null, /*#__PURE__*/React.createElement(TD, {
    isFirstItem: true
  }, /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(CheckIcon, {
    width: widthIcon,
    height: heightIcon
  }), /*#__PURE__*/React.createElement(Text, null, deploy_hash))), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, block_hash)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, antiquity)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, of)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, forValue)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, transference_id)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(TDInnerContainer, null, /*#__PURE__*/React.createElement(Text, null, amount, " CSPR"), /*#__PURE__*/React.createElement(TDText, null, "$", price))));
};