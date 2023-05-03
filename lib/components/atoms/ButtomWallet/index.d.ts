export interface IButtonWalletProps {
    handleClick: (() => void) | undefined;
    accountHashString?: string | null;
}
export declare const ButtonWallet: ({ handleClick, accountHashString }: IButtonWalletProps) => JSX.Element;
