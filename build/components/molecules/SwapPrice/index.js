import React from 'react';
import { Chart, ChartV2, Column, KeyPairText, Row, TokenOption } from '../../atoms';
import { RowStyled } from './styles';
/**
 * Render a Swap Price Molecule.
 * @param {any} firstTokenImg - The image value to display in the img field.
 * @param {any} secondTokenImg - The image value to display in the img field.
 * @param {() => void} onClickButton - The function to execute when the button is clicked.
 * @returns  {JSX.Element} The rendered the token options and key pair text.
 */

export var SwapPrice = function SwapPrice(_ref) {
  var firstTokenImg = _ref.firstTokenImg,
    secondTokenImg = _ref.secondTokenImg,
    firstTokenSymbol = _ref.firstTokenSymbol,
    secondTokenSymbol = _ref.secondTokenSymbol,
    onClickButton0 = _ref.onClickButton0,
    onClickButton1 = _ref.onClickButton1,
    graphicData = _ref.graphicData,
    todayPrice = _ref.todayPrice,
    yesterdayPrice = _ref.yesterdayPrice,
    xAxisName = _ref.xAxisName,
    chart0Name = _ref.chart0Name,
    chart1Name = _ref.chart1Name,
    charWidth = _ref.charWidth,
    charHeight = _ref.charHeight,
    showChart1 = _ref.showChart1,
    showChart0 = _ref.showChart0,
    _ref$showV = _ref.showV2,
    showV2 = _ref$showV === void 0 ? true : _ref$showV;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Row, {
    props: {
      className: 'p-1 align-center'
    }
  }, /*#__PURE__*/React.createElement(Column, {
    props: {
      xs: 12,
      md: 6
    }
  }, /*#__PURE__*/React.createElement(RowStyled, null, /*#__PURE__*/React.createElement(TokenOption, {
    onClick: onClickButton0,
    tokenImg: firstTokenImg,
    token: firstTokenSymbol,
    option1: true
  }), /*#__PURE__*/React.createElement(TokenOption, {
    onClick: onClickButton1,
    tokenImg: secondTokenImg,
    token: secondTokenSymbol,
    option1: false
  }))), /*#__PURE__*/React.createElement(Column, {
    props: {
      xs: 12,
      md: 6
    }
  }, /*#__PURE__*/React.createElement(RowStyled, null, /*#__PURE__*/React.createElement(KeyPairText, {
    keyText: "Price",
    pairText: todayPrice
  }), /*#__PURE__*/React.createElement(KeyPairText, {
    keyText: "24H%",
    pairText: yesterdayPrice,
    isPorcentage: true
  })))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    props: {
      xs: 12
    }
  }, showV2 ? /*#__PURE__*/React.createElement(ChartV2, {
    data: graphicData,
    height: charHeight,
    width: charWidth,
    showChart0: showChart0
  }) : /*#__PURE__*/React.createElement(Chart, {
    data: graphicData,
    width: charWidth,
    height: charHeight
    // @ts-ignore
    ,
    xAxisName: xAxisName
    // @ts-ignore
    ,
    chart0Name: chart0Name,
    chart1Name: chart1Name,
    twoColors: true,
    showChart0: showChart0,
    showChart1: showChart1
  }))));
};