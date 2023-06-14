import React from 'react';
import { InputType } from './types';
export interface KeyValueInputProps {
    keyText: string;
    value: number;
    onChange?: (value: number) => void;
    inputType?: InputType;
    editable?: boolean;
}
/**
 * Render a key-value text.
 * @param {string} keyText - The key text to display in the input field.
 * @param {number} value - The value text to display in the input field.
 * @param {function} onChange - The function to call when the input value changes.
 * @param {InputType} inputType - The type of input to display.
 * @returns  {JSX.Element} The rendered the key-value text.
 */
export declare const KeyValueInput: ({ keyText, value, onChange, inputType, editable }: KeyValueInputProps) => React.JSX.Element;
