import { ReactNode } from 'react';
export interface DialogProps {
    children: ReactNode;
    onClose: () => void;
    isOpen: boolean;
    withoutEffect?: boolean;
}
/**
  React component for displaying a dialog box.
  @param {DialogProps} props - The props object containing the title, children, onClose function, and isOpen boolean.
  @property {React.ReactNode} children - The children of the dialog box.
  @property {Function} onClose - The function to be called when the dialog box is closed.
  @property {Function} isOpen - Boolean value to know the status of the dialog
  @returns {JSX.Element} - A JSX element representing the dialog box component.
*/
export declare const Dialog: ({ children, onClose, isOpen, withoutEffect }: DialogProps) => JSX.Element;
