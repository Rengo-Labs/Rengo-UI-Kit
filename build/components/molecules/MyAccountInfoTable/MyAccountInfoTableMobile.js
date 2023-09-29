import React from 'react';
import { ColumnMobile, ContentContainer, ImgContainerMobile, KeyItemMobile, RowMobile, ValueItemMobile } from './styles';
import DOMPurify from 'dompurify';
import { MyAccountInfoDataTypes } from '.';
import { Icons } from '../../atoms';
import { useTheme } from 'styled-components';
var Section = function Section(headers, data, sanitizedMessage) {
  var theme = useTheme();
  return headers.map(function (header, idx) {
    return /*#__PURE__*/React.createElement(RowMobile, {
      key: header.id,
      isLast: idx === headers.length - 1,
      isSubItem: header.type === 'sub-item'
    }, header.type === 'sub-item' && /*#__PURE__*/React.createElement(ImgContainerMobile, null, /*#__PURE__*/React.createElement(Icons, {
      name: "CornerDownRight",
      fill: "transparent",
      size: 24,
      color: theme.color.downRightArrow
    })), /*#__PURE__*/React.createElement(ContentContainer, null, /*#__PURE__*/React.createElement(KeyItemMobile, {
      type: header.type,
      alignment: header.alignment
    }, header.content), data[idx].type === MyAccountInfoDataTypes.Link ? /*#__PURE__*/React.createElement(ValueItemMobile, {
      dangerouslySetInnerHTML: {
        __html: sanitizedMessage(data[idx].value)
      }
    }) : /*#__PURE__*/React.createElement(ValueItemMobile, null, data[idx].value)));
  });
};

/**

    A mobile view table component to display account information with headers and corresponding data
    @component
    @param {MyAccountInfoTableProps} props - The props object containing the data to display
    @param {DataKeyValues[]} props.data - The array of data objects, containing the key, type, and value of the data to display
    @property {string} key - The key for the data object
    @property {string} type - The type of the data object. Valid options are 'string' or 'link'
    @property {string} value - The value of the data object
    @return {JSX.Element} The MyAccountInfoTable component
*/
export var MyAccountInfoTableMobile = function MyAccountInfoTableMobile(_ref) {
  var headers = _ref.headers,
    data = _ref.data;
  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    if (node.nodeName === 'A') {
      node.setAttribute('target', '_blank');
    }
  });
  var sanitizedMessage = function sanitizedMessage(content) {
    return DOMPurify.sanitize(content);
  };
  var headersOneOffset = headers.slice(0, 2);
  var headersTwoOffset = headers.slice(2);
  var dataTwoOffset = data.slice(2);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColumnMobile, null, Section(headersOneOffset, data, sanitizedMessage)), /*#__PURE__*/React.createElement(ColumnMobile, null, Section(headersTwoOffset, dataTwoOffset, sanitizedMessage)));
};