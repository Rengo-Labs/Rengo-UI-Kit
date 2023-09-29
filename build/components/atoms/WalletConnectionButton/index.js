import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { TextIconTouchable, ButtonWrapper } from './styles';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';
var INITIAL_STATE = 'Connect Wallet';

/**
  A React component for a wallet connection button.
  @typedef {Object} WalletConnectionButtonProps
  @param {WalletConnectionButtonProps} props - The props of the component.
  @property {string} [startIcon] - The icon to display at the start of the button.
  @property {string} [endIcon] - The icon to display at the end of the button.
  @property {string} walletID - The ID of the wallet.
  @property {boolean} isWalletActive - Whether the wallet is currently active or not.
  @property {Function} onClick - The function to execute when the button is clicked.
*/

export var WalletConnectionButton = function WalletConnectionButton(_ref) {
  var startIcon = _ref.startIcon,
    endIcon = _ref.endIcon,
    walletID = _ref.walletID,
    isWalletActive = _ref.isWalletActive,
    onClick = _ref.onClick;
  var _useState = useState(function () {
      return INITIAL_STATE;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    connectionStateText = _useState2[0],
    setConnectionState = _useState2[1];
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var shortenWalletID = function shortenWalletID(walletID) {
    var start = '';
    var end = '';
    if (isMobile) {
      start = walletID.slice(0, 2);
      end = walletID.slice(-3);
    } else {
      start = walletID.slice(0, 6);
      end = walletID.slice(-6);
    }
    return "".concat(start, "...").concat(end);
  };
  useEffect(function () {
    var status = '';
    if (!isMobile && !isWalletActive) {
      status = INITIAL_STATE;
    } else if (isWalletActive) {
      status = shortenWalletID(walletID);
    }
    setConnectionState(status);
  }, [isMobile, isWalletActive]);
  return /*#__PURE__*/React.createElement(ButtonWrapper, {
    onClick: onClick,
    isMobile: isMobile
  }, startIcon && /*#__PURE__*/React.createElement(TextIconTouchable, {
    src: startIcon,
    alt: walletID
  }), /*#__PURE__*/React.createElement("span", null, connectionStateText), endIcon && /*#__PURE__*/React.createElement(TextIconTouchable, {
    src: endIcon,
    alt: walletID
  }));
};