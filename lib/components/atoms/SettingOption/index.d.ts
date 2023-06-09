import React from 'react';
export interface SettingOptionProps {
    value: number;
    isInput?: boolean;
    handleValue: (value: number) => void;
    isSelect?: boolean;
}
export declare const SettingOption: ({ value, handleValue, isInput, isSelect }: SettingOptionProps) => React.JSX.Element;
