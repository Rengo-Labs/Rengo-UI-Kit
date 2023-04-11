import React, { ReactNode, RefObject, useEffect } from 'react'
import { CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle } from './styles'
import { Icons } from '../../atoms'
import { useTheme } from 'styled-components'
import {theme} from '../../../styles/themes/themes'

interface Props {
  title: string
  ref: RefObject<HTMLDialogElement>
  children: ReactNode
}

export const Dialog = ({ title, ref, children } : Props) => {
  const theme = useTheme() as theme;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && ref.current) {
        handleClose()
      }
    };
  
    ref.current?.addEventListener("keydown", handleKeyDown);
  
    return () => {
      ref.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    if (ref.current) {
      ref.current?.close()
    }
  }
  
  return (
    <Container
      ref={ref}>
      <DialogHeaderContainer>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <CloseButton
            onClick={handleClose}>
            <Icons name='X' size={23} color={theme.color.default} />
          </CloseButton>
        </DialogHeader>
        
      </DialogHeaderContainer>
      {children}
    </Container>
  )
}