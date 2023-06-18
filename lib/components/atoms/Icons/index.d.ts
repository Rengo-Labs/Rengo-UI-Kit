import React from 'react';
import { IconProps } from 'react-feather';
export interface IconsProps extends IconProps {
    name: string;
    color?: string;
    size?: number;
    fill?: string;
}
export declare const iconNames: string[];
export declare const Icons: ({ name, color, size, fill }: IconsProps) => React.JSX.Element | null;
