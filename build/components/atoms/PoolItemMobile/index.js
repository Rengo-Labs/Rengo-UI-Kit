import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { BTR, FavoriteIcon, HeaderSubtitle, HeaderTitle, Subtitle, SubtitleValue, TD, TH, TR, Table, Title } from './styles';
import { Divider } from '../Divider';
import favoriteIcon from '../PoolTableItem/assets/favorite.svg';
import favoriteIconFill from '../PoolTableItem/assets/favoriteFill.svg';
import { ActionItem, ActionName, ActionsInnerWrapper, ActionsWrapper, AddLiquidityIcon, DeleteIcon, Icon, IconWrapper, SeeActionsIcon, SeeActionsIconWrapper, ShuffleIcon, ViewIcon } from '../PoolTableItem/styles';
import { useTheme } from 'styled-components';
export var PoolItemMobile = function PoolItemMobile(_ref) {
  var networkLink = _ref.networkLink,
    contractPackage = _ref.contractPackage,
    token0Icon = _ref.token0Icon,
    token1Icon = _ref.token1Icon,
    widthIcon = _ref.widthIcon,
    heightIcon = _ref.heightIcon,
    pool = _ref.pool,
    yourLiquidity = _ref.yourLiquidity,
    volume7d = _ref.volume7d,
    fees7d = _ref.fees7d,
    assetsPoolToken0 = _ref.assetsPoolToken0,
    assetsPoolToken1 = _ref.assetsPoolToken1,
    yourShare = _ref.yourShare,
    apr = _ref.apr,
    isFavorite = _ref.isFavorite,
    favoriteHandler = _ref.favoriteHandler,
    handleTrash = _ref.handleTrash,
    handleSwap = _ref.handleSwap,
    handleView = _ref.handleView,
    handleAddLiquidity = _ref.handleAddLiquidity,
    toggleDialog = _ref.toggleDialog,
    actionsDialogActive = _ref.actionsDialogActive;
  var theme = useTheme();
  var _useState = useState(theme),
    _useState2 = _slicedToArray(_useState, 2),
    currentTheme = _useState2[0],
    setCurrentTheme = _useState2[1];
  useEffect(function () {
    setCurrentTheme(theme);
    return function () {
      setCurrentTheme(theme);
    };
  }, [theme]);
  var redirectToNetwork = function redirectToNetwork(contractPackage) {
    var link = "".concat(networkLink).concat(contractPackage);
    window.open(link, '_blank');
  };
  return /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(TR, null, /*#__PURE__*/React.createElement(TH, null, /*#__PURE__*/React.createElement(HeaderTitle, null, /*#__PURE__*/React.createElement(FavoriteIcon, {
    src: isFavorite ? favoriteIconFill : favoriteIcon,
    width: 20,
    height: 20,
    onClick: favoriteHandler
  }), /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(Icon, {
    src: token0Icon,
    alt: pool,
    width: widthIcon,
    height: heightIcon
  }), /*#__PURE__*/React.createElement(Icon, {
    src: token1Icon,
    alt: pool,
    width: widthIcon,
    height: heightIcon
  })), /*#__PURE__*/React.createElement(Title, {
    linkable: true,
    onClick: function onClick() {
      return redirectToNetwork(contractPackage);
    }
  }, pool))), /*#__PURE__*/React.createElement(TH, null, /*#__PURE__*/React.createElement(SeeActionsIconWrapper, {
    actionsDialogActive: actionsDialogActive
  }, /*#__PURE__*/React.createElement(SeeActionsIcon, {
    color: actionsDialogActive ? currentTheme === null || currentTheme === void 0 ? void 0 : currentTheme.color.white : currentTheme === null || currentTheme === void 0 ? void 0 : currentTheme.color.modalText,
    size: 20,
    onClick: toggleDialog
  }), /*#__PURE__*/React.createElement(ActionsWrapper, {
    actionsDialogActive: actionsDialogActive
  }, /*#__PURE__*/React.createElement(ActionsInnerWrapper, null, /*#__PURE__*/React.createElement(ActionItem, {
    onClick: actionsDialogActive ? handleAddLiquidity : undefined
  }, /*#__PURE__*/React.createElement(AddLiquidityIcon, {
    color: currentTheme === null || currentTheme === void 0 ? void 0 : currentTheme.color.modalText,
    size: 20
  }), /*#__PURE__*/React.createElement(ActionName, null, "Add")), /*#__PURE__*/React.createElement(ActionItem, {
    onClick: actionsDialogActive ? handleTrash : undefined
  }, /*#__PURE__*/React.createElement(DeleteIcon, {
    color: currentTheme === null || currentTheme === void 0 ? void 0 : currentTheme.color.modalText,
    size: 20
  }), /*#__PURE__*/React.createElement(ActionName, null, "Remove")), /*#__PURE__*/React.createElement(ActionItem, {
    onClick: actionsDialogActive ? handleSwap : undefined
  }, /*#__PURE__*/React.createElement(ShuffleIcon, {
    color: currentTheme === null || currentTheme === void 0 ? void 0 : currentTheme.color.modalText,
    size: 20
  }), /*#__PURE__*/React.createElement(ActionName, null, "Swap")), /*#__PURE__*/React.createElement(ActionItem, {
    onClick: actionsDialogActive ? handleView : undefined
  }, /*#__PURE__*/React.createElement(ViewIcon, {
    color: currentTheme === null || currentTheme === void 0 ? void 0 : currentTheme.color.modalText,
    size: 20
  }), /*#__PURE__*/React.createElement(ActionName, null, "View")))))))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(BTR, null, /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "Liquidity"), /*#__PURE__*/React.createElement(SubtitleValue, null, yourLiquidity))), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "Your share"), /*#__PURE__*/React.createElement(SubtitleValue, null, yourShare, " %")))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(BTR, null, /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "Asset 1"), /*#__PURE__*/React.createElement(SubtitleValue, null, assetsPoolToken0))), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "Asset 2"), /*#__PURE__*/React.createElement(SubtitleValue, null, assetsPoolToken1)))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(BTR, null, /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "Volume 7D"), /*#__PURE__*/React.createElement(SubtitleValue, null, volume7d))), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "Fees 7D"), /*#__PURE__*/React.createElement(SubtitleValue, null, fees7d)))), /*#__PURE__*/React.createElement(BTR, null, /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(HeaderSubtitle, null, /*#__PURE__*/React.createElement(Subtitle, null, "APR"), /*#__PURE__*/React.createElement(SubtitleValue, null, apr, " %"))), /*#__PURE__*/React.createElement(TD, null))));
};