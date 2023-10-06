import React from 'react';
import { ButtonWalletDesktop, ButtonWalletMobile, ButtonWalletText, ButtonWalletIcon } from './styles';
import walletIcon from '../../../assets/icons/wallet.svg';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from "../../../hooks/types";
var defaultAccountHash = 'Connect Wallet';
var transformAccountHash = function transformAccountHash(accountHashString) {
  if (!accountHashString) {
    return '';
  }
  var end = accountHashString.length;
  var walletLabel = "".concat(accountHashString.substring(0, 6), "...").concat(accountHashString.substring(end - 11, end));
  var walletLabelMobile = "".concat(accountHashString.substring(0, 2), "...").concat(accountHashString.substring(end - 3, end));
  return {
    walletLabel: walletLabel,
    walletLabelMobile: walletLabelMobile
  };
};
export var ButtonWallet = function ButtonWallet(_ref) {
  var handleClick = _ref.handleClick,
    _ref$accountHashStrin = _ref.accountHashString,
    accountHashString = _ref$accountHashStrin === void 0 ? defaultAccountHash : _ref$accountHashStrin;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var walletHashTransformed = transformAccountHash(accountHashString);
  var walletIsActive = accountHashString && walletHashTransformed !== '';
  return /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement(ButtonWalletMobile, {
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(ButtonWalletIcon, {
    src: walletIcon
  }), /*#__PURE__*/React.createElement(ButtonWalletText, null, walletIsActive ? walletHashTransformed === null || walletHashTransformed === void 0 ? void 0 : walletHashTransformed.walletLabelMobile : defaultAccountHash)) : /*#__PURE__*/React.createElement(ButtonWalletDesktop, {
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(ButtonWalletIcon, {
    src: walletIcon
  }), /*#__PURE__*/React.createElement(ButtonWalletText, null, walletIsActive ? walletHashTransformed.walletLabel : defaultAccountHash)));
};