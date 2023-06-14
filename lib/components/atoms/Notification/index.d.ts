import React from 'react';
import { NotificationProps } from './types';
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
export declare const Notification: ({ position, type, title, message, onClose, autoCloseDelay, closeManually }: NotificationProps) => React.JSX.Element;
