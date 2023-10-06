import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useLayoutEffect, useState } from 'react';
import { Column, Row, Tabs } from '../../atoms';
import { Item, TabContent } from './styles';
import { AccountDeployTable } from '../AccountDeployTable';
import { AccountTransferTable } from '../AccountTransferTable';
/**
 * Render a Tabs.
 * @param {any} tabDefault - The default tab to show.
 * @param {IDeployHeader[]} deployData - The data to show in the deploy table.
 * @param {ITransferHeader[]} transferData - The data to show in the transfer table.
 * @param {number} widthIcon - The width of the icon.
 * @param {number} heightIcon - The height of the icon.
 * @returns  {JSX.Element} The rendered two tabs, the first one with a deploy table and the second one with a transfer table.
 */

export var AccountTabs = function AccountTabs(_ref) {
  var _ref$tabDefault = _ref.tabDefault,
    tabDefault = _ref$tabDefault === void 0 ? 1 : _ref$tabDefault,
    deployData = _ref.deployData,
    transferData = _ref.transferData,
    _ref$widthIcon = _ref.widthIcon,
    widthIcon = _ref$widthIcon === void 0 ? 30 : _ref$widthIcon,
    _ref$heightIcon = _ref.heightIcon,
    heightIcon = _ref$heightIcon === void 0 ? 30 : _ref$heightIcon;
  var deployTable = /*#__PURE__*/React.createElement(AccountDeployTable, {
    data: deployData,
    widthIcon: widthIcon,
    heightIcon: heightIcon
  });
  var transferTable = /*#__PURE__*/React.createElement(AccountTransferTable, {
    data: transferData,
    widthIcon: widthIcon,
    heightIcon: heightIcon
  });
  var tabsElement = [{
    id: 1,
    text: 'Deploy',
    isActive: tabDefault === 1,
    component: deployTable
  }, {
    id: 2,
    text: 'Transfer',
    isActive: tabDefault === 2,
    component: transferTable
  }];
  var _useState = useState(tabsElement),
    _useState2 = _slicedToArray(_useState, 2),
    tabs = _useState2[0],
    setTabs = _useState2[1];
  useLayoutEffect(function () {
    setTabs(function (prevTabs) {
      return prevTabs.map(function (tab) {
        return _objectSpread(_objectSpread({}, tab), {}, {
          component: tab.id === 1 ? deployTable : transferTable
        });
      });
    });
  }, []);
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
      id: 'account-tabs'
    }
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: tabs,
    onClick: handleTabClick
  })), /*#__PURE__*/React.createElement(TabContent, null, tabs.map(function (tab) {
    if (tab.isActive) {
      return /*#__PURE__*/React.createElement(Item, {
        key: tab.id
      }, tab.component);
    }
  })));
};