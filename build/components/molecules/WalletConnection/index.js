import React from 'react';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';
import { ConnectionDesktop } from '../ConnectionDesktop';
import { ConnectionMobile } from '../ConnectionMobile';
export var WalletConnection = function WalletConnection(_ref) {
  var closeCallback = _ref.closeCallback,
    linkCallback = _ref.linkCallback,
    wallets = _ref.wallets,
    _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  return /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement(ConnectionMobile, {
    closeCallback: closeCallback,
    wallets: wallets,
    linkCallback: linkCallback,
    isOpen: isOpen
  }) : /*#__PURE__*/React.createElement(ConnectionDesktop, {
    closeCallback: closeCallback,
    wallets: wallets,
    linkCallback: linkCallback,
    isOpen: isOpen
  }));
};