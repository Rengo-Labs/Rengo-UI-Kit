/// <reference types="react" />
import { ClaimDialogProps } from "./types";
/**
 React component for a Remove Liquidity dialog box.
 @component
 @param {function} closeCallback - A function to be called when the dialog is closed, passing the liquidity pool state as an optional argument.
 @param {string} isOpen - The status of the liquidity pool.
 @param {boolean} disabledButton - The status of the remove liquidity button.
 @param {function} handleChangeInput - A function to be called when the input is changed.
 @param {function} handleToggle - A function to be called when the toggle is changed.

 @returns {JSX.Element} - A JSX element representing the Remove Liquidity dialog box.
 */
export declare const ClaimDialog: ({ titleDialog, titleConfirmButton, closeCallback, isOpen, disabledButton, handleAction, networkGasFee, networkGasFeeSetter, children }: ClaimDialogProps) => JSX.Element;
