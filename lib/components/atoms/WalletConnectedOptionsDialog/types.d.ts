export interface CopiedProps {
    id: string;
    status: boolean;
}
export declare enum Types {
    Redirect = "redirect",
    Copy = "copy",
    Action = "action"
}
export interface Options {
    id: string;
    key: string;
    name: string;
    iconName: string;
    icon: string;
    type: Types;
    onClick?: () => void;
}
export interface WalletConnectedOptionsDialogProps {
    closeCallback: () => void;
    options: Options[];
    isOpen: boolean;
}
