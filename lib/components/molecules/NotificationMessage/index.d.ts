import React from 'react';
export interface NotificationMessageProps {
    onClose: () => void;
    isOpen: boolean;
    isOnlyNotification: boolean;
    title: string;
    subtitle: string;
    type: string;
    autoCloseDelay?: number;
    position?: string;
    closeManually?: boolean;
}
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
export declare const NotificationMessage: ({ onClose, isOpen, isOnlyNotification, title, subtitle, type, autoCloseDelay, position, closeManually }: NotificationMessageProps) => React.JSX.Element;
