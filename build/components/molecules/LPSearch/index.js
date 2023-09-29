import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { ActionsSubContainer, Container, UpdateButtonContainer } from "./styles";
import { ButtonUpdateCircle, Input, Toggle } from '../../atoms';
import { IconSize, Status, Type } from '../../atoms/Input/types';
import { Search } from 'react-feather';
import { useDeviceType } from '../../../hooks';
import { useTheme } from 'styled-components';
import { DeviceType } from '../../../hooks/types';
import { Variant } from '../../atoms/Toggle/types';
/**
  A search component for LP tokens.
  @component
  @param {Object} props - The component props.
  @param {Function} props.handleOnlyShowStaked - A callback function that takes a boolean parameter. This function is called when the user toggles the "show staked only" checkbox.
  @param {Function} props.handleSearch - A callback function that takes a string parameter. This function is called when the user types in the search input.
  @param {Function} props.handleReloadButton - A callback function that returns a Promise. This function is called when the user clicks on the Reload button.
  @param {Function} props.getProgress - A function that returns a number representing the current progress of the reload operation.
  @param {Function} props.clearProgress - A function that clears the current reload progress.
  @returns {JSX.Element} The rendered LPSearch component.
*/

export var LPSearch = function LPSearch(_ref) {
  var handleOnlyShowStaked = _ref.handleOnlyShowStaked,
    handleSearch = _ref.handleSearch,
    handleReloadButton = _ref.handleReloadButton,
    getProgress = _ref.getProgress,
    clearProgress = _ref.clearProgress;
  var theme = useTheme();
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showStaked = _useState2[0],
    setShowStaked = _useState2[1];
  var handleShowStakedToggle = function handleShowStakedToggle(e) {
    handleOnlyShowStaked(e);
    setShowStaked(function (prev) {
      return !prev;
    });
  };
  return /*#__PURE__*/React.createElement(Container, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search all",
    helperText: "Something is wrong!",
    type: Type.IconPlain,
    status: Status.Default,
    onChange: handleSearch,
    hasBackground: true,
    Icon: /*#__PURE__*/React.createElement(Search, {
      size: 20,
      color: "#999999"
    }),
    iconSize: IconSize.Small,
    iconWrapperBackground: theme.background.icon,
    textAlign: "left"
  }), /*#__PURE__*/React.createElement(ActionsSubContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(UpdateButtonContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(ButtonUpdateCircle, {
    getProgress: getProgress,
    clearProgress: clearProgress,
    strokeWidth: 12,
    handlerAction: handleReloadButton
  })), /*#__PURE__*/React.createElement(Toggle, {
    isActive: showStaked,
    toggle: function toggle(e) {
      return handleShowStakedToggle(e.target.checked);
    },
    variant: Variant.InvertedColors,
    labelText: "Show Staked"
  })));
};