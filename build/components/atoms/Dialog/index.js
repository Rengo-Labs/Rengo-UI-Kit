import React, { useEffect, useRef } from 'react';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { DeviceType } from '../../../hooks/types';
import { Backdrop, Container } from './styles';
/**
  React component for displaying a dialog box.
  @param {DialogProps} props - The props object containing the title, children, onClose function, and isOpen boolean.
  @property {React.ReactNode} children - The children of the dialog box.
  @property {Function} onClose - The function to be called when the dialog box is closed.
  @property {Function} isOpen - Boolean value to know the status of the dialog
  @returns {JSX.Element} - A JSX element representing the dialog box component.
*/

export var Dialog = function Dialog(_ref) {
  var children = _ref.children,
    onClose = _ref.onClose,
    isOpen = _ref.isOpen,
    _ref$withoutEffect = _ref.withoutEffect,
    withoutEffect = _ref$withoutEffect === void 0 ? false : _ref$withoutEffect;
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  var dialogRef = useRef(null);
  useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function () {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  var handleClose = function handleClose() {
    var _dialogRef$current;
    dialogRef === null || dialogRef === void 0 ? void 0 : (_dialogRef$current = dialogRef.current) === null || _dialogRef$current === void 0 ? void 0 : _dialogRef$current.close();
    onClose();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, isOpen && /*#__PURE__*/React.createElement(Backdrop, null), /*#__PURE__*/React.createElement(Container, {
    isMobile: isMobile,
    ref: dialogRef,
    onPointerDown: function onPointerDown(e) {
      return e.stopPropagation();
    },
    isOpen: isOpen,
    withoutEffect: withoutEffect
  }, children));
};