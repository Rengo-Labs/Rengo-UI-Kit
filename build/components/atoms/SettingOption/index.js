import React from 'react';
import { WrapperStyled, Text, Input, InputWrapper } from './styles';
export var SettingOption = function SettingOption(_ref) {
  var value = _ref.value,
    handleValue = _ref.handleValue,
    _ref$isInput = _ref.isInput,
    isInput = _ref$isInput === void 0 ? false : _ref$isInput,
    _ref$isSelect = _ref.isSelect,
    isSelect = _ref$isSelect === void 0 ? false : _ref$isSelect;
  return /*#__PURE__*/React.createElement(WrapperStyled, {
    onClick: function onClick(e) {
      return !isInput ? handleValue(value) : null;
    },
    isSelect: isSelect
  }, !isInput ? /*#__PURE__*/React.createElement(Text, null, value, " %") : /*#__PURE__*/React.createElement(InputWrapper, null, /*#__PURE__*/React.createElement(Input, {
    value: value,
    placeholder: "_ _ _",
    onChange: function onChange(e) {
      return handleValue(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(Text, null, "%")));
};