import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ThemeProvider as _ThemeProvider } from "styled-components";
import React, { createContext, useState, useEffect } from 'react';
import { GlobalStyles } from '../styles';
// import {theme as themeVersions} from './index'

import { theme } from './theme';
export var UIProviderContext = /*#__PURE__*/createContext({});
var UiProvider = function UiProvider(props) {
  var children = props.children,
    themeName = props.themeName;
  var _useState = useState('default'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTheme = _useState2[0],
    setSelectedTheme = _useState2[1];
  var toggleTheme = function toggleTheme(theme) {
    setSelectedTheme(theme);
  };
  useEffect(function () {
    if (!themeName) {
      return;
    }
    toggleTheme(themeName);
  }, [themeName]);
  return /*#__PURE__*/React.createElement(UIProviderContext.Provider, {
    value: {
      toggleTheme: toggleTheme,
      selectedTheme: selectedTheme
    }
  }, /*#__PURE__*/React.createElement(_ThemeProvider, {
    theme: selectedTheme === 'default' ? theme.default : theme.dark
  }, /*#__PURE__*/React.createElement(GlobalStyles, null), children));
};
export default UiProvider;