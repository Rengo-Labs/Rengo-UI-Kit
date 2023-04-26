import { InputProps } from './types';
/**
 * Renders an input field with an optional label, helper text, and icon.
 *
 * @param {string} placeholder - The placeholder text to display in the input field.
 * @param {Status} [status=''] - The status of the input field, one of 'success', 'error', or 'default'.
 * @param {Type} [type='icon-label-helper-text'] - The type of the input field, one of 'icon-label-helper-text', 'icon-helper-text', 'helper-text-only', 'plain', 'label-helper-text', 'label-icon', 'label-plain' or 'icon-plain'.
 * @param {string} label - The label to display above the input field.
 * @param {string} helperText - The helper text to display below the input field.
 * @param {string} iconWrapperBackground - The background color for the icon.
 * @param {React.ReactNode} rightAdornment - The adornment to be display at the right of the input, accepts a component or string
 * @param {React.ReactNode} Icon - The icon component to display inside the input field.
 * @param {IconSize} [iconSize='small'] - The size of the icon, one of 'small' or 'large', necessary if you pass an icon component.
 * @param {function} onChange - A callback function to be called when the input value changes. Should accept a string argument representing the new value of the input field.
 * @param {function} validator - A callback function to be called when the input changes, the user must implement the validator.
 *
 * @returns {JSX.Element} The rendered input field.
 */
export declare const Input: ({ placeholder, status, type, label, helperText, rightAdornment, hasBackground, Icon, iconSize, iconWrapperBackground, onChange, validator, value }: InputProps) => JSX.Element;
