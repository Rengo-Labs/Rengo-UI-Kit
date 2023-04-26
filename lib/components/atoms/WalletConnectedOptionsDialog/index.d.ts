import { WalletConnectedOptionsDialogProps } from './types';
/**
  A React component for a dialog displaying wallet-connected options.
 @typedef {Object} Options
  @property {string} id - The ID of the option.
  @property {string} key - The key of the option.
  @property {string} name - The name of the option.
  @property {string} iconName - The name of the icon to display for the option.
  @property {string} icon - The URL of the icon to display for the option.
  @property {Types} type - The type of the option.
  @typedef {Object} WalletConnectedOptionsDialogProps
  @property {Function} closeCallback - The function to execute when the dialog is closed.
  @property {Options[]} options - The array of options of type Options to display in the dialog.
  @param {WalletConnectedOptionsDialogProps} props - The props of the component.
  @returns {JSX.Element} - A React component that displays a dialog with wallet-connected options.
*/
export declare const WalletConnectedOptionsDialog: ({ closeCallback, options, isOpen }: WalletConnectedOptionsDialogProps) => JSX.Element;
