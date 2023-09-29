import React from 'react';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';
import { PoolItemDetailDesktop, PoolItemDetailMobile } from '../../atoms';
export var PoolItemDetails = function PoolItemDetails(_ref) {
  var closeCallback = _ref.closeCallback,
    _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
    token0Icon = _ref.token0Icon,
    token1Icon = _ref.token1Icon,
    _ref$widthIcon = _ref.widthIcon,
    widthIcon = _ref$widthIcon === void 0 ? 30 : _ref$widthIcon,
    _ref$heightIcon = _ref.heightIcon,
    heightIcon = _ref$heightIcon === void 0 ? 30 : _ref$heightIcon,
    token0Symbol = _ref.token0Symbol,
    token1Symbol = _ref.token1Symbol,
    isFavorite = _ref.isFavorite,
    handleFavorite = _ref.handleFavorite,
    yourLiquidityTokens = _ref.yourLiquidityTokens,
    yourLiquidity = _ref.yourLiquidity,
    assetsPooled = _ref.assetsPooled,
    yourShare = _ref.yourShare,
    volume7D = _ref.volume7D,
    fees7D = _ref.fees7D,
    yourStaked = _ref.yourStaked,
    stakedPercentage = _ref.stakedPercentage,
    yourAPR = _ref.yourAPR;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  return /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement(PoolItemDetailMobile, {
    closeCallback: closeCallback,
    isOpen: isOpen,
    token0Icon: token0Icon,
    token1Icon: token1Icon,
    widthIcon: widthIcon,
    heightIcon: heightIcon,
    token0Symbol: token0Symbol,
    token1Symbol: token1Symbol,
    isFavorite: isFavorite,
    handleFavorite: handleFavorite,
    yourLiquidityTokens: yourLiquidityTokens,
    yourLiquidity: yourLiquidity,
    assetsPooled: assetsPooled,
    yourShare: yourShare,
    volume7D: volume7D,
    fees7D: fees7D,
    yourStaked: yourStaked,
    stakedPercentage: stakedPercentage,
    yourAPR: yourAPR
  }) : /*#__PURE__*/React.createElement(PoolItemDetailDesktop, {
    closeCallback: closeCallback,
    isOpen: isOpen,
    token0Icon: token0Icon,
    token1Icon: token1Icon,
    widthIcon: widthIcon,
    heightIcon: heightIcon,
    token0Symbol: token0Symbol,
    token1Symbol: token1Symbol,
    isFavorite: isFavorite,
    handleFavorite: handleFavorite,
    yourLiquidityTokens: yourLiquidityTokens,
    yourLiquidity: yourLiquidity,
    assetsPooled: assetsPooled,
    yourShare: yourShare,
    volume7D: volume7D,
    fees7D: fees7D,
    yourStaked: yourStaked,
    stakedPercentage: stakedPercentage,
    yourAPR: yourAPR
  }));
};