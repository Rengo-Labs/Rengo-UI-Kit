import React from 'react';
import { WrapperStyled, Text } from './styles';
export var SettingOptionButton = function SettingOptionButton(_ref) {
  var value = _ref.value,
    handleValue = _ref.handleValue,
    _ref$isSelect = _ref.isSelect,
    isSelect = _ref$isSelect === void 0 ? false : _ref$isSelect;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WrapperStyled, {
    onClick: handleValue,
    isSelect: isSelect
  }, /*#__PURE__*/React.createElement(Text, null, value)));
};