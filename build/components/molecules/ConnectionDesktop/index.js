import React from 'react';
import { Dialog, Divider, Icons, WalletConnectionItem } from '../../atoms';
import { CloseButton, Container, DialogBodyText, DialogFooter, DialogHeader, DialogHeaderContainer, DialogTitle, InnerContainer, WalletsContainer } from './styles';
import { useTheme } from 'styled-components';
export var ConnectionDesktop = function ConnectionDesktop(_ref) {
  var closeCallback = _ref.closeCallback,
    linkCallback = _ref.linkCallback,
    wallets = _ref.wallets,
    isOpen = _ref.isOpen;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(React.Fragment, null, isOpen && /*#__PURE__*/React.createElement(Dialog, {
    onClose: closeCallback,
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(DialogHeaderContainer, null, /*#__PURE__*/React.createElement(DialogHeader, null, /*#__PURE__*/React.createElement(DialogTitle, null, "Connect your wallet to CasperSwap"), /*#__PURE__*/React.createElement(CloseButton, {
    onClick: closeCallback
  }, /*#__PURE__*/React.createElement(Icons, {
    name: "X",
    size: 23,
    color: theme.color.modalText
  })))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(DialogBodyText, null, "By connecting your wallet, you acknowledge that you have read, understand and accept the terms in the disclaimer"), /*#__PURE__*/React.createElement(WalletsContainer, null, wallets.map(function (wallet) {
    return /*#__PURE__*/React.createElement(WalletConnectionItem, {
      wallet: wallet,
      key: wallet.id
    });
  }))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(DialogFooter, {
    onClick: linkCallback
  }, "New here? Get started on CasperSwap"))));
};