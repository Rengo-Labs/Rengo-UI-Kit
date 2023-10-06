import React from 'react';
import { Container, Icon, Text } from './styles';
export var WalletConnectionItem = function WalletConnectionItem(_ref) {
  var wallet = _ref.wallet;
  return /*#__PURE__*/React.createElement(Container, {
    onClick: wallet.onConnect
  }, /*#__PURE__*/React.createElement(Icon, {
    src: wallet.icon,
    alt: wallet.name,
    sizes: "14"
  }), /*#__PURE__*/React.createElement(Text, null, wallet.name));
};