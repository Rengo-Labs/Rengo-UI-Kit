import React, { useEffect, useState } from 'react'
import { Backdrop, CloseIcon, Container, ContentContainer, IconWrapper, Message, SubContainer, Title } from './styles'
import { Icons } from '../Icons'
import {theme} from '../../../styles/themes/themes'
import { useTheme } from 'styled-components'
import { NoticationTypes, NotificationProps } from './types'
import { useDeviceType } from '../../../hooks'
import { DeviceType } from '../../../hooks/types'
import DOMPurify from 'dompurify'

type IconNames = {
  [key: string]: string;
};

const ICON_NAMES: IconNames = {
  'success': 'CheckCircle',
  'error': 'Info',
  'info': 'Info'
}

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
export const Notification = ({ position, type, title, message, onClose, autoCloseDelay = 5000, closeManually = false }: NotificationProps) => {
  const theme = useTheme() as theme;
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    
    if (!closeManually) {
      interval = setInterval(() => onClose(), autoCloseDelay);
    }

    return () => {
      clearInterval(interval)
    };
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const iconName = ICON_NAMES[type]

  const getIconColor = (type: string) => {
    if (type === NoticationTypes.Error) {
      return theme.border.notification.error
    }

    if (type === NoticationTypes.Success) {
      return theme.border.notification.success
    }

    if (type === NoticationTypes.Info) {
      return theme.border.notification.info
    }
  }

  const iconColor = getIconColor(type)
  const sanitizedMessage = () => DOMPurify.sanitize(message, { ADD_ATTR: ['target']});

  return (
    <>
    {title.length > 0 && <Backdrop /> }
    <Container
      key={`notification-${message ? message.substring(0, 5) : title.substring(0, 5)}`}
      position={position}
      type={type}
      isMobile={isMobile}
      >
        <SubContainer isMobile={isMobile}>
          <IconWrapper>
            <Icons
              fill='transparent'
              name={iconName}
              color={iconColor}
              size={24} />

          </IconWrapper>

          <ContentContainer>
            <Title isMobile={isMobile}>
              {title}
            </Title>
            {message && (
              <Message dangerouslySetInnerHTML={{__html: sanitizedMessage()}} />
            )}
          </ContentContainer>
        </SubContainer>

        <CloseIcon onClick={onClose} >
          <Icons
            name='X'
            color={iconColor}
            size={18} />

        </CloseIcon>
    </Container>
    </>
  )
}
