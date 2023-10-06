import React from 'react';
import * as Icon from 'react-feather';
export var iconNames = Object.keys(Icon);
export var Icons = function Icons(_ref) {
  var name = _ref.name,
    color = _ref.color,
    size = _ref.size,
    fill = _ref.fill;
  for (var _i = 0, _iconNames = iconNames; _i < _iconNames.length; _i++) {
    var key = _iconNames[_i];
    if (key === name) {
      var IconComponent = Icon[key];
      return /*#__PURE__*/React.createElement(IconComponent, {
        color: color,
        size: size,
        fill: fill
      });
    }
  }
  return null;
};