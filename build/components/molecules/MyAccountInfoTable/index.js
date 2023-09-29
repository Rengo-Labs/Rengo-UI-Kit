import React from 'react';
import { Column, Container, ContainerMobile, KeyItem, Row, ValueItem } from './styles';
import { Icons } from '../../atoms';
import DOMPurify from 'dompurify';
import { useDeviceType } from '../../../hooks';
import { DeviceType } from '../../../hooks/types';
import { useTheme } from 'styled-components';
import { MyAccountInfoTableMobile } from './MyAccountInfoTableMobile';
export var MyAccountInfoDataTypes = /*#__PURE__*/function (MyAccountInfoDataTypes) {
  MyAccountInfoDataTypes["String"] = "string";
  MyAccountInfoDataTypes["Link"] = "link";
  return MyAccountInfoDataTypes;
}({});
var SubItem = function SubItem(text, theme) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons, {
    name: "CornerDownRight",
    fill: "transparent",
    size: 24,
    color: theme.color.downRightArrow
  }), text);
};
var HEADERS = [{
  id: '862453d0-8ba1-4d66-9298-d92840f7db19',
  content: 'Public Key',
  isStrongContent: true,
  type: 'item',
  alignment: 'left'
}, {
  id: '43a81a69-baea-48dd-8ae6-d5789ca4b4f5',
  content: 'Account Hash',
  isStrongContent: true,
  type: 'item',
  alignment: 'left'
}, {
  id: 'e5690fdb-712e-4adf-a6f4-c7fa503b2a6e',
  content: 'Total Rewards Received',
  isStrongContent: false,
  type: 'item',
  alignment: 'left'
}, {
  id: '4c04bc5e-0ab1-4e9b-a507-89dc569294aa',
  content: 'Total Balance',
  isStrongContent: false,
  type: 'item',
  alignment: 'left'
}, {
  id: '3eee674f-4a0c-4263-bea6-d6025bf31e62',
  content: 'Liquid',
  type: 'sub-item',
  isStrongContent: false,
  alignment: 'center'
}, {
  id: 'df7fc928-d98f-40a3-b5c9-e1c2354b902f',
  content: 'Stake as Delegator',
  type: 'sub-item',
  isStrongContent: false,
  alignment: 'center'
}, {
  id: '368954d5-ddce-47dd-92b7-83e8c7d33fbb',
  content: 'Undelegating',
  type: 'sub-item',
  isStrongContent: false,
  alignment: 'center'
}];

/**

    A table component to display account information with headers and corresponding data
    @component
    @param {MyAccountInfoTableProps} props - The props object containing the data to display
    @param {DataKeyValues[]} props.data - The array of data objects, containing the key, type, and value of the data to display
    @property {string} key - The key for the data object
    @property {string} type - The type of the data object. Valid options are 'string' or 'link'
    @property {string} value - The value of the data object
    @return {JSX.Element} The MyAccountInfoTable component
*/

export var MyAccountInfoTable = function MyAccountInfoTable(_ref) {
  var data = _ref.data;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var theme = useTheme();
  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    if (node.nodeName === 'A') {
      node.setAttribute('target', '_blank');
    }
  });
  var sanitizedMessage = function sanitizedMessage(content) {
    return DOMPurify.sanitize(content);
  };
  return isMobile ? /*#__PURE__*/React.createElement(ContainerMobile, null, /*#__PURE__*/React.createElement(MyAccountInfoTableMobile, {
    headers: HEADERS,
    data: data
  })) : /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Column, null, HEADERS.map(function (header, idx) {
    return /*#__PURE__*/React.createElement(Row, {
      key: header.id
    }, /*#__PURE__*/React.createElement(KeyItem, {
      isStrong: header.isStrongContent,
      alignment: header.alignment
    }, header.type === 'sub-item' ? SubItem(header.content, theme) : header.content), data[idx].type === MyAccountInfoDataTypes.Link ? /*#__PURE__*/React.createElement(ValueItem, {
      dangerouslySetInnerHTML: {
        __html: sanitizedMessage(data[idx].value)
      }
    }) : /*#__PURE__*/React.createElement(ValueItem, null, data[idx].value));
  })));
};