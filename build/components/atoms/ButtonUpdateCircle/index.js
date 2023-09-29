import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { Wrapper, TrailCircular } from './styles';
export var ButtonUpdateCircle = function ButtonUpdateCircle(_ref) {
  var getProgress = _ref.getProgress,
    clearProgress = _ref.clearProgress,
    strokeWidth = _ref.strokeWidth,
    handlerAction = _ref.handlerAction;
  var radius = 50 - strokeWidth / 2;
  var pathDescription = "\n        M 50,50 m 0,-".concat(radius, "\n        a ").concat(radius, ",").concat(radius, " 0 1 1 0,").concat(2 * radius, "\n        a ").concat(radius, ",").concat(radius, " 0 1 1 0,-").concat(2 * radius, "\n    ");
  var diameter = Math.PI * 2 * radius;
  var click = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!clearProgress) {
              _context.next = 5;
              break;
            }
            clearProgress();
            _context.next = 5;
            return handlerAction();
          case 5:
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('error ', _context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function click() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getOffset = function getOffset() {
    var progress = getProgress();
    var offset = (100 - progress) / 100 * diameter;
    return offset;
  };
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: 26,
    height: 26,
    style: {
      display: 'flex'
    },
    onClick: click
  }, /*#__PURE__*/React.createElement(TrailCircular, {
    d: pathDescription,
    strokeWidth: strokeWidth,
    fillOpacity: 0,
    diameter: diameter,
    percentage: 100,
    isPrincipal: false,
    style: {
      strokeDasharray: "".concat(diameter, "px ").concat(diameter, "px"),
      strokeDashoffset: "".concat((100 - 100) / 100 * diameter, "px")
    }
  }), /*#__PURE__*/React.createElement(TrailCircular, {
    d: pathDescription,
    strokeWidth: strokeWidth,
    fillOpacity: 0,
    isPrincipal: true,
    diameter: diameter,
    percentage: getProgress,
    style: {
      strokeDasharray: "".concat(diameter, "px ").concat(diameter, "px"),
      strokeDashoffset: "".concat(getOffset(), "px")
    }
  })));
};