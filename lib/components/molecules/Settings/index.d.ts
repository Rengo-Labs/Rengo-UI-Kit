import React from 'react';
export interface SettingsProps {
    slippageToleranceValue: string;
    customNodeUrlValue: string;
    handleSave: (slippage: string, node: string) => void;
    handleClose: () => void;
    isOpen: boolean;
}
export declare const Settings: ({ slippageToleranceValue, customNodeUrlValue, handleSave, handleClose, isOpen }: SettingsProps) => React.JSX.Element;
