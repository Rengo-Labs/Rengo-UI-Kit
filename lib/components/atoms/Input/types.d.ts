import { ReactNode } from "react";
export declare enum IconSize {
    Small = "small",
    Large = "large"
}
export interface InputProps {
    placeholder: string;
    status: Status;
    type: Type;
    label?: string;
    helperText?: string;
    rightAdornment?: ReactNode | string;
    Icon?: ReactNode;
    iconSize?: IconSize;
    onChange: (e: string) => void;
    validator?: (e: string) => string;
    value?: any;
    hasBackground?: boolean;
    iconWrapperBackground?: string;
    textAlign?: string;
}
export declare enum Status {
    Default = "default",
    Error = "error",
    Success = "success"
}
export declare enum Type {
    IconLabelHelperText = "icon-label-helper-text",
    IconHelperText = "icon-helper-text",
    HelperTextOnly = "helper-text-only",
    Plain = "plain",
    LabelHelperText = "label-helper-text",
    LabelIcon = "label-icon",
    LabelPlain = "label-plain",
    IconPlain = "icon-plain"
}
export declare const TYPES_WITH_ICON: Type[];
export declare const TYPES_WITH_HELPER_TEXT: Type[];
export declare const TYPES_WITH_LABEL: Type[];
