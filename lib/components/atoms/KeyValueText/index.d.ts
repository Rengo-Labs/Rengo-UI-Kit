import React from 'react';
export interface KeyValueTextProps {
    keyText: string;
    valueText: string;
    isMoney?: boolean;
}
/**
 * Render a key-value text.
 * @param {string} keyText - The key text to display in the key field.
 * @param {string} valueText - The value text to display in the value field.
 * @returns  {JSX.Element} The rendered the key-value text.
 */
export declare const KeyValueText: ({ keyText, valueText, isMoney }: KeyValueTextProps) => React.JSX.Element;
