import React from 'react';
import { Input, InputWrapper, Text, WrapperStyled } from './styles';
import { InputType, inputTypeMap } from './types';
/**
 * Render a key-value text.
 * @param {string} keyText - The key text to display in the input field.
 * @param {number} value - The value text to display in the input field.
 * @param {function} onChange - The function to call when the input value changes.
 * @param {InputType} inputType - The type of input to display.
 * @returns  {JSX.Element} The rendered the key-value text.
 */

export var KeyValueInput = function KeyValueInput(_ref) {
  var keyText = _ref.keyText,
    value = _ref.value,
    _onChange = _ref.onChange,
    _ref$inputType = _ref.inputType,
    inputType = _ref$inputType === void 0 ? InputType.GASFEE : _ref$inputType,
    _ref$editable = _ref.editable,
    editable = _ref$editable === void 0 ? true : _ref$editable;
  return /*#__PURE__*/React.createElement(WrapperStyled, null, /*#__PURE__*/React.createElement(Text, null, keyText), editable && /*#__PURE__*/React.createElement(InputWrapper, null, /*#__PURE__*/React.createElement(Input, {
    value: value,
    type: "number",
    onChange: function onChange(e) {
      return _onChange && _onChange(Number(e.target.value));
    }
  }), /*#__PURE__*/React.createElement(Text, null, inputTypeMap[inputType])), !editable && /*#__PURE__*/React.createElement(Text, null, value, " ", inputTypeMap[inputType]));
};