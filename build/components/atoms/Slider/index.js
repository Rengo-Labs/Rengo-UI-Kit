import React from 'react';
import { PercentageLabel, Wrapper, Input, PercentageContainer } from './style';
/**
 * The Slider component allows the user to select a percentage value by dragging a slider
 *
 * @param {SliderProps} props - The props passed to the Slider component
 * @param {function} props.callback - {(selectedPercentage: number) => void} - Callback function called when the percentage value changes
 * @returns {JSX.Element} - A React element representing the Slider component
*/
export var Slider = function Slider(_ref) {
  var _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? 0 : _ref$defaultValue,
    callback = _ref.callback;
  var handleInputChange = function handleInputChange(value) {
    callback(value);
  };
  var percentages = [{
    value: 0,
    name: '0%'
  }, {
    value: 25,
    name: '25%'
  }, {
    value: 50,
    name: '50%'
  }, {
    value: 75,
    name: '75%'
  }, {
    value: 100,
    name: '100%'
  }];
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Input, {
    type: "range",
    min: "0",
    max: "100",
    value: defaultValue,
    onChange: function onChange(event) {
      return handleInputChange(parseInt(event.target.value));
    },
    id: "slider"
  }), /*#__PURE__*/React.createElement(PercentageContainer, null, percentages.map(function (item) {
    return /*#__PURE__*/React.createElement(PercentageLabel, {
      key: "percentage-item-".concat(item.value),
      isSelected: defaultValue === item.value,
      onClick: function onClick() {
        return handleInputChange(item.value);
      }
    }, item.name);
  })));
};