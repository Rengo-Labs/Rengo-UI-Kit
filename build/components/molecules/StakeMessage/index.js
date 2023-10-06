import React from 'react';
import { useDeviceType } from "../../../hooks";
import { Container, Wrapper, Title, Subtitle, ImageContainer, ButtonContainer } from './styles';
import casperIcon from '../../../assets/icons/casper-icon.svg';
import { DeviceType } from "../../../hooks/types";
import { Button } from "../../atoms";
export var StakeMessage = function StakeMessage(_ref) {
  var isOpen = _ref.isOpen,
    tokenImg = _ref.tokenImg,
    tokenName = _ref.tokenName,
    amount = _ref.amount,
    closeCallback = _ref.closeCallback;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var handleClose = function handleClose() {
    closeCallback();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, isOpen && /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(ImageContainer, null, /*#__PURE__*/React.createElement("img", {
    src: casperIcon,
    alt: "casper icon"
  })), /*#__PURE__*/React.createElement(Title, {
    isMobile: isMobile
  }, "Congratulations you earned"), /*#__PURE__*/React.createElement(ImageContainer, null, /*#__PURE__*/React.createElement("img", {
    src: tokenImg,
    alt: tokenName,
    width: "160",
    height: "160"
  })), /*#__PURE__*/React.createElement(Subtitle, {
    isMobile: isMobile
  }, amount, " ", tokenName), /*#__PURE__*/React.createElement(ButtonContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(Button, {
    type: "large",
    props: {
      disabled: false,
      onClick: function onClick() {
        return handleClose();
      }
    }
  }, "Close")))));
};