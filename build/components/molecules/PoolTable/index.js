import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useEffect, useRef, useState } from 'react';
import TableHeader from '../../atoms/TableHeader';
import { Body, Wrapper } from './styles';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';
import { PoolItemMobile, PoolTableItem } from '../../atoms';
var columns = [{
  key: 'pool',
  name: 'Pool',
  isSorteable: true,
  width: '30%'
}, {
  key: 'yourLiquidity',
  name: 'Liquidity',
  isSorteable: true
}, {
  key: 'assetsPoolToken0',
  name: 'Asset 1',
  isSorteable: true
}, {
  key: 'assetsPoolToken1',
  name: 'Asset 2',
  isSorteable: true
}, {
  key: 'volume7d',
  name: 'Volume 7D',
  isSorteable: true
}, {
  key: 'fees7d',
  name: 'Fees 7D',
  isSorteable: true
}, {
  key: 'yourShare',
  name: 'Your Share',
  isSorteable: true
}, {
  key: 'apr',
  name: 'APR',
  isSorteable: true
}, {
  key: 'actions',
  name: 'Actions',
  isSorteable: false
}];
var NOT_SEARCHABLE_KEYS = ['token1Icon', 'token0Icon'];
export var PoolTable = function PoolTable(_ref) {
  var networkLink = _ref.networkLink,
    data = _ref.data,
    _ref$widthIcon = _ref.widthIcon,
    widthIcon = _ref$widthIcon === void 0 ? 30 : _ref$widthIcon,
    _ref$heightIcon = _ref.heightIcon,
    heightIcon = _ref$heightIcon === void 0 ? 30 : _ref$heightIcon,
    _handleAddLiquidity = _ref.handleAddLiquidity,
    _handleSwap = _ref.handleSwap,
    _handleTrash = _ref.handleTrash,
    _handleView = _ref.handleView,
    handleFavorite = _ref.handleFavorite,
    _ref$query = _ref.query,
    query = _ref$query === void 0 ? '' : _ref$query,
    showStakedOnly = _ref.showStakedOnly;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    balanceData = _useState2[0],
    setBalanceData = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    actionsDialogActive = _useState4[0],
    setActionsDialogActive = _useState4[1];
  var cryptoColumnRef = useRef(null);
  var deviceType = useDeviceType();
  var tableRef = useRef(null);
  var isMobile = deviceType === DeviceType.MOBILE;
  useEffect(function () {
    var initialSortedData = handleSort('pool', true, data);
    setBalanceData(initialSortedData);
  }, [data]);
  var _toggleDialog = function toggleDialog(name) {
    setActionsDialogActive(function (prev) {
      return prev === name ? null : name;
    });
  };
  var handleSort = function handleSort(key, isAscending, initialSort) {
    var EXCLUDED_KEYS = ['yourShare', 'actions', 'pool'];
    var originalData = initialSort && (initialSort === null || initialSort === void 0 ? void 0 : initialSort.length) > 0 ? initialSort : balanceData;
    var sortedData = originalData === null || originalData === void 0 ? void 0 : originalData.sort(function (a, b) {
      if (a.isFavorite && !b.isFavorite) {
        return -1;
      }
      if (!a.isFavorite && b.isFavorite) {
        return 1;
      }
      var sortMultiplier = isAscending ? 1 : -1;
      var propA = !EXCLUDED_KEYS.includes(key) ? parseFloat(a[key].replace(/[$,]/g, '')) : a[key];
      var propB = !EXCLUDED_KEYS.includes(key) ? parseFloat(b[key].replace(/[$,]/g, '')) : b[key];
      if (propA !== undefined && propB !== undefined) {
        return propA > propB ? sortMultiplier : -sortMultiplier;
      }
      return 0;
    });
    if (initialSort && (initialSort === null || initialSort === void 0 ? void 0 : initialSort.length) > 0) {
      return sortedData;
    } else {
      setBalanceData(sortedData);
    }
  };
  var _favoriteHandler = function favoriteHandler(name) {
    var updatedData = balanceData === null || balanceData === void 0 ? void 0 : balanceData.map(function (row) {
      if (row.name === name) {
        return _objectSpread(_objectSpread({}, row), {}, {
          isFavorite: !row.isFavorite
        });
      }
      return row;
    });
    setBalanceData(updatedData);
    handleFavorite(name);
  };
  var excludeKeys = function excludeKeys(targetObj, keys) {
    var newObj = _objectSpread({}, targetObj);
    keys.forEach(function (item) {
      delete newObj[item];
    });
    return newObj;
  };
  var search = function search(query) {
    if (query) {
      var newData = data.filter(function (item) {
        var newObj = excludeKeys(item, NOT_SEARCHABLE_KEYS);
        var valuesArr = Object.values(newObj);
        var exists = valuesArr.some(function (item) {
          if (typeof item !== "string") {
            return false;
          }
          return item.toLowerCase().includes(query.toLowerCase());
        });
        if (exists) {
          return item;
        }
      });
      return newData;
    } else {
      return data;
    }
  };
  var getStakedData = function getStakedData() {
    return data.filter(function (item) {
      if (parseFloat(item.balance) > 0) {
        return item;
      }
    });
  };
  useEffect(function () {
    var newBalanceData = search(query);
    setBalanceData(newBalanceData);
  }, [query]);
  useEffect(function () {
    if (showStakedOnly) {
      var newData = getStakedData();
      setBalanceData(newData);
    } else {
      setBalanceData(data);
    }
  }, [showStakedOnly]);
  return /*#__PURE__*/React.createElement(Wrapper, {
    isMobile: isMobile,
    ref: tableRef
  }, !isMobile && /*#__PURE__*/React.createElement(TableHeader, {
    columns: columns,
    onSort: handleSort
  }), /*#__PURE__*/React.createElement(Body, {
    isMobile: isMobile
  }, balanceData && (balanceData === null || balanceData === void 0 ? void 0 : balanceData.length) > 0 ? balanceData === null || balanceData === void 0 ? void 0 : balanceData.map(function (row, i) {
    return isMobile ? /*#__PURE__*/React.createElement(PoolItemMobile, {
      networkLink: networkLink,
      contractPackage: row.contractPackage,
      key: "pool-item-".concat(row.pool, "-mobile"),
      token0Icon: row.token0Icon,
      token1Icon: row.token1Icon,
      widthIcon: widthIcon,
      heightIcon: heightIcon,
      pool: row.pool,
      yourLiquidity: row.yourLiquidity,
      volume7d: row.volume7d,
      fees7d: row.fees7d,
      assetsPoolToken0: row.assetsPoolToken0,
      assetsPoolToken1: row.assetsPoolToken1,
      yourShare: row.yourShare,
      apr: row.apr,
      handleTrash: function handleTrash() {
        return _handleTrash(row.name);
      },
      handleSwap: function handleSwap() {
        return _handleSwap('/swap', row.pool);
      },
      handleView: function handleView() {
        return _handleView(row.name);
      },
      handleAddLiquidity: function handleAddLiquidity() {
        return _handleAddLiquidity('/liquidity', row.pool);
      },
      favoriteHandler: function favoriteHandler() {
        return _favoriteHandler(row.name);
      },
      isFavorite: row.isFavorite,
      toggleDialog: function toggleDialog() {
        return _toggleDialog(row.name);
      },
      actionsDialogActive: actionsDialogActive === row.name,
      hideRemoveLiquidity: Number(row.balance) >= 0
    }) : /*#__PURE__*/React.createElement(PoolTableItem, {
      networkLink: networkLink,
      contractPackage: row.contractPackage,
      key: "pool-item-".concat(row.pool, "-desktop"),
      token0Icon: row.token0Icon,
      token1Icon: row.token1Icon,
      widthIcon: widthIcon,
      heightIcon: heightIcon,
      pool: row.pool,
      yourLiquidity: row.yourLiquidity,
      volume7d: row.volume7d,
      fees7d: row.fees7d,
      assetsPoolToken0: row.assetsPoolToken0,
      assetsPoolToken1: row.assetsPoolToken1,
      yourShare: row.yourShare,
      apr: row.apr,
      handleTrash: function handleTrash() {
        return _handleTrash(row.name);
      },
      handleSwap: function handleSwap() {
        return _handleSwap('/swap', row.pool);
      },
      handleView: function handleView() {
        return _handleView(row.name);
      },
      handleAddLiquidity: function handleAddLiquidity() {
        return _handleAddLiquidity('/liquidity', row.pool);
      },
      favoriteHandler: function favoriteHandler() {
        return _favoriteHandler(row.name);
      },
      isFavorite: row.isFavorite,
      toggleDialog: function toggleDialog() {
        return _toggleDialog(row.name);
      },
      actionsDialogActive: actionsDialogActive === row.name,
      hideRemoveLiquidity: Number(row.balance) === 0
    });
  }) : null));
};