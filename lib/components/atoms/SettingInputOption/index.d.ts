import React from "react";
interface SettingInputOptionProps {
    value: string;
    placeholder?: string;
    handleValue: (value: string) => void;
}
export declare const SettingInputOption: ({ value, placeholder, handleValue }: SettingInputOptionProps) => React.JSX.Element;
export {};
