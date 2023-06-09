import React from "react";
interface SettingInputOptionProps {
    value: number;
    placeholder?: string;
    handleValue: (value: number) => void;
}
export declare const SettingInputOption: ({ value, placeholder, handleValue }: SettingInputOptionProps) => React.JSX.Element;
export {};
