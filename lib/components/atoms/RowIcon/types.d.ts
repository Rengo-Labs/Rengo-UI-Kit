export declare enum IconSize {
    Small = 30,
    Large = 45
}
export interface RowIconProps {
    tokenName: string;
    tokenFullName: string;
    Icon?: string;
    iconSize: IconSize;
    onSelectToken: () => void;
}
