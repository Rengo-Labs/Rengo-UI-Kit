import React from 'react'
import {Dialog} from '../../atoms/Dialog'
import {Notification} from '../../atoms/Notification'
import {NoticationTypes, NotificationPositions} from '../../atoms/Notification/types'

export interface NotificationMessageProps {
    onClose: () => void
    isOpen: boolean
    isOnlyNotification: boolean
    title: string
    subtitle: string
    type: string
    autoCloseDelay?: number
    position?: string
    closeManually?: boolean
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
export const NotificationMessage = ({
                                        onClose,
                                        isOpen,
                                        isOnlyNotification = true,
                                        title,
                                        subtitle,
                                        type,
                                        autoCloseDelay = 5000,
                                        position = 'top',
                                        closeManually
                                    }: NotificationMessageProps) => {
    const getNotificationType = (type: string) => {
        switch (type) {
            case 'success':
                return NoticationTypes.Success
            case 'error':
                return NoticationTypes.Error
            case 'info':
                return NoticationTypes.Info
            default:
                return NoticationTypes.Success
        }
    }

    const getNotificationPosition = (type: string) => {
        switch (type) {
            case 'top':
                return NotificationPositions.TopCenter
            case 'right':
                return NotificationPositions.TopRight
            case 'center':
                return NotificationPositions.TopCenter
            default:
                return NotificationPositions.TopCenter
        }
    }

    return (
        <>
            <Dialog onClose={onClose} isOpen={isOpen} withoutEffect={true}>
                <div></div>
            </Dialog>
            {isOnlyNotification &&
                <Notification
                    title={title}
                    message={subtitle}
                    type={getNotificationType(type)}
                    position={getNotificationPosition(position)}
                    onClose={onClose}
                    autoCloseDelay={autoCloseDelay}
                    closeManually={closeManually}
                />
            }
        </>
    )
}

