import React from 'react';
export interface SettingOptionProps {
    value: string;
    isInput?: boolean;
    handleValue: (value: string) => void;
    isSelect?: boolean;
}
export declare const SettingOption: ({ value, handleValue, isInput, isSelect }: SettingOptionProps) => React.JSX.Element;
