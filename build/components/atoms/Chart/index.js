import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
export var Chart = function Chart(_ref) {
  var data = _ref.data,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 500 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 300 : _ref$height,
    twoColors = _ref.twoColors,
    xAxisName = _ref.xAxisName,
    chart0Name = _ref.chart0Name,
    chart1Name = _ref.chart1Name,
    _ref$showChart = _ref.showChart0,
    showChart0 = _ref$showChart === void 0 ? true : _ref$showChart,
    _ref$showChart2 = _ref.showChart1,
    showChart1 = _ref$showChart2 === void 0 ? true : _ref$showChart2;
  return /*#__PURE__*/React.createElement(AreaChart, {
    width: width,
    height: height,
    data: data,
    margin: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(XAxis, {
    dataKey: xAxisName
  }), /*#__PURE__*/React.createElement(YAxis, {
    orientation: "right"
  }), /*#__PURE__*/React.createElement(Tooltip, null), showChart0 && /*#__PURE__*/React.createElement(Area, {
    type: "monotone",
    dataKey: chart0Name,
    stackId: "1",
    stroke: "#715FF5",
    fill: "#715FF5"
  }), showChart1 && chart1Name && twoColors && /*#__PURE__*/React.createElement(Area, {
    type: "monotone",
    dataKey: chart1Name,
    stackId: "1",
    stroke: "#3DCBAD",
    fill: "#3DCBAD"
  }));
};