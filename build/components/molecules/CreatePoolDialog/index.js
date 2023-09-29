import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { BalanceSectionTitle, CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle, InnerContainer, PopularTokens, PopularTokensItem, PopularTokensItemsContainer, SearchInputContainer, SectionTitle, TokenItemContainer, TokenListContainer, TokenNotFoundText, TopSubContainer } from './styles';
import { Dialog } from '../../atoms/Dialog';
import { Icons, Input, TransactionDetails } from '../../atoms';
import { IconSize, Status, Type } from '../../atoms/Input/types';
import { IconSize as transactionDetailsIconSize } from '../../atoms/TransactionDetails/types';
import { Search } from 'react-feather';
import { Distribution } from '../../atoms/TransactionDetails/types';
import { useTheme } from 'styled-components';
import { RowIcon } from '../../atoms/RowIcon';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';

/**
  React component for creating a pool dialog.
  @param {Object} props - The props object.
  @param {Function} props.closeCallback - The callback function to close the dialog.
  @param {Array} props.tokenListData - An array of TokenData objects containing information about the tokens in the pool. This is an array item example { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000' },
  @param {Array} props.popularTokensData - An array of TokenData objects containing information about the popular tokens. The item is similar as the tokenListData item
  @param {function} [props.onSelectToken] - onSelectToken select token.
  @param {function} [props.onSelectFavoriteToken] - onSelectFavoriteToken callback to persist favorite token.
  @returns {JSX.Element} - The create pool dialog component.
*/

export var CreatePoolDialog = function CreatePoolDialog(_ref) {
  var isOpen = _ref.isOpen,
    closeCallback = _ref.closeCallback,
    tokenListData = _ref.tokenListData,
    popularTokensData = _ref.popularTokensData,
    _onSelectToken = _ref.onSelectToken,
    onSelectFavoriteToken = _ref.onSelectFavoriteToken,
    handleViewTokenList = _ref.handleViewTokenList;
  var theme = useTheme();
  var deviceType = useDeviceType();
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    tokenList = _useState2[0],
    setTokenList = _useState2[1];
  var isMobile = deviceType === DeviceType.MOBILE;
  useEffect(function () {
    var newData = structuredClone(tokenListData);
    setTokenList(newData);
  }, [tokenListData]);
  var handlerInput = function handlerInput(value) {
    var filteredTokenList = tokenListData.filter(function (item) {
      var formattedValue = value.toLowerCase();
      var itemNameFormatted = item.name.toLowerCase();
      var itemFullNameFormatted = item.fullName.toLowerCase();
      if (itemNameFormatted.includes(formattedValue) || itemFullNameFormatted.includes(formattedValue)) {
        return item;
      }
    });
    setTokenList(filteredTokenList);
  };
  var handleClose = function handleClose() {
    closeCallback();
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    isOpen: isOpen,
    onClose: function onClose() {
      return handleClose();
    }
  }, /*#__PURE__*/React.createElement(Container, {
    isMobile: isMobile,
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(TopSubContainer, null, /*#__PURE__*/React.createElement(DialogHeaderContainer, null, /*#__PURE__*/React.createElement(DialogHeader, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(DialogTitle, null, "Token List"), /*#__PURE__*/React.createElement(CloseButton, {
    onClick: handleClose
  }, /*#__PURE__*/React.createElement(Icons, {
    name: "X",
    size: 23,
    color: theme.color.modalText
  })))), /*#__PURE__*/React.createElement(InnerContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(SearchInputContainer, null, /*#__PURE__*/React.createElement(Input, {
    placeholder: "",
    helperText: "Something is wrong!",
    type: Type.IconPlain,
    status: Status.Default,
    label: "Label test",
    onChange: handlerInput,
    hasBackground: true,
    Icon: /*#__PURE__*/React.createElement(Search, {
      size: 20,
      color: "#999999"
    }),
    iconSize: IconSize.Small,
    iconWrapperBackground: theme.background.icon
  })), /*#__PURE__*/React.createElement(PopularTokens, null, /*#__PURE__*/React.createElement(SectionTitle, null, "Popular Tokens"), /*#__PURE__*/React.createElement(PopularTokensItemsContainer, null, popularTokensData && popularTokensData.map(function (item, i) {
    return /*#__PURE__*/React.createElement(PopularTokensItem, {
      key: "popular-token-".concat(item.id, "-").concat(item.name)
    }, /*#__PURE__*/React.createElement(RowIcon, {
      tokenName: item.name,
      tokenFullName: item.fullName,
      Icon: item.tokenImg,
      iconSize: 30,
      onSelectToken: function onSelectToken() {
        return _onSelectToken(item.name);
      }
    }));
  }))), /*#__PURE__*/React.createElement(TokenListContainer, null, tokenList && tokenList.length > 0 && /*#__PURE__*/React.createElement(BalanceSectionTitle, null, "Balance"), tokenList && tokenList.length > 0 ? tokenList.map(function (item, i) {
    return /*#__PURE__*/React.createElement(TokenItemContainer, {
      key: "transaction-item-".concat(item.name)
    }, /*#__PURE__*/React.createElement(TransactionDetails, {
      containerWidth: "100%",
      distribution: Distribution.SpaceBetween,
      Icon: item.tokenImg,
      iconSize: transactionDetailsIconSize.Small,
      LeftAdornment: /*#__PURE__*/React.createElement(Icons, {
        name: "Star",
        color: item.isFavorite ? theme.color.primary.dark : theme.background.inactiveLavander,
        size: 24,
        fill: item.isFavorite ? theme.color.primary.dark : theme.background.inactiveLavander
      }),
      LeftAdornmentCallback: function LeftAdornmentCallback() {
        return onSelectFavoriteToken(item.name);
      },
      tokenNames: [item.name],
      tokenFullName: item.fullName,
      amount: item.amount,
      isLast: i === tokenList.length - 1,
      onSelectToken: function onSelectToken() {
        return _onSelectToken(item.name);
      }
    }));
  }) : /*#__PURE__*/React.createElement(TokenNotFoundText, null, "Token not found"))))));
};