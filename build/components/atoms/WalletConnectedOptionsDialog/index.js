import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { useTheme } from "styled-components";
import { Dialog } from "../Dialog";
import { CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle, Row, Image, RowTitle } from "./styles";
import { Icons } from '../Icons';
import { Types } from './types';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';

/**
  A React component for a dialog displaying wallet-connected options.
 @typedef {Object} Options
  @property {string} id - The ID of the option.
  @property {string} key - The key of the option.
  @property {string} name - The name of the option.
  @property {string} iconName - The name of the icon to display for the option.
  @property {string} icon - The URL of the icon to display for the option.
  @property {Types} type - The type of the option.
  @typedef {Object} WalletConnectedOptionsDialogProps
  @property {Function} closeCallback - The function to execute when the dialog is closed.
  @property {Options[]} options - The array of options of type Options to display in the dialog.
  @param {WalletConnectedOptionsDialogProps} props - The props of the component.
  @returns {JSX.Element} - A React component that displays a dialog with wallet-connected options.
*/

export var WalletConnectedOptionsDialog = function WalletConnectedOptionsDialog(_ref) {
  var closeCallback = _ref.closeCallback,
    options = _ref.options,
    isOpen = _ref.isOpen;
  var theme = useTheme();
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var _useState = useState({
      id: '',
      status: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1];
  var _useState3 = useState({
      id: '',
      status: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    hoveredItem = _useState4[0],
    setHoveredItem = _useState4[1];
  var transformAccountHash = function transformAccountHash(accountHashString) {
    if (!accountHashString) {
      return '';
    }
    var end = accountHashString.length;
    var walletLabel = "".concat(accountHashString.substring(0, 6), "...").concat(accountHashString.substring(end - 11, end));
    return walletLabel;
  };
  var handleMouseEnter = function handleMouseEnter(item) {
    setHoveredItem({
      id: item.id,
      status: true
    });
  };
  var handleMouseLeave = function handleMouseLeave() {
    setHoveredItem({
      id: '',
      status: false
    });
  };
  var getCurrentIconColor = function getCurrentIconColor(item) {
    if (hoveredItem.id === item.id || copied.id === item.id && item.type === Types.Copy) {
      return theme.background.wallet.white;
    }
    return theme.color.modalText;
  };
  var handleOnClick = function handleOnClick(item) {
    if (item.type === Types.Copy) {
      handleCopyToClipboard(item);
    } else {
      item.onClick && item.onClick();
      closeCallback();
    }
  };
  var handleCopyToClipboard = function handleCopyToClipboard(item) {
    navigator.clipboard.writeText(item.name);
    setCopied({
      id: item.id,
      status: true
    });
    setTimeout(function () {
      return setCopied({
        id: '',
        status: false
      });
    }, 2000);
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    isOpen: isOpen,
    onClose: closeCallback
  }, /*#__PURE__*/React.createElement(DialogHeaderContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(DialogHeader, null, /*#__PURE__*/React.createElement(DialogTitle, null, "Wallet Connected"), /*#__PURE__*/React.createElement(CloseButton, {
    onClick: closeCallback
  }, /*#__PURE__*/React.createElement(Icons, {
    name: "X",
    size: 23,
    color: theme.color.modalText
  })))), /*#__PURE__*/React.createElement(Container, null, options && options.map(function (item, i) {
    return /*#__PURE__*/React.createElement(Row, {
      key: "wallet-option-item-".concat(item.id),
      onClick: function onClick() {
        return handleOnClick(item);
      },
      isCopied: copied.id === item.id && item.type === Types.Copy,
      isBeingHovered: hoveredItem.id === item.id,
      onMouseEnter: function onMouseEnter() {
        return handleMouseEnter(item);
      },
      onMouseLeave: handleMouseLeave,
      isLast: i === options.length - 1,
      isMobile: isMobile
    }, /*#__PURE__*/React.createElement(RowTitle, {
      isLast: i === options.length - 1,
      isCopied: copied.id === item.id && item.type === Types.Copy,
      isBeingHovered: hoveredItem.id === item.id
    }, copied.id === item.id && item.key === 'wallet' ? 'Wallet number copied' : item.key == 'wallet' ? transformAccountHash(item.name) : item.name), item.icon && /*#__PURE__*/React.createElement(Image, {
      src: item.icon,
      isLast: i === options.length - 1,
      isBeingHovered: hoveredItem.id === item.id
    }), /*#__PURE__*/React.createElement(Icons, {
      name: item.iconName,
      color: getCurrentIconColor(item),
      fill: "transparent",
      size: 24
    }));
  })));
};