import React from 'react';
import { TR, Text, TD, Head, Icon } from './styles';
import { ChevronUp, ChevronDown } from 'react-feather';
export var TableHeader = function TableHeader(_ref) {
  var columns = _ref.columns,
    onSort = _ref.onSort,
    HeadTRRef = _ref.HeadTRRef,
    centerItems = _ref.centerItems,
    _ref$isCenterHeader = _ref.isCenterHeader,
    isCenterHeader = _ref$isCenterHeader === void 0 ? false : _ref$isCenterHeader;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement(TR, {
    ref: HeadTRRef,
    columnsQty: columns.length,
    centerItems: centerItems
  }, columns.map(function (column, i) {
    return /*#__PURE__*/React.createElement(TD, {
      key: column.key,
      customWidth: column.width,
      isFirstColumn: isCenterHeader || i == 0
    }, /*#__PURE__*/React.createElement(Text, null, column.name), column.isSorteable && /*#__PURE__*/React.createElement(Icon, null, /*#__PURE__*/React.createElement(ChevronUp, {
      size: 16,
      style: {
        marginBottom: '-3px'
      },
      onClick: function onClick() {
        return onSort(column.key, true);
      }
    }), /*#__PURE__*/React.createElement(ChevronDown, {
      size: 16,
      style: {
        marginTop: '-3px'
      },
      onClick: function onClick() {
        return onSort(column.key, false);
      }
    })));
  })));
};
export default TableHeader;