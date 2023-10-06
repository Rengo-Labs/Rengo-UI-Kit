import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';
import { DeviceType } from './types';
export var useDeviceType = function useDeviceType() {
  var _useState = useState(DeviceType.DESKTOP),
    _useState2 = _slicedToArray(_useState, 2),
    deviceType = _useState2[0],
    setDeviceType = _useState2[1];
  var handleResize = function handleResize() {
    if (window.innerWidth < 900) {
      setDeviceType(DeviceType.MOBILE);
    } else if (window.innerWidth < 1024) {
      setDeviceType(DeviceType.TABLET);
    } else {
      setDeviceType(DeviceType.DESKTOP);
    }
  };
  useEffect(function () {
    handleResize();
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return deviceType;
};