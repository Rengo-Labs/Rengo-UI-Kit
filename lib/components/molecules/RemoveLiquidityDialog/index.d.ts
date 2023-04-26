import { RemoveLiquidityDialogProps } from "./types";
/**
  React component for a Remove Liquidity dialog box.
  @component
  @param {RemoveLiquidityDialogProps} props - The props object containing the following properties:
  @param {string} props.id - The ID of the liquidity pool.
  @param {string} props.isOpen - The status of the liquidity pool.
  @param {Function} props.closeCallback - A function to be called when the dialog is closed, passing the liquidity pool state as an optional argument.
  @param {TokenData[]} props.liquidityPoolData - An array of token data for the liquidity pool.
  @returns {JSX.Element} - A JSX element representing the Remove Liquidity dialog box.
*/
export declare const RemoveLiquidityDialog: ({ id, closeCallback, liquidityPoolData, isOpen }: RemoveLiquidityDialogProps) => JSX.Element;
