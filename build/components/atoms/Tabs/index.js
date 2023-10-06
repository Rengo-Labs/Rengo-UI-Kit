import React from 'react';
import { WrapperStyle, Tab, TabText } from './styles';
/**
 * Render a tabs navigaton.
 * @param {ITab} tabs - The tabs to display.
 * @param {function} onClick - The function to call when the tab is clicked.
 */

export var Tabs = function Tabs(_ref) {
  var tabs = _ref.tabs,
    _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(WrapperStyle, null, tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement(Tab, {
      onClick: function onClick() {
        return _onClick(tab.id);
      },
      key: "".concat(tab.id, "-").concat(tab.text),
      isActive: tab.isActive
    }, /*#__PURE__*/React.createElement(TabText, {
      isActive: tab.isActive
    }, tab.text));
  }));
};