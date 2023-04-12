import React, { ReactNode, useEffect, forwardRef, ForwardedRef, useRef } from 'react'
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

export const Dialog = forwardRef(({ title, children, onClose, isOpen }: Props) => {
  const theme = useTheme() as theme;
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose()
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <>
      {isOpen && <Backdrop />}
      <Container
        ref={dialogRef}
        isOpen={isOpen}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <DialogHeaderContainer>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <CloseButton onClick={handleClose}>
              <Icons name='X' size={23} color={theme.color.modalText} />
            </CloseButton>
          </DialogHeader>
        </DialogHeaderContainer>
        {children}
      </Container>
    </>
  )
});
