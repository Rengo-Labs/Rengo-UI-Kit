import React from 'react';
export interface SettingOptionButtonProps {
    value: string;
    isInput?: boolean;
    handleValue: () => void;
    isSelect?: boolean;
}
export declare const SettingOptionButton: ({ value, handleValue, isSelect }: SettingOptionButtonProps) => React.JSX.Element;
