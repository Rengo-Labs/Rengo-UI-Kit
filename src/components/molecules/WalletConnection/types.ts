export interface Wallet {
  id: number;
  name: string;
  icon: string;
  onConnect: () => void;
}

export interface ConnectionPopupProps {
  closeCallback: () => void;
  linkCallback?: () => void;
  wallets: Wallet[];
  isOpen: boolean;
}
