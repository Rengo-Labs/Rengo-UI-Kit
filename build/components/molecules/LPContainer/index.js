import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { LiquidityWrapped, LiquidityTitle, TitleWrapped } from './styles';
import { LPOptionType } from './types';
import { HorizontalCard, Toggle } from '../../atoms';
import { Variant } from '../../atoms/Toggle/types';
/***
 *
 * @param startIcon - it shows the selected token icon currently
 * @param endIcon - it shows the arrow icon to show a token list to be selected
 * @param iconSize
 * @param tokenBalance - it's the total balance of the selected token.
 * @param tokenName - it's the token name of the selected token.
 * @param tokenPrice - it's the token price expressed in usd.
 * @param placeholder - it's the label value which is shown in the input
 * @param onChangeToken - Token selector's listener
 * @param onChangeValue - Card value's listener
 * @param validator - it's a validator of this token input
 * @param value - value which will be loaded in the card input
 * @constructor
 */
export var LPContainer = function LPContainer(_ref) {
  var networkLink = _ref.networkLink,
    title = _ref.title,
    _ref$lpTokens = _ref.lpTokens,
    lpTokens = _ref$lpTokens === void 0 ? [] : _ref$lpTokens,
    _ref$toggleActive = _ref.toggleActive,
    toggleActive = _ref$toggleActive === void 0 ? false : _ref$toggleActive,
    _ref$toggleAction = _ref.toggleAction,
    toggleAction = _ref$toggleAction === void 0 ? function () {} : _ref$toggleAction;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    actionsDialogActive = _useState2[0],
    setActionsDialogActive = _useState2[1];
  var _toggleDialog = function toggleDialog(name) {
    setActionsDialogActive(function (prev) {
      return prev === name ? null : name;
    });
  };
  return /*#__PURE__*/React.createElement(LiquidityWrapped, null, /*#__PURE__*/React.createElement(TitleWrapped, null, /*#__PURE__*/React.createElement(LiquidityTitle, null, title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toggle, {
    variant: Variant.InvertedColors,
    labelText: "Staked",
    isActive: toggleActive,
    toggle: function toggle() {
      return toggleAction();
    }
  }))), lpTokens.length > 0 && lpTokens.map(function (item, index) {
    return /*#__PURE__*/React.createElement(HorizontalCard, {
      networkLink: networkLink,
      contractPackage: item.contractPackage,
      key: "lp-token-".concat(index, "-card-").concat(item.firstSymbol, "-").concat(item.secondSymbol),
      firstTokenIcon: item.firstTokenIcon,
      secondTokenIcon: item.secondTokenIcon,
      hasFavorite: item.isFavorite,
      tokenPairs: [item.firstSymbol, item.secondSymbol],
      pairsLiquidity: [{
        name: "Your Pooled (".concat(item.firstSymbol, ")"),
        value: "".concat(item.firstAmount)
      }, {
        name: "Your Pooled (".concat(item.secondSymbol, ")"),
        value: "".concat(item.secondAmount)
      }, {
        name: "Your Balance (".concat(item.firstSymbol, "-").concat(item.secondSymbol, ")"),
        value: "".concat(item.userLP)
      }, {
        name: "Your Share",
        value: "".concat(item.yourShare)
      }, {
        name: "LP Stake",
        value: "".concat(item.lpStaked)
      }, {
        name: "APR",
        value: "".concat(item.apr)
      }],
      userPoolInfo: [{
        title: "Total Liquidity ($)",
        value: "".concat(item.totalUSDLP)
      }, {
        title: "Your Liquidity ($)",
        value: "".concat(item.userUSDLP)
      }],
      trashHandler: function trashHandler() {
        return item.onOptionClick(LPOptionType.DELETE, item.firstSymbol, item.secondSymbol);
      },
      swapHandler: function swapHandler() {
        return item.onOptionClick(LPOptionType.SWAP, item.firstSymbol, item.secondSymbol);
      },
      viewHandler: function viewHandler() {
        return item.onOptionClick(LPOptionType.VIEW, item.firstSymbol, item.secondSymbol);
      },
      stakeHandler: function stakeHandler() {
        return item.onOptionClick(LPOptionType.STAKE, item.firstSymbol, item.secondSymbol);
      },
      unstakeHandler: function unstakeHandler() {
        return item.onOptionClick(LPOptionType.UNSTAKE, item.firstSymbol, item.secondSymbol);
      },
      claimHandlerWETH: function claimHandlerWETH() {
        return item.onOptionClick(LPOptionType.CLAIM, item.firstSymbol, item.secondSymbol);
      },
      claimHandlerCST: function claimHandlerCST() {
        return item.onOptionClick(LPOptionType.CLAIMCST, item.firstSymbol, item.secondSymbol);
      },
      hasBalance: item.hasBalance,
      hasStake: item.hasStake,
      hasGauge: item.hasGauge,
      rewardETHTitle: item.rewardETHTitle,
      rewardCSTTitle: item.rewardCSTTitle,
      hasClaimWETH: item.hasClaimWETH,
      hasClaimCST: item.hasClaimCST,
      addLiquidityHandler: function addLiquidityHandler() {
        return item.onOptionClick(LPOptionType.ADD_LIQUIDITY, item.firstSymbol, item.secondSymbol);
      },
      favoriteHandler: function favoriteHandler() {},
      toggleDialog: function toggleDialog() {
        return _toggleDialog("".concat(item.firstSymbol, "-").concat(item.secondSymbol));
      },
      actionsDialogActive: actionsDialogActive === "".concat(item.firstSymbol, "-").concat(item.secondSymbol)
    });
  }));
};