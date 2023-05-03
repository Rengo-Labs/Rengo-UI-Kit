import React, { useEffect, useState } from 'react'
import { DeviceType } from './types'

export const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.DESKTOP);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setDeviceType(DeviceType.MOBILE);
    } else if (window.innerWidth < 1024) {
      setDeviceType(DeviceType.TABLET);
    } else {
      setDeviceType(DeviceType.DESKTOP);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};