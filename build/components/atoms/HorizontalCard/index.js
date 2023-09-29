import React from 'react';
import { TokenInfoWrapper, TokenName, TokenPairsNamesWrapper, Wrapper, Image, PairsLiquidityWrapper, PairLiquidityName, PairLiquidityValue, UserPoolInfoWrapper, UserPoolInfoName, UserPoolInfoValue, ActionsWrapper, DeleteIcon, ShuffleIcon, AddLiquidityIcon, FavoriteIcon, SeeActionsIcon, TokenInfoInnerWrapper, RowWrapper, RowUserPoolInfo, ActionName, ActionItem, ViewIcon, ActionsInnerWrapper, SeeActionsIconWrapper, UserPoolInfoMobileWrapper, PairsLiquidityMobileWrapper, MobilleContainer, MobileRow, MobileTextContent, ImageContainer, AddStakeIcon, UnStakeIcon } from './style';
import { useTheme } from 'styled-components';
import { useDeviceType } from '../../../hooks';
import { DeviceType } from '../../../hooks/types';
import { DollarSign } from "react-feather";

/**
  HorizontalCard Component.
  This component displays information about a token pair with associated liquidity and user pool information.
  It also provides action buttons for removing, swapping, viewing, adding liquidity and favoriting the token pair.
  @param {Object} props - The props object.
  @param {string} props.icon - The icon of the token pair.
  @param {boolean} props.hasFavorite - Boolean to control the display of the FavoriteIcon
  @param {Array<string>} props.tokenPairs - The names of the token pairs. An array of two tokens that make up a pair
  @param {Array<{name: string, value: string}>} props.pairsLiquidity - The liquidity values of the token pairs. An array of objects containing name-value pairs for liquidity information
  @param {Array<string>} props.userPoolInfo - The user pool information. An array of two strings representing user's liquidity and share information
  @param {Function} props.trashHandler - The function to handle remove action.
  @param {Function} props.swapHandler - The function to handle swap action.
  @param {Function} props.viewHandler - The function to handle view action.
  @param {Function} props.itemHandler - The function to handle item click action.
  @param {Function} props.addLiquidityHandler - The function to handle add liquidity action.
  @param {Function} props.favoriteHandler - The function to handle favorite action.
  @param {Function} props.toggleDialog - The function to handle toggle dialog action.
  @param {boolean} props.actionsDialogActive - Boolean to control the display of the ActionsDialog
  @returns {JSX.Element} A React JSX Element that displays the token pair, liquidity and user pool information with associated action buttons.
*/

