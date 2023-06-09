import { ChangeEvent, ReactNode } from "react";
import { IconSize, Status, Type } from "./types";
interface userInputProps {
    status?: Status;
    type?: Type;
    placeholder?: string;
    label?: string;
    helperText?: string;
    rightAdornment?: ReactNode | string;
    Icon?: ReactNode;
    iconSize?: IconSize;
    hasBackground?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    validator?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const useInput: () => {
    getInputProps: ({ onChange, validator, ...props }: userInputProps) => {
        status?: Status | undefined;
        type?: Type | undefined;
        placeholder?: string | undefined;
        label?: string | undefined;
        helperText?: string | undefined;
        rightAdornment?: ReactNode | string;
        Icon?: ReactNode;
        iconSize?: IconSize | undefined;
        hasBackground?: boolean | undefined;
        onChange: (...args: any) => void;
    };
};
export {};
