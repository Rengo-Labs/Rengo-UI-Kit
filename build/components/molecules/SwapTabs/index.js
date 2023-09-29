import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useLayoutEffect, useState } from 'react';
import { Column, Row, Tabs } from '../../atoms';
import { SwapPrice } from '../SwapPrice';
import { SwapMoreInfo } from '../SwapMoreInfo';
import { Item, TabContent } from './styles';
/**
 * Render a Tabs.
 * @param {any} tokenImg - The image value to display in the img field.
 * @returns  {JSX.Element} The rendered two tabs, the first one with a Price component and the second one with the more info component.
 */

export var SwapTabs = function SwapTabs(_ref) {
  var firstTokenImg = _ref.firstTokenImg,
    secondTokenImg = _ref.secondTokenImg,
    platformGasFee = _ref.platformGasFee,
    slippageTolerance = _ref.slippageTolerance,
    calculateMinimumTokenReceived = _ref.calculateMinimumTokenReceived,
    firstSymbolToken = _ref.firstSymbolToken,
    firstTokenAmount = _ref.firstTokenAmount,
    pairPath = _ref.pairPath,
    secondSymbolToken = _ref.secondSymbolToken,
    secondTokenAmount = _ref.secondTokenAmount,
    priceImpact = _ref.priceImpact,
    priceImpactMessage = _ref.priceImpactMessage,
    networkGasFee = _ref.networkGasFee,
    networkGasFeeSetter = _ref.networkGasFeeSetter,
    slippageSetter = _ref.slippageSetter,
    onClickButton0 = _ref.onClickButton0,
    onClickButton1 = _ref.onClickButton1,
    graphicData = _ref.graphicData,
    todayPrice = _ref.todayPrice,
    yesterdayPrice = _ref.yesterdayPrice,
    xAxisName = _ref.xAxisName,
    chart0Name = _ref.chart0Name,
    chart1Name = _ref.chart1Name,
    charWidth = _ref.charWidth,
    charHeight = _ref.charHeight,
    showChart1 = _ref.showChart1,
    showChart0 = _ref.showChart0,
    _ref$tabDefault = _ref.tabDefault,
    tabDefault = _ref$tabDefault === void 0 ? 1 : _ref$tabDefault,
    _ref$editableSlippage = _ref.editableSlippage,
    editableSlippage = _ref$editableSlippage === void 0 ? true : _ref$editableSlippage;
  var swapPriceTab = /*#__PURE__*/React.createElement(SwapPrice, {
    firstTokenImg: firstTokenImg,
    secondTokenImg: secondTokenImg,
    firstTokenSymbol: firstSymbolToken,
    secondTokenSymbol: secondSymbolToken,
    onClickButton0: onClickButton0,
    onClickButton1: onClickButton1,
    graphicData: graphicData,
    todayPrice: todayPrice,
    yesterdayPrice: yesterdayPrice,
    xAxisName: xAxisName,
    chart0Name: chart0Name,
    chart1Name: chart1Name,
    charWidth: charWidth,
    charHeight: charHeight,
    showChart1: showChart1,
    showChart0: showChart0
  });
  var swapMoreInfoTab = /*#__PURE__*/React.createElement(SwapMoreInfo, {
    platformGasFee: platformGasFee,
    slippageTolerance: slippageTolerance,
    calculateMinimumTokenReceived: calculateMinimumTokenReceived,
    firstSymbolToken: firstSymbolToken,
    firstTokenAmount: firstTokenAmount,
    pairPath: pairPath,
    secondSymbolToken: secondSymbolToken,
    secondTokenAmount: secondTokenAmount,
    networkGasFee: networkGasFee,
    networkGasFeeSetter: networkGasFeeSetter,
    priceImpact: priceImpact,
    priceImpactMessage: priceImpactMessage,
    slippageSetter: slippageSetter,
    editableSlippage: editableSlippage
  });
  var tabsElement = [{
    id: 1,
    text: 'Price',
    isActive: tabDefault === 1 ? true : false,
    component: swapPriceTab
  }, {
    id: 2,
    text: 'More Info',
    isActive: tabDefault === 2 ? true : false,
    component: swapMoreInfoTab
  }];
  var _useState = useState(tabsElement),
    _useState2 = _slicedToArray(_useState, 2),
    tabs = _useState2[0],
    setTabs = _useState2[1];
  useLayoutEffect(function () {
    setTabs(function (prevTabs) {
      return prevTabs.map(function (tab) {
        return _objectSpread(_objectSpread({}, tab), {}, {
          component: tab.id === 1 ? swapPriceTab : swapMoreInfoTab
        });
      });
    });
  }, [firstTokenImg, secondTokenImg, platformGasFee, slippageTolerance, calculateMinimumTokenReceived, firstSymbolToken, firstTokenAmount, pairPath, secondSymbolToken, secondTokenAmount, priceImpact, priceImpactMessage, networkGasFee, networkGasFeeSetter, slippageSetter]);
  var handleTabClick = function handleTabClick(id) {
    var newTabs = tabs.map(function (tab) {
      if (tab.id === id) {
        return _objectSpread(_objectSpread({}, tab), {}, {
          isActive: true
        });
      } else {
        return _objectSpread(_objectSpread({}, tab), {}, {
          isActive: false
        });
      }
    });
    setTabs(newTabs);
  };
  return /*#__PURE__*/React.createElement(Column, {
    props: {
      xs: 12,
      id: 'swap-tabs'
    }
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: tabs,
    onClick: handleTabClick
  })), /*#__PURE__*/React.createElement(TabContent, null, tabs.map(function (tab, index) {
    if (tab.isActive) {
      return /*#__PURE__*/React.createElement(Item, {
        key: tab.id
      }, tab.component);
    }
  })));
};