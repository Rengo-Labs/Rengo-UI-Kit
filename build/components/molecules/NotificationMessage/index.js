import React from 'react';
import { Dialog } from '../../atoms/Dialog';
import { Notification } from '../../atoms/Notification';
import { NoticationTypes, NotificationPositions } from '../../atoms/Notification/types';
/**
 * Renders the NotificationMessage component
 * @param {() => void} onClose - Function to close the notification
 * @param {boolean} isOpen - Boolean to show or hide the notification
 * @param {string} title - Title of the notification
 * @param {string} subtitle - Subtitle of the notification
 * @param {string} type  - Type of the notification (success, error, info)
 * @param {number | undefined} autoCloseDelay - Time in milliseconds to close the notification (milliseconds)
 * @param {string | undefined} position - Position of the notification (top, right, center)
 * @param {boolean} closeManually - Boolean to decide if the notification should close manually
 * @returns {JSX.Element}
 * @constructor
 */
export var NotificationMessage = function NotificationMessage(_ref) {
  var onClose = _ref.onClose,
    isOpen = _ref.isOpen,
    _ref$isOnlyNotificati = _ref.isOnlyNotification,
    isOnlyNotification = _ref$isOnlyNotificati === void 0 ? true : _ref$isOnlyNotificati,
    title = _ref.title,
    subtitle = _ref.subtitle,
    type = _ref.type,
    _ref$autoCloseDelay = _ref.autoCloseDelay,
    autoCloseDelay = _ref$autoCloseDelay === void 0 ? 5000 : _ref$autoCloseDelay,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'top' : _ref$position,
    closeManually = _ref.closeManually;
  var getNotificationType = function getNotificationType(type) {
    switch (type) {
      case 'success':
        return NoticationTypes.Success;
      case 'error':
        return NoticationTypes.Error;
      case 'info':
        return NoticationTypes.Info;
      default:
        return NoticationTypes.Success;
    }
  };
  var getNotificationPosition = function getNotificationPosition(type) {
    switch (type) {
      case 'top':
        return NotificationPositions.TopCenter;
      case 'right':
        return NotificationPositions.TopRight;
      case 'center':
        return NotificationPositions.TopCenter;
      default:
        return NotificationPositions.TopCenter;
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dialog, {
    onClose: onClose,
    isOpen: isOpen,
    withoutEffect: true
  }, /*#__PURE__*/React.createElement("div", null)), isOnlyNotification && /*#__PURE__*/React.createElement(Notification, {
    title: title,
    message: subtitle,
    type: getNotificationType(type),
    position: getNotificationPosition(position),
    onClose: onClose,
    autoCloseDelay: autoCloseDelay,
    closeManually: closeManually
  }));
};