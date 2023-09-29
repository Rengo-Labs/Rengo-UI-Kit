import React from "react";
import { WalletConnectedOptionsDialog } from "../../atoms";
import { Container } from "./styles";
export var WalletConnectedOptions = function WalletConnectedOptions(_ref) {
  var closeCallback = _ref.closeCallback,
    options = _ref.options,
    isOpen = _ref.isOpen;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(WalletConnectedOptionsDialog, {
    closeCallback: closeCallback,
    options: options,
    isOpen: isOpen
  }));
};