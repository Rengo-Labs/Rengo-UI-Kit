import { HorizontalCardProps } from './types';
/**
  HorizontalCard Component.
  This component displays information about a token pair with associated liquidity and user pool information.
  It also provides action buttons for removing, swapping, viewing, adding liquidity and favoriting the token pair.
  @param {Object} props - The props object.
  @param {string} props.icon - The icon of the token pair.
  @param {boolean} props.hasFavorite - Boolean to control the display of the FavoriteIcon
  @param {Array<string>} props.tokenPairs - The names of the token pairs. An array of two tokens that make up a pair
  @param {Array<{name: string, value: string}>} props.pairsLiquidity - The liquidity values of the token pairs. An array of objects containing name-value pairs for liquidity information
  @param {Array<string>} props.userPoolInfo - The user pool information. An array of two strings representing user's liquidity and share information
  @param {Function} props.trashHandler - The function to handle remove action.
  @param {Function} props.swapHandler - The function to handle swap action.
  @param {Function} props.viewHandler - The function to handle view action.
  @param {Function} props.itemHandler - The function to handle item click action.
  @param {Function} props.addLiquidityHandler - The function to handle add liquidity action.
  @param {Function} props.favoriteHandler - The function to handle favorite action.
  @returns {JSX.Element} A React JSX Element that displays the token pair, liquidity and user pool information with associated action buttons.
*/
export declare const HorizontalCard: ({ firstTokenIcon, secondTokenIcon, tokenPairs, pairsLiquidity, userPoolInfo, hasFavorite, trashHandler, swapHandler, viewHandler, itemHandler, addLiquidityHandler, favoriteHandler }: HorizontalCardProps) => JSX.Element;
