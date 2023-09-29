import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { ActionItem, ActionName, ActionsInnerWrapper, ActionsWrapper, AddLiquidityIcon, DeleteIcon, FavoriteIcon, SeeActionsIcon, ViewIcon, SeeActionsIconWrapper, ShuffleIcon, Text, Icon, IconWrapper, TR, TD } from './styles';
import { useTheme } from 'styled-components';
import favoriteIcon from './assets/favorite.svg';
import favoriteIconFill from './assets/favoriteFill.svg';
export var PoolTableItem = function PoolTableItem(_ref) {
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
    actionsDialogActive = _ref.actionsDialogActive,
    _ref$hideRemoveLiquid = _ref.hideRemoveLiquidity,
    hideRemoveLiquidity = _ref$hideRemoveLiquid === void 0 ? false : _ref$hideRemoveLiquid,
    _ref$isLastItem = _ref.isLastItem,
    isLastItem = _ref$isLastItem === void 0 ? false : _ref$isLastItem;
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
  var redirectToNetwork = function redirectToNetwork(hash) {
    var link = "".concat(networkLink).concat(hash);
    window.open(link, '_blank');
  };
  return /*#__PURE__*/React.createElement(TR, null, /*#__PURE__*/React.createElement(TD, {
    isFirstItem: true
  }, /*#__PURE__*/React.createElement(FavoriteIcon, {
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
  })), /*#__PURE__*/React.createElement(Text, {
    linkable: true,
    onClick: function onClick() {
      return redirectToNetwork(contractPackage);
    }
  }, pool)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, yourLiquidity)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, assetsPoolToken0)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, assetsPoolToken1)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, volume7d)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, fees7d)), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, yourShare, " %")), /*#__PURE__*/React.createElement(TD, null, /*#__PURE__*/React.createElement(Text, null, apr, " %")), /*#__PURE__*/React.createElement(TD, {
    isLastItem: isLastItem
  }, /*#__PURE__*/React.createElement(SeeActionsIconWrapper, {
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
  }), /*#__PURE__*/React.createElement(ActionName, null, "Add")), !hideRemoveLiquidity && /*#__PURE__*/React.createElement(ActionItem, {
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
  }), /*#__PURE__*/React.createElement(ActionName, null, "View")))))));
};