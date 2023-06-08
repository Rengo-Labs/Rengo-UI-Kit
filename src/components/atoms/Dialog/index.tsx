import React, { ReactNode, useEffect, useRef } from 'react'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { Backdrop, Container } from './styles'

export interface DialogProps {
  children: ReactNode
  onClose: () => void
  isOpen: boolean
  withoutEffect?: boolean
}

/**
  React component for displaying a dialog box.
  @param {DialogProps} props - The props object containing the title, children, onClose function, and isOpen boolean.
  @property {React.ReactNode} children - The children of the dialog box.
  @property {Function} onClose - The function to be called when the dialog box is closed.
  @property {Function} isOpen - Boolean value to know the status of the dialog
  @returns {JSX.Element} - A JSX element representing the dialog box component.
*/

export const Dialog = ({ children, onClose, isOpen, withoutEffect = false }: DialogProps) => {
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
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
      {isOpen && <Backdrop /> }
      <Container
        isMobile={isMobile}
        ref={dialogRef}
        onPointerDown={(e) => e.stopPropagation()}
        isOpen={isOpen}
        withoutEffect={withoutEffect}
      >
        {children}
      </Container>
    </>
  )
};
