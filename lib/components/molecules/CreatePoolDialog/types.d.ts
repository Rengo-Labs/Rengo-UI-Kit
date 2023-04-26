export interface TokenData {
    id: string;
    name: string;
    fullName: string;
    amount: string;
    tokenImg: string;
}
export interface CreatePoolDialogProps {
    isOpen: boolean;
    closeCallback: () => void;
    tokenListData: TokenData[];
    popularTokensData: TokenData[];
    onSelectToken: (name: string) => void;
    onSelectFavoriteToken?: (name: string, value: boolean) => void;
    handleViewTokenList?: () => void;
}
