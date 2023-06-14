import React from 'react';
export interface TextIconTouchableProps {
    startIcon?: string;
    name?: string;
    endIcon?: string;
    actionCallBack: () => void;
    background?: string;
    color?: string;
    iconHeight?: number;
    iconWidth?: number;
    padding?: number;
    isUpperCase?: boolean;
}
export declare const TextIconTouchable: ({ startIcon, name, endIcon, actionCallBack, background, color, iconHeight, iconWidth, padding, isUpperCase }: TextIconTouchableProps) => React.JSX.Element;
