import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { HelperText, IconWrapper, InputInnerWrapper, InputStyled, InputWrapper, LabelStyled, RightAdornmentWrapper } from './styles';
import { TYPES_WITH_HELPER_TEXT, TYPES_WITH_ICON, TYPES_WITH_LABEL } from './types';
import { useInput } from './useInput';

/**
 * Renders an input field with an optional label, helper text, and icon.
 *
 * @param {string} placeholder - The placeholder text to display in the input field.
 * @param {Status} [status=''] - The status of the input field, one of 'success', 'error', or 'default'.
 * @param {Type} [type='icon-label-helper-text'] - The type of the input field, one of 'icon-label-helper-text', 'icon-helper-text', 'helper-text-only', 'plain', 'label-helper-text', 'label-icon', 'label-plain' or 'icon-plain'.
 * @param {string} label - The label to display above the input field.
 * @param {string} helperText - The helper text to display below the input field.
 * @param hasBackground
 * @param {string} iconWrapperBackground - The background color for the icon.
 * @param {string} textAlign - The text alignment for the input
 * @param {React.ReactNode} rightAdornment - The adornment to be display at the right of the input, accepts a component or string
 * @param {React.ReactNode} Icon - The icon component to display inside the input field.
 * @param {IconSize} [iconSize='small'] - The size of the icon, one of 'small' or 'large', necessary if you pass an icon component.
 * @param {function} onChange - A callback function to be called when the input value changes. Should accept a string argument representing the new value of the input field.
 * @param {function} validator - A callback function to be called when the input changes, the user must implement the validator.
 *
 * @param value
 * @param disabled
 * @returns {JSX.Element} The rendered input field.
 */

export var Input = function Input(_ref) {
  var placeholder = _ref.placeholder,
    status = _ref.status,
    type = _ref.type,
    label = _ref.label,
    helperText = _ref.helperText,
    rightAdornment = _ref.rightAdornment,
    _ref$hasBackground = _ref.hasBackground,
    hasBackground = _ref$hasBackground === void 0 ? false : _ref$hasBackground,
    Icon = _ref.Icon,
    iconSize = _ref.iconSize,
    iconWrapperBackground = _ref.iconWrapperBackground,
    _onChange = _ref.onChange,
    _validator = _ref.validator,
    value = _ref.value,
    _ref$textAlign = _ref.textAlign,
    textAlign = _ref$textAlign === void 0 ? 'right' : _ref$textAlign,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var _useInput = useInput(),
    getInputProps = _useInput.getInputProps;
  return /*#__PURE__*/React.createElement(InputWrapper, null, /*#__PURE__*/React.createElement(LabelStyled, {
    status: status
  }, TYPES_WITH_LABEL.includes(type) && label), /*#__PURE__*/React.createElement(InputInnerWrapper, null, TYPES_WITH_ICON.includes(type) && /*#__PURE__*/React.createElement(IconWrapper, {
    status: status,
    iconSize: iconSize,
    iconWrapperBackground: iconWrapperBackground
  }, Icon), /*#__PURE__*/React.createElement(InputStyled, _extends({
    textAlign: textAlign
  }, getInputProps({
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    validator: function validator(e) {
      return _validator && _validator(e.target.value);
    },
    status: status,
    type: type,
    placeholder: placeholder,
    iconSize: iconSize,
    hasBackground: hasBackground
  }), {
    value: value,
    disabled: disabled
  })), rightAdornment && /*#__PURE__*/React.createElement(RightAdornmentWrapper, null, rightAdornment)), TYPES_WITH_HELPER_TEXT.includes(type) && /*#__PURE__*/React.createElement(HelperText, {
    status: status
  }, helperText));
};