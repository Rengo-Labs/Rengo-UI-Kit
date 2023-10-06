import React from 'react';
import { Sun, Moon } from 'react-feather';
import { ToggleInput, ToggleHandle, ToggleWrapper, LabelText, SwitcherWrapper } from "./styles";
import { Variant } from './types';

/**
  A toggle switch component with customizable variant and label.
  @component
  @param {Object} props - The component props.
  @param {boolean} props.isActive - The current active state of the toggle switch.
  @param {Function} props.toggle - The function to be called when the toggle switch is clicked.
  @param {Variant} [props.variant='default'] - The variant of the toggle switch. The available options are 'default', 'theme-switcher' and 'inverted-colors, if you don't pass any it will be default.
  @param {string} [props.labelText=''] - The label text to be displayed next to the toggle switch.
  @return {JSX.Element}
*/
export var Toggle = function Toggle(_ref) {
  var isActive = _ref.isActive,
    toggle = _ref.toggle,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? Variant.Default : _ref$variant,
    labelText = _ref.labelText;
  var invertStyleWhenActive = variant === Variant.Default && isActive;
  return /*#__PURE__*/React.createElement(SwitcherWrapper, null, labelText && /*#__PURE__*/React.createElement(LabelText, null, labelText), /*#__PURE__*/React.createElement(ToggleWrapper, {
    variant: variant,
    invertStyleWhenActive: invertStyleWhenActive
  }, /*#__PURE__*/React.createElement(ToggleInput, {
    checked: isActive,
    onChange: toggle
  }), /*#__PURE__*/React.createElement(ToggleHandle, {
    isActive: isActive,
    variant: variant,
    invertStyleWhenActive: invertStyleWhenActive
  }, variant === Variant.ThemeSwitcher && (isActive ? /*#__PURE__*/React.createElement(Moon, {
    color: "#FFFFFF",
    size: 24
  }) : /*#__PURE__*/React.createElement(Sun, {
    color: "#FFFFFF",
    size: 24
  })))));
};