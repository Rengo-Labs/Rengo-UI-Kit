import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import TableHeader from '../../atoms/TableHeader';
import { Body, Wrapper } from './styles';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';
import { AccountDeployBody } from '../../atoms';
import { AccountDeployMobile } from '../AccountDeployMobile';
var columns = [{
  key: 'deploy_hash',
  name: 'Deploy Hash',
  isSorteable: true
}, {
  key: 'block_hash',
  name: 'Block Hash',
  isSorteable: true
}, {
  key: 'antiquity',
  name: 'Antiquity',
  isSorteable: true
}, {
  key: 'contract',
  name: 'Contract',
  isSorteable: true
}, {
  key: 'amount',
  name: 'Amount',
  isSorteable: true
}, {
  key: 'cost',
  name: 'Cost',
  isSorteable: true
}];

/**
 * Renders a table with the data of the deploy
 * @param {IDeployHeader[]} data - Data to be displayed in the table
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Table with the data of the deploy
 */

export var AccountDeployTable = function AccountDeployTable(_ref) {
  var _cryptoColumnRef$curr;
  var data = _ref.data,
    widthIcon = _ref.widthIcon,
    heightIcon = _ref.heightIcon;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    deployData = _useState2[0],
    setDeployData = _useState2[1];
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var cryptoColumnRef = useRef(null);
  var cryptoColumnWidth = ((_cryptoColumnRef$curr = cryptoColumnRef.current) === null || _cryptoColumnRef$curr === void 0 ? void 0 : _cryptoColumnRef$curr.clientWidth) || 0;
  useEffect(function () {
    setDeployData(data);
  }, [data]);
  var handleSort = function handleSort(key, isAscending) {
    var sortedData = _toConsumableArray(deployData).sort(function (a, b) {
      var sortMultiplier = isAscending ? 1 : -1;
      return a[key] > b[key] ? sortMultiplier : -sortMultiplier;
    });
    setDeployData(sortedData);
  };
  return /*#__PURE__*/React.createElement(Wrapper, {
    isMobile: isMobile
  }, !isMobile && /*#__PURE__*/React.createElement(TableHeader, {
    columns: columns,
    onSort: handleSort
  }), /*#__PURE__*/React.createElement(Body, null, deployData === null || deployData === void 0 ? void 0 : deployData.map(function (row) {
    return isMobile ? /*#__PURE__*/React.createElement(AccountDeployMobile, {
      deploy_hash: row.deploy_hash,
      block_hash: row.block_hash,
      antiquity: row.antiquity,
      contract: row.contract,
      contractRedirect: row.contractRedirect,
      entry_point: row.entry_point,
      amount: row.amount,
      amountSymbol: row.amountSymbol,
      cost: row.cost,
      price: row.price,
      widthIcon: widthIcon,
      heightIcon: heightIcon,
      key: "account-deploy-mobile-".concat(row.id),
      handleCopy: row.handleCopy,
      errorMessage: row.errorMessage
    }) : /*#__PURE__*/React.createElement(AccountDeployBody, {
      deploy_hash: row.deploy_hash,
      block_hash: row.block_hash,
      antiquity: row.antiquity,
      contract: row.contract,
      contractRedirect: row.contractRedirect,
      entry_point: row.entry_point,
      amount: row.amount,
      amountSymbol: row.amountSymbol,
      cost: row.cost,
      price: row.price,
      widthIcon: widthIcon,
      heightIcon: heightIcon,
      key: "account-deploy-desktop-".concat(row.id),
      errorMessage: row.errorMessage
    });
  })));
};