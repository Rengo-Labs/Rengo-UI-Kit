import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, forwardRef } from 'react';
import { CenterTextContainer, Icon, LeftTextContainer, MenuItem, MenuItemText, MenuWrapper, MenuWrapperMobile, MobileMenuIcon, MobileMenuItemContainer, MobileMenuWrapper } from './styles';
import { BurgerButton, ButtonWallet, Toggle } from '../../atoms';
import { useDeviceType } from '../../../hooks';
import { DeviceType } from '../../../hooks/types';
export var Menu = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var menuIcon = _ref.menuIcon,
    casperIcon = _ref.casperIcon,
    title = _ref.title,
    links = _ref.links,
    toggle = _ref.toggle,
    rightAction = _ref.rightAction,
    handleRedirect = _ref.handleRedirect;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var isTablet = deviceType === DeviceType.TABLET;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleMenu = function toggleMenu() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuWrapperMobile, {
    ref: ref
  }, /*#__PURE__*/React.createElement(MobileMenuIcon, {
    onClick: toggleMenu
  }, /*#__PURE__*/React.createElement(BurgerButton, {
    key: 'burger-menu-mobile',
    open: isOpen,
    setOpen: toggleMenu
  })), isOpen && /*#__PURE__*/React.createElement(MenuItemText, {
    size: 24
  }, title), /*#__PURE__*/React.createElement(Icon, {
    src: menuIcon,
    width: 45,
    height: 45,
    alt: "".concat(title, " left icon"),
    onClick: handleRedirect
  }), !isOpen && /*#__PURE__*/React.createElement(ButtonWallet, {
    handleClick: rightAction !== null && rightAction !== void 0 && rightAction.isWalletConnected ? rightAction === null || rightAction === void 0 ? void 0 : rightAction.onActionConnected : rightAction === null || rightAction === void 0 ? void 0 : rightAction.onAction,
    accountHashString: rightAction === null || rightAction === void 0 ? void 0 : rightAction.walletAddress
  })), /*#__PURE__*/React.createElement(MobileMenuWrapper, {
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(MobileMenuItemContainer, null, links.map(function (link, index) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: "".concat(link.page, "-").concat(index, "-mobile"),
      clickable: true,
      onClick: function onClick() {
        return link.onAction(link.path);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      src: link.icon,
      width: 38,
      height: 38,
      alt: "".concat(link.page, " icon")
    }), /*#__PURE__*/React.createElement(MenuItemText, {
      size: 22
    }, link.page));
  }), toggle && /*#__PURE__*/React.createElement(MenuItem, null, /*#__PURE__*/React.createElement(Toggle, {
    key: 'toggle-menu-mobile',
    isActive: toggle.isActive,
    toggle: toggle.toggle,
    labelText: toggle.labelText,
    variant: toggle.variant
  }))))) : /*#__PURE__*/React.createElement(MenuWrapper, {
    isTablet: isTablet,
    ref: ref
  }, /*#__PURE__*/React.createElement(LeftTextContainer, {
    onClick: handleRedirect
  }, /*#__PURE__*/React.createElement(Icon, {
    src: menuIcon,
    width: 28,
    height: 28,
    alt: "".concat(title, " left icon")
  }), /*#__PURE__*/React.createElement(MenuItem, null, /*#__PURE__*/React.createElement(Icon, {
    src: casperIcon,
    width: 120,
    height: 13,
    alt: "".concat(title, " left icon")
  }))), /*#__PURE__*/React.createElement(CenterTextContainer, null, links.map(function (link, index) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: "".concat(link.page, "-").concat(index),
      clickable: true,
      onClick: function onClick() {
        return link.onAction(link.path);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      src: link.icon,
      width: 32,
      height: 32,
      alt: "".concat(link.page, " icon")
    }), /*#__PURE__*/React.createElement(MenuItemText, null, link.page));
  }), toggle && /*#__PURE__*/React.createElement(MenuItem, null, /*#__PURE__*/React.createElement(Toggle, {
    key: 'toggle-menu',
    isActive: toggle.isActive,
    toggle: toggle.toggle,
    labelText: toggle.labelText,
    variant: toggle.variant
  }))), /*#__PURE__*/React.createElement(ButtonWallet, {
    handleClick: rightAction !== null && rightAction !== void 0 && rightAction.isWalletConnected ? rightAction === null || rightAction === void 0 ? void 0 : rightAction.onActionConnected : rightAction === null || rightAction === void 0 ? void 0 : rightAction.onAction,
    accountHashString: rightAction === null || rightAction === void 0 ? void 0 : rightAction.walletAddress
  })));
});