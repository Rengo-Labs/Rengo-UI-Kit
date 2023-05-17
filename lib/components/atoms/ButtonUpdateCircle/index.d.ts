import React from 'react';
export interface IButtonUpdateCircle {
    getProgress: () => number;
    clearProgress?: () => void;
    strokeWidth: number;
    handlerAction: () => Promise<void>;
}
export declare const ButtonUpdateCircle: ({ getProgress, clearProgress, strokeWidth, handlerAction }: IButtonUpdateCircle) => React.JSX.Element;
