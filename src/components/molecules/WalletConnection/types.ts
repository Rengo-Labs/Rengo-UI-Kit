export interface Wallet {
  id: number;
  name: string;
  icon: string;
} 

export interface ConnectionPopupProps {
  closeCallback: () => void;
  linkCallback?: () => void;
  wallets: Wallet[];
  isOpen: boolean;
}
