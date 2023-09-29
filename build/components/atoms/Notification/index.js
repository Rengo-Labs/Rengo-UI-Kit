import React, { useEffect } from 'react';
import { Backdrop, CloseIcon, Container, ContentContainer, IconWrapper, Message, SubContainer, Title } from './styles';
import { Icons } from '../Icons';
import { useTheme } from 'styled-components';
import { NoticationTypes } from './types';
import { useDeviceType } from '../../../hooks';
import { DeviceType } from '../../../hooks/types';
import DOMPurify from 'dompurify';
var ICON_NAMES = {
  'success': 'CheckCircle',
  'error': 'Info',
  'info': 'Info'
};

/**

  A component that displays a notification with a title, message, and a specific type and position.
  @component
  @param {Object} props - The props object containing the notification's properties.
  @param {string} props.position - The position where the notification should be displayed.
  @param {string} props.type - The type of notification to display.
  @param {string} props.title - The title of the notification.
  @param {string} props.message - The message to display in the notification.
  @param {function} props.onClose - The function to execute when the notification is close.
  @param {number} props.autoCloseDelay - The autoCloseDelay number to close the notification.
  @param {boolean} props.closeManually - The closeManually boolean to decide if the notification should close manually
  @return {JSX.Element} A React component that displays a notification.
  */
export var Notification = function Notification(_ref) {
  var position = _ref.position,
    type = _ref.type,
    title = _ref.title,
    message = _ref.message,
    onClose = _ref.onClose,
    _ref$autoCloseDelay = _ref.autoCloseDelay,
    autoCloseDelay = _ref$autoCloseDelay === void 0 ? 5000 : _ref$autoCloseDelay,
    _ref$closeManually = _ref.closeManually,
    closeManually = _ref$closeManually === void 0 ? false : _ref$closeManually;
  var theme = useTheme();
  var deviceType = useDeviceType();
  var isMobile = deviceType === DeviceType.MOBILE;
  useEffect(function () {
    var interval;
    if (!closeManually) {
      interval = setInterval(function () {
        return onClose();
      }, autoCloseDelay);
    }
    return function () {
      clearInterval(interval);
    };
  }, []);
  useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function () {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  var iconName = ICON_NAMES[type];
  var getIconColor = function getIconColor(type) {
    if (type === NoticationTypes.Error) {
      return theme.border.notification.error;
    }
    if (type === NoticationTypes.Success) {
      return theme.border.notification.success;
    }
    if (type === NoticationTypes.Info) {
      return theme.border.notification.info;
    }
  };
  var iconColor = getIconColor(type);
  var sanitizedMessage = function sanitizedMessage() {
    return DOMPurify.sanitize(message, {
      ADD_ATTR: ['target']
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, title.length > 0 && /*#__PURE__*/React.createElement(Backdrop, null), /*#__PURE__*/React.createElement(Container, {
    key: "notification-".concat(message ? message.substring(0, 5) : title.substring(0, 5)),
    position: position,
    type: type,
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(SubContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(Icons, {
    fill: "transparent",
    name: iconName,
    color: iconColor,
    size: 24
  })), /*#__PURE__*/React.createElement(ContentContainer, null, /*#__PURE__*/React.createElement(Title, {
    isMobile: isMobile
  }, title), message && /*#__PURE__*/React.createElement(Message, {
    dangerouslySetInnerHTML: {
      __html: sanitizedMessage()
    }
  }))), /*#__PURE__*/React.createElement(CloseIcon, {
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icons, {
    name: "X",
    color: iconColor,
    size: 18
  }))));
};