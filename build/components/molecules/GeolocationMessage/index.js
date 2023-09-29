import React from 'react';
import { Container, Icons, Logo, Title } from "./styles";
import { DeviceType } from "../../../hooks/types";
import { useDeviceType } from "../../../hooks";
export var GeolocationMessage = function GeolocationMessage() {
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement(Title, {
    isMobile: isMobile
  }, "I\xB4m sorry casperswap it's not available in your country."), /*#__PURE__*/React.createElement(Icons, null));
};