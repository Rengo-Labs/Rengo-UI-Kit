import React from 'react';
import { TD, TR, Text, Icon } from './styles';
var DLL_COLUMNS = ['marketprice', 'mybalance'];
export var TableBalanceBody = function TableBalanceBody(_ref) {
  var networkLink = _ref.networkLink,
    row = _ref.row,
    heightIcon = _ref.heightIcon,
    widthIcon = _ref.widthIcon,
    cryptoColumnWidth = _ref.cryptoColumnWidth;
  var redirectToNetwork = function redirectToNetwork(hash) {
    var link = "".concat(networkLink).concat(hash);
    window.open(link, '_blank');
  };
  return /*#__PURE__*/React.createElement(TR, {
    cryptoColumnWidth: cryptoColumnWidth
  }, Object.keys(row).filter(function (key) {
    return key !== 'contractPackage';
  }).map(function (key) {
    if (key !== 'id' && key !== 'cryptoIcon') {
      var isCryptoColumn = key === 'crypto';
      return /*#__PURE__*/React.createElement(TD, {
        key: key,
        isCryptoColumn: isCryptoColumn
      }, key === 'crypto' && /*#__PURE__*/React.createElement(Icon, {
        src: row['cryptoIcon'],
        alt: key,
        sizes: "14",
        height: heightIcon,
        width: widthIcon
      }), key === 'crypto' && /*#__PURE__*/React.createElement(Text, {
        linkable: true,
        onClick: function onClick() {
          return redirectToNetwork(row['contractPackage']);
        }
      }, row[key]), DLL_COLUMNS.includes(key) && /*#__PURE__*/React.createElement(Text, null, "$", row[key]), key !== 'crypto' && !DLL_COLUMNS.includes(key) && key !== 'mypools' && /*#__PURE__*/React.createElement(Text, null, row[key], key !== 'mycrypto' && key !== 'crypto' && '%'), key !== 'crypto' && !DLL_COLUMNS.includes(key) && key === 'mypools' && /*#__PURE__*/React.createElement(Text, null, '$', row[key]));
    }
  }));
};