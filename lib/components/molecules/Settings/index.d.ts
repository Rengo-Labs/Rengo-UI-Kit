export interface SettingsProps {
    slippageToleranceValue: number;
    customNodeUrlValue: string;
    handleSave: (slippage: number, node: string) => void;
    handleClose: () => void;
    isOpen: boolean;
}
export declare const Settings: ({ slippageToleranceValue, customNodeUrlValue, handleSave, handleClose, isOpen }: SettingsProps) => JSX.Element;
