import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import TableHeader from '../../atoms/TableHeader';
import { Body, Wrapper } from './styles';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';
import { BalanceMobileItem, TableBalanceBody } from '../../atoms';
var columns = [{
  key: 'crypto',
  name: 'Crypto',
  isSorteable: true
}, {
  key: 'marketprice',
  name: 'Market Price($)',
  isSorteable: true
}, {
  key: 'mybalance',
  name: 'Your Balance($)',
  isSorteable: true
}, {
  key: 'mypools',
  name: 'Your Pooled($)',
  isSorteable: true
}, {
  key: 'mycrypto',
  name: 'My Crypto',
  isSorteable: true
}, {
  key: '24h',
  name: '24 H',
  isSorteable: true
}, {
  key: '7d',
  name: '7 D',
  isSorteable: true
}, {
  key: '15d',
  name: '15 D',
  isSorteable: true
}, {
  key: '30d',
  name: '30 D',
  isSorteable: true
}];
export var BalanceTable = function BalanceTable(_ref) {
  var networkLink = _ref.networkLink,
    data = _ref.data,
    _ref$widthIcon = _ref.widthIcon,
    widthIcon = _ref$widthIcon === void 0 ? 30 : _ref$widthIcon,
    _ref$heightIcon = _ref.heightIcon,
    heightIcon = _ref$heightIcon === void 0 ? 30 : _ref$heightIcon;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    balanceData = _useState2[0],
    setBalanceData = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    cryptoColumnWidth = _useState4[0],
    setCryptoColumnWidth = _useState4[1];
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var HeadTRRef = useRef(null);
  useEffect(function () {
    var handleResize = function handleResize() {
      if (!HeadTRRef.current) {
        return;
      }
      var gridStyle = getComputedStyle(HeadTRRef.current);
      var gridColumnTemplate = gridStyle.gridTemplateColumns;
      var columnWidths = gridColumnTemplate.split(' ');
      setCryptoColumnWidth(columnWidths);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(function () {
    setBalanceData(data);
  }, [data]);
  var handleSort = function handleSort(key, isAscending) {
    var sortedData = _toConsumableArray(balanceData).sort(function (a, b) {
      var sortMultiplier = isAscending ? 1 : -1;
      return a[key] > b[key] ? sortMultiplier : -sortMultiplier;
    });
    setBalanceData(sortedData);
  };
  return /*#__PURE__*/React.createElement(Wrapper, {
    isMobile: isMobile
  }, !isMobile && /*#__PURE__*/React.createElement(TableHeader, {
    columns: columns,
    onSort: handleSort,
    HeadTRRef: HeadTRRef,
    centerItems: true
  }), /*#__PURE__*/React.createElement(Body, null, balanceData.map(function (row, idx) {
    return isMobile ? /*#__PURE__*/React.createElement(BalanceMobileItem, {
      networkLink: networkLink,
      key: row.id,
      row: row,
      widthIcon: widthIcon,
      heightIcon: heightIcon
    }) : /*#__PURE__*/React.createElement(TableBalanceBody, {
      key: "table-bTr-".concat(idx),
      networkLink: networkLink,
      row: row,
      widthIcon: widthIcon,
      heightIcon: heightIcon,
      cryptoColumnWidth: cryptoColumnWidth
    });
  })));
};