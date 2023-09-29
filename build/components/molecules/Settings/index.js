import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import { Button, Input, Row, SettingOption, Dialog, SettingOptionButton, SettingInputOption } from '../../atoms';
import { CloseIcon, Text, Wrapper } from './styles';
import { Status, Type } from '../../atoms/Input/types';
export var Settings = function Settings(_ref) {
  var _ref$slippageToleranc = _ref.slippageToleranceValue,
    slippageToleranceValue = _ref$slippageToleranc === void 0 ? "0.1" : _ref$slippageToleranc,
    _ref$customNodeUrlVal = _ref.customNodeUrlValue,
    customNodeUrlValue = _ref$customNodeUrlVal === void 0 ? '' : _ref$customNodeUrlVal,
    handleSave = _ref.handleSave,
    handleClose = _ref.handleClose,
    isOpen = _ref.isOpen;
  var _React$useState = React.useState(slippageToleranceValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    slippageTolerance = _React$useState2[0],
    setSlippageTolerance = _React$useState2[1];
  var _React$useState3 = React.useState(customNodeUrlValue),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    customNodeUrl = _React$useState4[0],
    setCustomNodeUrl = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    isCustomInput = _React$useState6[0],
    setIsCustomInput = _React$useState6[1];
  var valuesToSettingOption = ["0.1", "0.5", "1.0"];
  var handleSlippageTolerance = function handleSlippageTolerance(value) {
    setSlippageTolerance(value);
    setIsCustomInput(false);
  };
  var handleCustomSlippageTolerance = function handleCustomSlippageTolerance(value) {
    setSlippageTolerance(value);
  };
  var handlerInput = function handlerInput(value) {
    setCustomNodeUrl(value);
  };
  var handleSaveButton = function handleSaveButton() {
    handleSave(slippageTolerance, customNodeUrl);
  };
  var handleCustomInput = function handleCustomInput() {
    setIsCustomInput(!isCustomInput);
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    onClose: handleClose,
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(Wrapper, {
    props: {
      xs: 12
    }
  }, /*#__PURE__*/React.createElement(Row, {
    className: "align-items-center justify-content-between"
  }, /*#__PURE__*/React.createElement(Text, null, "Slippage Tolerance"), /*#__PURE__*/React.createElement(CloseIcon, {
    size: 16,
    onClick: handleClose
  })), /*#__PURE__*/React.createElement(Row, {
    className: "align-items-center justify-content-between py-1"
  }, valuesToSettingOption.map(function (value, index) {
    return /*#__PURE__*/React.createElement(SettingOption, {
      key: index,
      value: value,
      handleValue: handleSlippageTolerance,
      isSelect: !isCustomInput && slippageTolerance === value
    });
  }), /*#__PURE__*/React.createElement(SettingOptionButton, {
    value: "Custom",
    handleValue: handleCustomInput,
    isSelect: isCustomInput || !valuesToSettingOption.includes(slippageTolerance)
  })), /*#__PURE__*/React.createElement(Row, null, isCustomInput && /*#__PURE__*/React.createElement(SettingInputOption, {
    value: slippageTolerance,
    handleValue: handleCustomSlippageTolerance
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Text, null, "You have a custom node URL?")), /*#__PURE__*/React.createElement(Row, {
    className: "m-1"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Node URL",
    helperText: "Something is wrong!",
    type: Type.Plain,
    value: customNodeUrl,
    status: Status.Default,
    label: "Label test",
    onChange: handlerInput,
    hasBackground: true
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    type: "large",
    props: {
      onClick: handleSaveButton
    }
  }, "Save"))));
};