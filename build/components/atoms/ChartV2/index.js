import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Area, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, BarChart, Bar } from 'recharts';
import { CHART_VIEW, timeframeOptions, getTimeframe, toK, toNiceDate, toNiceDateYear, formattedNum } from '../../../utils';
import { ChartWrapper, OptionsRow, EmptyCard, AutoRow, OptionButton, AutoRowJustify } from './styles';
import { useTheme } from "styled-components";
import { useDeviceType } from "../../../hooks";
import { DeviceType } from "../../../hooks/types";
export var ChartV2 = function ChartV2(_ref) {
  var data = _ref.data,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 300 : _ref$height,
    showChart0 = _ref.showChart0;
  var _useState = useState(CHART_VIEW.LIQUIDITY),
    _useState2 = _slicedToArray(_useState, 2),
    chartFilter = _useState2[0],
    setChartFilter = _useState2[1];
  var _useState3 = useState(timeframeOptions.MONTH),
    _useState4 = _slicedToArray(_useState3, 2),
    timeWindow = _useState4[0],
    setTimeWindow = _useState4[1];
  var theme = useTheme();
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var isTablet = deviceType === DeviceType.TABLET;
  var aspect = isMobile ? 60 / 22 : isTablet ? 60 / 28 : 60 / 26;

  // @ts-ignore
  var color = showChart0 ? theme.defaultColor : theme.color.chart.secondary;
  // @ts-ignore
  var textColor = theme.color.chart.textColor;
  // @ts-ignore
  var background = theme.color.chart.background;
  var utcStartTime = getTimeframe(timeWindow);
  var chartData = data === null || data === void 0 ? void 0 : data.filter(function (entry) {
    return entry.date >= utcStartTime;
  });
  if (chartData && chartData.length === 0) {
    return /*#__PURE__*/React.createElement(ChartWrapper, null, /*#__PURE__*/React.createElement(EmptyCard, null, "No historical data yet."), ' ');
  }
  return /*#__PURE__*/React.createElement(ChartWrapper, null, /*#__PURE__*/React.createElement(OptionsRow, null, /*#__PURE__*/React.createElement(AutoRow, null, /*#__PURE__*/React.createElement(OptionButton, {
    active: chartFilter === CHART_VIEW.LIQUIDITY,
    onClick: function onClick() {
      setTimeWindow(timeframeOptions.ALL_TIME);
      setChartFilter(CHART_VIEW.LIQUIDITY);
    }
  }, "Liquidity"), /*#__PURE__*/React.createElement(OptionButton, {
    active: chartFilter === CHART_VIEW.VOLUME,
    onClick: function onClick() {
      setTimeWindow(timeframeOptions.ALL_TIME);
      setChartFilter(CHART_VIEW.VOLUME);
    }
  }, "Volume")), /*#__PURE__*/React.createElement(AutoRowJustify, null, /*#__PURE__*/React.createElement(OptionButton, {
    active: timeWindow === timeframeOptions.WEEK,
    onClick: function onClick() {
      return setTimeWindow(timeframeOptions.WEEK);
    }
  }, "1W"), /*#__PURE__*/React.createElement(OptionButton, {
    active: timeWindow === timeframeOptions.MONTH,
    onClick: function onClick() {
      return setTimeWindow(timeframeOptions.MONTH);
    }
  }, "1M"), /*#__PURE__*/React.createElement(OptionButton, {
    active: timeWindow === timeframeOptions.ALL_TIME,
    onClick: function onClick() {
      return setTimeWindow(timeframeOptions.ALL_TIME);
    }
  }, "All"))), chartFilter === CHART_VIEW.LIQUIDITY && /*#__PURE__*/React.createElement(ResponsiveContainer, {
    aspect: aspect,
    maxHeight: height,
    key: "rc_".concat(data.chartData)
  }, /*#__PURE__*/React.createElement(AreaChart, {
    margin: {
      top: 0,
      right: 10,
      bottom: 6,
      left: 0
    },
    barCategoryGap: 1,
    data: chartData,
    key: "a_".concat(data.chartData)
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "colorUv",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "5%",
    stopColor: color,
    stopOpacity: 0.35
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "95%",
    stopColor: color,
    stopOpacity: 0
  }))), /*#__PURE__*/React.createElement(XAxis, {
    tickLine: false,
    axisLine: false,
    interval: "preserveEnd",
    tickMargin: 14,
    minTickGap: 80,
    tickFormatter: function tickFormatter(tick) {
      return toNiceDate(tick);
    },
    dataKey: "date",
    tick: {
      fill: textColor
    },
    type: 'number',
    domain: ['dataMin', 'dataMax']
  }), /*#__PURE__*/React.createElement(YAxis, {
    type: "number",
    orientation: "right",
    tickFormatter: function tickFormatter(tick) {
      return '$' + toK(tick);
    },
    axisLine: false,
    tickLine: false,
    interval: "preserveEnd",
    minTickGap: 80,
    yAxisId: 0,
    tickMargin: 1,
    tick: {
      fill: textColor
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    cursor: true,
    formatter: function formatter(val) {
      return formattedNum(val, true);
    },
    labelFormatter: function labelFormatter(label) {
      return toNiceDateYear(label);
    },
    labelStyle: {
      paddingTop: 4
    },
    contentStyle: {
      padding: '10px 14px',
      borderRadius: 10,
      borderColor: color,
      color: 'black',
      backgroundColor: background
    },
    wrapperStyle: {
      top: -70,
      left: -10
    }
  }), /*#__PURE__*/React.createElement(Area, {
    key: "ar_".concat(data.chartData),
    stackId: "2",
    strokeWidth: 2,
    dot: false,
    type: "monotone",
    name: 'Liquidity',
    dataKey: 'totalLiquidityUSDValue',
    yAxisId: 0,
    stroke: color,
    fill: "url(#colorUv)"
  }))), chartFilter === CHART_VIEW.VOLUME && /*#__PURE__*/React.createElement(ResponsiveContainer, {
    aspect: aspect,
    maxHeight: height
  }, /*#__PURE__*/React.createElement(BarChart, {
    margin: {
      top: 0,
      right: 0,
      bottom: 6,
      left: false ? 0 : 10
    },
    barCategoryGap: 1,
    data: chartData
  }, /*#__PURE__*/React.createElement(XAxis, {
    tickLine: false,
    axisLine: false,
    interval: "preserveEnd",
    minTickGap: 80,
    tickMargin: 14,
    tickFormatter: function tickFormatter(tick) {
      return toNiceDate(tick);
    },
    dataKey: "date",
    tick: {
      fill: textColor
    },
    type: 'number',
    domain: ['dataMin', 'dataMax']
  }), /*#__PURE__*/React.createElement(YAxis, {
    type: "number",
    axisLine: false,
    tickMargin: 1,
    tickFormatter: function tickFormatter(tick) {
      return '$' + toK(tick);
    },
    tickLine: false,
    interval: "preserveEnd",
    orientation: "right",
    minTickGap: 80,
    yAxisId: 0,
    tick: {
      fill: textColor
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    cursor: {
      fill: color,
      opacity: 0.1
    },
    formatter: function formatter(val) {
      return formattedNum(val, true);
    },
    labelFormatter: function labelFormatter(label) {
      return toNiceDateYear(label);
    },
    labelStyle: {
      paddingTop: 4
    },
    contentStyle: {
      padding: '10px 14px',
      borderRadius: 10,
      borderColor: color,
      color: 'black',
      backgroundColor: background
    },
    wrapperStyle: {
      top: -70,
      left: -10
    }
  }), /*#__PURE__*/React.createElement(Bar, {
    type: "monotone",
    name: 'Volume',
    dataKey: 'dailyVolumeUSDValue',
    fill: color,
    opacity: '0.4',
    yAxisId: 0,
    stroke: color
  }))));
};