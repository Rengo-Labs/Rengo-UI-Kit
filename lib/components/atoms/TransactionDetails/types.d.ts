import { ReactNode } from "react";
export declare enum Distribution {
    Center = "center",
    SpaceAround = "space-around",
    SpaceEvenly = "space-evenly",
    SpaceBetween = "space-between"
}
export declare enum IconSize {
    Small = 30,
    Large = 45
}
export interface TransactionProps {
    distribution: Distribution;
    LeftAdornment?: ReactNode | JSX.Element;
    LeftAdornmentCallback?: () => void;
    Icon?: string;
    iconSize?: IconSize;
    tokenNames?: Array<string>;
    tokenFullName?: string;
    tokenNameSymbols?: Array<string>;
    amount?: string;
    isLast?: boolean;
    onSelectToken?: () => void;
}
