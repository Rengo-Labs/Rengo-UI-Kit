import React from "react";
import { Options } from "../../atoms/WalletConnectedOptionsDialog/types";
export interface WalletConnectedOptionsProps {
    closeCallback: () => void;
    options: Options[];
    isOpen: boolean;
}
export declare const WalletConnectedOptions: ({ closeCallback, options, isOpen }: WalletConnectedOptionsProps) => React.JSX.Element;
