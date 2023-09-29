import React from "react";
import { WrapperStyled, InputWrapper, Text, InputOption } from "./styles";
export var SettingInputOption = function SettingInputOption(_ref) {
  var value = _ref.value,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "_ _ _" : _ref$placeholder,
    handleValue = _ref.handleValue;
  return /*#__PURE__*/React.createElement(WrapperStyled, null, /*#__PURE__*/React.createElement(InputWrapper, null, /*#__PURE__*/React.createElement(InputOption, {
    value: value,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return handleValue(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(Text, null, "%")));
};