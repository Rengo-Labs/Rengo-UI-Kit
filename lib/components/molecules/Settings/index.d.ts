import React from 'react';
export interface SettingsProps {
    slippageToleranceValue: string;
    customNodeUrlValue: string;
    handleSave: (slippage: string, node: string) => void;
    handleClose: () => void;
    isOpen: boolean;
    networkGasFeeETHValue: number;
    handleETHNetworkGasFee: (value: string) => void;
    networkGasFeeCSTValue: number;
    handleCSTNetworkGasFee: (value: string) => void;
    placeholderForCST: string;
    placeholderForETH: string;
    titleForCST: string;
    titleForETH: string;
}
export declare const Settings: ({ slippageToleranceValue, customNodeUrlValue, networkGasFeeETHValue, handleETHNetworkGasFee, networkGasFeeCSTValue, handleCSTNetworkGasFee, placeholderForCST, placeholderForETH, titleForCST, titleForETH, handleSave, handleClose, isOpen }: SettingsProps) => React.JSX.Element;
