import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import TableHeader from '../../atoms/TableHeader';
import { Body, Wrapper } from './styles';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';
import { AccountTransferBody } from '../../atoms';
import { AccountTransferMobile } from '../AccountTransferMobile';
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
  key: 'of',
  name: 'Of',
  isSorteable: true
}, {
  key: 'for',
  name: 'For',
  isSorteable: true
}, {
  key: 'transference_id',
  name: 'Transference ID',
  isSorteable: true
}, {
  key: 'amount',
  name: 'Amount',
  isSorteable: true
}];

/**
 * Renders a table with the data of the transfer
 * @param {ITransferHeader[]} data - Data to be displayed in the table
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Table with the data of the transfer
 */

export var AccountTransferTable = function AccountTransferTable(_ref) {
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
    onSort: handleSort,
    isCenterHeader: true
  }), /*#__PURE__*/React.createElement(Body, null, deployData === null || deployData === void 0 ? void 0 : deployData.map(function (row) {
    return isMobile ? /*#__PURE__*/React.createElement(AccountTransferMobile, {
      deploy_hash: row.deploy_hash,
      block_hash: row.block_hash,
      antiquity: row.antiquity,
      of: row.of,
      forValue: row.for,
      transference_id: row.transference_id,
      amount: row.amount,
      price: row.price,
      widthIcon: widthIcon,
      heightIcon: heightIcon,
      key: "account-transfer-mobile-".concat(row.id),
      handleCopy: row.handleCopy
    }) : /*#__PURE__*/React.createElement(AccountTransferBody, {
      deploy_hash: row.deploy_hash,
      block_hash: row.block_hash,
      antiquity: row.antiquity,
      of: row.of,
      forValue: row.for,
      transference_id: row.transference_id,
      amount: row.amount,
      price: row.price,
      widthIcon: widthIcon,
      heightIcon: heightIcon,
      key: "account-transfer-desktop-".concat(row.id)
    });
  })));
};