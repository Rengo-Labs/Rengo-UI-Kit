import React, { ReactNode, useEffect, forwardRef, ForwardedRef, useState } from 'react'
import { Backdrop, CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle } from './styles'
import { Icons } from '../../atoms'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'

interface Props {
  title: string
  children: ReactNode
  onClose: () => void
  isOpen: boolean
}

export const Dialog = forwardRef((props: Props, ref: ForwardedRef<HTMLDialogElement>) => {
  const { title, children, onClose, isOpen } = props;
  const theme = useTheme() as theme;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (ref != null && typeof ref !== 'function') {
        if (event.key === "Escape") {
          handleClose()
        }
      }
    };
  
    if (ref != null && typeof ref !== 'function') {
      ref.current?.addEventListener("keydown", handleKeyDown);
    }
  
    return () => {
      if (ref != null && typeof ref !== 'function') {
        ref.current?.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  const handleClose = () => {
    if (ref != null && typeof ref !== 'function') {
      ref.current?.close()
      onClose()
    }
  }

  return (
    <>
      <Container ref={ref}
       isOpen={isOpen}>
      <DialogHeaderContainer>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <CloseButton onClick={handleClose}>
            <Icons name='X' size={23} color={theme.color.primary.default} />
          </CloseButton>
        </DialogHeader>
      </DialogHeaderContainer>
      {children}
    </Container>
    </>
    
  )
});