export var HorizontalCard = function HorizontalCard(_ref) {
  var networkLink = _ref.networkLink,
    contractPackage = _ref.contractPackage,
    firstTokenIcon = _ref.firstTokenIcon,
    secondTokenIcon = _ref.secondTokenIcon,
    tokenPairs = _ref.tokenPairs,
    pairsLiquidity = _ref.pairsLiquidity,
    userPoolInfo = _ref.userPoolInfo,
    hasFavorite = _ref.hasFavorite,
    trashHandler = _ref.trashHandler,
    swapHandler = _ref.swapHandler,
    viewHandler = _ref.viewHandler,
    itemHandler = _ref.itemHandler,
    stakeHandler = _ref.stakeHandler,
    unstakeHandler = _ref.unstakeHandler,
    claimHandlerWETH = _ref.claimHandlerWETH,
    claimHandlerCST = _ref.claimHandlerCST,
    addLiquidityHandler = _ref.addLiquidityHandler,
    favoriteHandler = _ref.favoriteHandler,
    toggleDialog = _ref.toggleDialog,
    actionsDialogActive = _ref.actionsDialogActive,
    _ref$hasBalance = _ref.hasBalance,
    hasBalance = _ref$hasBalance === void 0 ? false : _ref$hasBalance,
    _ref$hasStake = _ref.hasStake,
    hasStake = _ref$hasStake === void 0 ? false : _ref$hasStake,
    _ref$hasGauge = _ref.hasGauge,
    hasGauge = _ref$hasGauge === void 0 ? false : _ref$hasGauge,
    _ref$rewardETHTitle = _ref.rewardETHTitle,
    rewardETHTitle = _ref$rewardETHTitle === void 0 ? 'WETH' : _ref$rewardETHTitle,
    _ref$rewardCSTTitle = _ref.rewardCSTTitle,
    rewardCSTTitle = _ref$rewardCSTTitle === void 0 ? 'CST' : _ref$rewardCSTTitle,
    _ref$hasClaimWETH = _ref.hasClaimWETH,
    hasClaimWETH = _ref$hasClaimWETH === void 0 ? false : _ref$hasClaimWETH,
    _ref$hasClaimCST = _ref.hasClaimCST,
    hasClaimCST = _ref$hasClaimCST === void 0 ? false : _ref$hasClaimCST;
  var theme = useTheme();
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var IDX_LAST_COLUMN_PAIRS_LP = 6;
  var redirectToNetwork = function redirectToNetwork(contractPackage) {
    var link = "".concat(networkLink).concat(contractPackage);
    window.open(link, '_blank');
  };
  var handleItemDetails = function handleItemDetails(e) {
    e.stopPropagation();
    itemHandler && itemHandler();
  };
  var handleSwap = function handleSwap(e) {
    e.stopPropagation();
    swapHandler();
  };
  var handleTrash = function handleTrash(e) {
    e.stopPropagation();
    trashHandler();
  };
  var handleView = function handleView(e) {
    e.stopPropagation();
    viewHandler();
  };
  var handleStake = function handleStake(e) {
    e.stopPropagation();
    if (stakeHandler != undefined) {
      stakeHandler();
    }
  };
  var handleUnstake = function handleUnstake(e) {
    e.stopPropagation();
    if (unstakeHandler != undefined) {
      unstakeHandler();
    }
  };
  var handleClaimWETH = function handleClaimWETH(e) {
    e.stopPropagation();
    if (claimHandlerWETH != undefined) {
      claimHandlerWETH();
    }
  };
  var handleClaimCST = function handleClaimCST(e) {
    e.stopPropagation();
    if (claimHandlerCST != undefined) {
      claimHandlerCST();
    }
  };
  var pairsLiquidityMiddleIndex = Math.floor(pairsLiquidity.length / 2);
  return /*#__PURE__*/React.createElement(Wrapper, {
    onClick: handleItemDetails
  }, /*#__PURE__*/React.createElement(TokenInfoWrapper, null, /*#__PURE__*/React.createElement(TokenInfoInnerWrapper, null, hasFavorite && /*#__PURE__*/React.createElement(FavoriteIcon, {
    color: theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: favoriteHandler
  }), /*#__PURE__*/React.createElement(ImageContainer, null, firstTokenIcon && /*#__PURE__*/React.createElement(Image, {
    src: firstTokenIcon,
    alt: "token"
  }), secondTokenIcon && /*#__PURE__*/React.createElement(Image, {
    src: secondTokenIcon,
    alt: "token"
  })), /*#__PURE__*/React.createElement(TokenPairsNamesWrapper, {
    linkable: true,
    onClick: function onClick() {
      return redirectToNetwork(contractPackage);
    }
  }, tokenPairs && tokenPairs.map(function (name, i) {
    return /*#__PURE__*/React.createElement(TokenName, {
      key: "token-name".concat(name, "-").concat(i)
    }, i !== 0 && "\xA0", name, i !== tokenPairs.length - 1 && ' - ');
  }))), /*#__PURE__*/React.createElement(SeeActionsIconWrapper, {
    hidden: true,
    actionsDialogActive: actionsDialogActive
  }, /*#__PURE__*/React.createElement(SeeActionsIcon, {
    id: "see-actions-icon-mobile-".concat(contractPackage),
    hidden: true,
    color: actionsDialogActive ? theme === null || theme === void 0 ? void 0 : theme.color.white : theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: function onClick() {
      return toggleDialog();
    }
  }))), !isMobile && /*#__PURE__*/React.createElement(RowUserPoolInfo, null, userPoolInfo && userPoolInfo.map(function (info, i) {
    return /*#__PURE__*/React.createElement(UserPoolInfoWrapper, {
      isLiquidity: info.title !== 'Your Share',
      key: "user-pool-info-".concat(info.value, "-").concat(i)
    }, /*#__PURE__*/React.createElement(UserPoolInfoName, null, info.title), /*#__PURE__*/React.createElement(UserPoolInfoValue, null, info.value));
  })), !isMobile && /*#__PURE__*/React.createElement(RowWrapper, null, pairsLiquidity && pairsLiquidity.map(function (pair, i) {
    return /*#__PURE__*/React.createElement(PairsLiquidityWrapper, {
      key: "pairs-liquidity-".concat(pair.name, "-").concat(pair.value, "-").concat(i),
      isLastItem: i == 3 || i == pairsLiquidity.length - 1
    }, /*#__PURE__*/React.createElement(PairLiquidityName, null, pair.name), (pair.name != 'APR' || hasGauge && pair.name == 'APR') && /*#__PURE__*/React.createElement(PairLiquidityValue, null, pair.value), !hasGauge && pair.name == 'APR' && /*#__PURE__*/React.createElement(PairLiquidityValue, null, "N/A"));
  })), isMobile && /*#__PURE__*/React.createElement(MobilleContainer, null, /*#__PURE__*/React.createElement(MobileRow, null, userPoolInfo && userPoolInfo.map(function (info, i) {
    return /*#__PURE__*/React.createElement(UserPoolInfoMobileWrapper, {
      isLiquidity: info.title !== 'Your Share',
      key: "user-pool-mobile-info-".concat(info.value, "-").concat(i)
    }, /*#__PURE__*/React.createElement(MobileTextContent, null, /*#__PURE__*/React.createElement(UserPoolInfoName, null, info.title), /*#__PURE__*/React.createElement(UserPoolInfoValue, null, info.value)));
  })), /*#__PURE__*/React.createElement(MobileRow, null, pairsLiquidity && pairsLiquidity.slice(0, pairsLiquidityMiddleIndex).map(function (pair, i) {
    return /*#__PURE__*/React.createElement(PairsLiquidityMobileWrapper, {
      key: "pairs-mobile-liquidity-".concat(pair.name, "-").concat(pair.value)
    }, /*#__PURE__*/React.createElement(MobileTextContent, null, /*#__PURE__*/React.createElement(PairLiquidityName, null, pair.name), /*#__PURE__*/React.createElement(PairLiquidityValue, null, pair.value)));
  })), /*#__PURE__*/React.createElement(MobileRow, null, pairsLiquidity && pairsLiquidity.slice(pairsLiquidityMiddleIndex, IDX_LAST_COLUMN_PAIRS_LP).map(function (pair, i) {
    return /*#__PURE__*/React.createElement(PairsLiquidityMobileWrapper, {
      key: "pairs-mobile-liquidity-".concat(pair.name, "-").concat(pair.value)
    }, /*#__PURE__*/React.createElement(MobileTextContent, null, /*#__PURE__*/React.createElement(PairLiquidityName, null, pair.name), /*#__PURE__*/React.createElement(PairLiquidityValue, null, pair.value)));
  })), /*#__PURE__*/React.createElement(MobileRow, null, pairsLiquidity && pairsLiquidity.slice(IDX_LAST_COLUMN_PAIRS_LP).map(function (pair, i) {
    return /*#__PURE__*/React.createElement(PairsLiquidityMobileWrapper, {
      key: "pairs-mobile-liquidity-".concat(pair.name, "-").concat(pair.value)
    }, /*#__PURE__*/React.createElement(MobileTextContent, null, /*#__PURE__*/React.createElement(PairLiquidityName, null, pair.name), /*#__PURE__*/React.createElement(PairLiquidityValue, null, pair.value)));
  }))), /*#__PURE__*/React.createElement(SeeActionsIconWrapper, {
    hidden: false,
    actionsDialogActive: actionsDialogActive
  }, /*#__PURE__*/React.createElement(SeeActionsIcon, {
    hidden: false,
    id: "see-actions-icon-desktop-".concat(contractPackage),
    color: actionsDialogActive ? theme === null || theme === void 0 ? void 0 : theme.color.white : theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: function onClick() {
      return toggleDialog();
    }
  })), /*#__PURE__*/React.createElement(ActionsWrapper, {
    actionsDialogActive: actionsDialogActive
  }, /*#__PURE__*/React.createElement(ActionsInnerWrapper, null, /*#__PURE__*/React.createElement(ActionItem, {
    onClick: actionsDialogActive ? addLiquidityHandler : undefined
  }, /*#__PURE__*/React.createElement(AddLiquidityIcon, {
    color: theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: actionsDialogActive ? undefined : addLiquidityHandler
  }), /*#__PURE__*/React.createElement(ActionName, null, "Add")), hasBalance && /*#__PURE__*/React.createElement(ActionItem, {
    onClick: actionsDialogActive ? handleTrash : undefined
  }, /*#__PURE__*/React.createElement(DeleteIcon, {
    color: theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: actionsDialogActive ? undefined : handleTrash
  }), /*#__PURE__*/React.createElement(ActionName, null, "Remove")), /*#__PURE__*/React.createElement(ActionItem, {
    onClick: actionsDialogActive ? handleSwap : undefined
  }, /*#__PURE__*/React.createElement(ShuffleIcon, {
    color: theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: actionsDialogActive ? undefined : handleSwap
  }), /*#__PURE__*/React.createElement(ActionName, null, "Swap")), /*#__PURE__*/React.createElement(ActionItem, {
    hidden: true,
    onClick: actionsDialogActive ? handleView : undefined
  }, /*#__PURE__*/React.createElement(ViewIcon, {
    color: theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: actionsDialogActive ? undefined : handleView
  }), /*#__PURE__*/React.createElement(ActionName, null, "View")), hasGauge && /*#__PURE__*/React.createElement(ActionItem, {
    onClick: actionsDialogActive ? handleStake : undefined
  }, /*#__PURE__*/React.createElement(AddStakeIcon, {
    color: theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: actionsDialogActive ? undefined : handleStake
  }), /*#__PURE__*/React.createElement(ActionName, null, "Stake")), hasStake && /*#__PURE__*/React.createElement(ActionItem, {
    onClick: actionsDialogActive ? handleUnstake : undefined
  }, /*#__PURE__*/React.createElement(UnStakeIcon, {
    color: theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: actionsDialogActive ? undefined : handleUnstake
  }), /*#__PURE__*/React.createElement(ActionName, null, "Unstake")), hasStake && hasClaimWETH && /*#__PURE__*/React.createElement(ActionItem, {
    id: "eth-action-item-desktop-".concat(contractPackage),
    onClick: actionsDialogActive ? handleClaimWETH : undefined
  }, /*#__PURE__*/React.createElement(DollarSign, {
    color: theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: actionsDialogActive ? undefined : handleClaimWETH
  }), /*#__PURE__*/React.createElement(ActionName, null, "Claim ", rewardETHTitle)), hasStake && hasClaimCST && /*#__PURE__*/React.createElement(ActionItem, {
    id: "cst-action-item-desktop-".concat(contractPackage),
    onClick: actionsDialogActive ? handleClaimCST : undefined
  }, /*#__PURE__*/React.createElement(DollarSign, {
    color: theme === null || theme === void 0 ? void 0 : theme.color.modalText,
    size: 20,
    onClick: actionsDialogActive ? undefined : handleClaimWETH
  }), /*#__PURE__*/React.createElement(ActionName, null, "Claim ", rewardCSTTitle)))));
};