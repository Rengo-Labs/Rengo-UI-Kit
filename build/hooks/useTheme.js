import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';
export var useTheme = function useTheme(themeName) {
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTheme = _useState2[0],
    setSelectedTheme = _useState2[1];
  var toggleTheme = function toggleTheme(theme) {
    // theme === 'default' ? setSelectedTheme('default') : setSelectedTheme('dark');
    setSelectedTheme(theme);
  };
  useEffect(function () {
    toggleTheme(themeName);
  }, [themeName]);
  console.log('from useEffect hook selectedTheme', selectedTheme);
  return [selectedTheme, toggleTheme];
};