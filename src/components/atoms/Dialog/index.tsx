import React, { ReactNode, useEffect, useRef } from 'react'
import { Backdrop, CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle } from './styles'
import { Icons } from '..'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'

export interface DialogProps {
  title: string
  children: ReactNode
  onClose: () => void
  isOpen: boolean
}

/**
  React component for displaying a dialog box.
  @param {DialogProps} props - The props object containing the title, children, onClose function, and isOpen boolean.
  @property {string} title - The title of the dialog box.
  @property {React.ReactNode} children - The children of the dialog box.
  @property {Function} onClose - The function to be called when the dialog box is closed.
  @property {boolean} isOpen - Whether the dialog box is open or not.
  @returns {JSX.Element} - A JSX element representing the dialog box component.
*/

export const Dialog = ({ title, children, onClose, isOpen }: DialogProps) => {
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
    dialogRef?.current?.close();
    onClose();
  };

  return (
    <>
      {isOpen && <Backdrop />}
      <Container
        ref={dialogRef}
        // ref={ref}
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
};
