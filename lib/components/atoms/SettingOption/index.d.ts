import React from 'react';
export interface SettingOptionProps {
    value: number;
    isInput?: boolean;
    handleValue: (value: number) => void;
}
export declare const SettingOption: ({ value, handleValue, isInput }: SettingOptionProps) => React.JSX.Element;
