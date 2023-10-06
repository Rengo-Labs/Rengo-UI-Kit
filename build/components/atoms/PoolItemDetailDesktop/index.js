import React from 'react';
import { Dialog, Icons } from '../../atoms';
import { CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle, FavoriteIcon, Icon, IconWrapper, InnerContainer, PoolKey, PoolKeyPairContainer, PoolText, PoolValue, TokenPairWrapper } from './styles';
import { useTheme } from 'styled-components';
import favoriteIcon from '../PoolTableItem/assets/favorite.svg';
import favoriteIconFill from '../PoolTableItem/assets/favoriteFill.svg';
export var PoolItemDetailDesktop = function PoolItemDetailDesktop(_ref) {
  var closeCallback = _ref.closeCallback,
    isOpen = _ref.isOpen,
    token0Icon = _ref.token0Icon,
    token1Icon = _ref.token1Icon,
    widthIcon = _ref.widthIcon,
    heightIcon = _ref.heightIcon,
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
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(React.Fragment, null, isOpen && /*#__PURE__*/React.createElement(Dialog, {
    onClose: closeCallback,
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(DialogHeaderContainer, null, /*#__PURE__*/React.createElement(DialogHeader, null, /*#__PURE__*/React.createElement(DialogTitle, null, "View all info"), /*#__PURE__*/React.createElement(CloseButton, {
    onClick: closeCallback
  }, /*#__PURE__*/React.createElement(Icons, {
    name: "X",
    size: 23,
    color: theme.color.modalText
  })))), /*#__PURE__*/React.createElement(InnerContainer, null, /*#__PURE__*/React.createElement(TokenPairWrapper, null, /*#__PURE__*/React.createElement(FavoriteIcon, {
    src: isFavorite ? favoriteIconFill : favoriteIcon,
    width: 20,
    height: 20,
    onClick: handleFavorite
  }), /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(Icon, {
    src: token0Icon,
    alt: token0Symbol,
    width: widthIcon,
    height: heightIcon
  }), /*#__PURE__*/React.createElement(Icon, {
    src: token1Icon,
    alt: token1Symbol,
    width: widthIcon,
    height: heightIcon
  })), /*#__PURE__*/React.createElement(PoolText, null, token0Symbol, " - ", token1Symbol)), /*#__PURE__*/React.createElement(PoolKeyPairContainer, null, /*#__PURE__*/React.createElement(PoolKey, null, "Your Liquidity"), /*#__PURE__*/React.createElement(PoolValue, null, yourLiquidity)), /*#__PURE__*/React.createElement(PoolKeyPairContainer, null, /*#__PURE__*/React.createElement(PoolKey, null, "Your Liquidity Tokens"), /*#__PURE__*/React.createElement(PoolValue, null, yourLiquidityTokens)), /*#__PURE__*/React.createElement(PoolKeyPairContainer, null, /*#__PURE__*/React.createElement(PoolKey, null, "Your Assets"), /*#__PURE__*/React.createElement(PoolValue, null, assetsPooled.asset0), /*#__PURE__*/React.createElement(PoolValue, null, assetsPooled.asset1)), /*#__PURE__*/React.createElement(PoolKeyPairContainer, null, /*#__PURE__*/React.createElement(PoolKey, null, "Your Share"), /*#__PURE__*/React.createElement(PoolValue, null, yourShare, "%")), /*#__PURE__*/React.createElement(PoolKeyPairContainer, null, /*#__PURE__*/React.createElement(PoolKey, null, "Volume 7D"), /*#__PURE__*/React.createElement(PoolValue, null, volume7D)), /*#__PURE__*/React.createElement(PoolKeyPairContainer, null, /*#__PURE__*/React.createElement(PoolKey, null, "FEES 7D"), /*#__PURE__*/React.createElement(PoolValue, null, fees7D)), /*#__PURE__*/React.createElement(PoolKeyPairContainer, null, /*#__PURE__*/React.createElement(PoolKey, null, "Your APR"), /*#__PURE__*/React.createElement(PoolValue, null, yourAPR)), /*#__PURE__*/React.createElement(PoolKeyPairContainer, null, /*#__PURE__*/React.createElement(PoolKey, null, "Your Staked"), /*#__PURE__*/React.createElement(PoolValue, null, yourStaked)), /*#__PURE__*/React.createElement(PoolKeyPairContainer, null, /*#__PURE__*/React.createElement(PoolKey, null, "Staked %"), /*#__PURE__*/React.createElement(PoolValue, null, stakedPercentage))))));
};